import { describe, expect, it } from 'vitest';
import indexHtml from '../index.html?raw';
import stylesCss from './styles.css?raw';
import manifestRaw from '../public/manifest.webmanifest?raw';
import serviceWorker from '../public/sw.js?raw';

/**
 * Offline regression guard.
 *
 * The app is a static, same-origin SPA: no fonts, scripts, styles, or fetches
 * may come from another origin at runtime, and the service worker must cache
 * the fingerprint-named production assets referenced by index.html. Removing
 * any of this silently breaks a family's ability to reopen the app offline.
 */

function localReferences(html: string): string[] {
  const refs: string[] = [];
  for (const match of html.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/gi)) {
    const ref = match[1];
    if (ref.startsWith('#') || ref.startsWith('data:') || ref.startsWith('mailto:')) continue;
    refs.push(ref);
  }
  return refs;
}

describe('offline app shell', () => {
  it('loads every script, stylesheet, icon, and manifest from its own origin', () => {
    const refs = localReferences(indexHtml);
    expect(refs.length).toBeGreaterThan(0);
    for (const ref of refs) {
      expect(ref, `external runtime reference in index.html: ${ref}`).not.toMatch(/^(https?:)?\/\//i);
    }
    expect(indexHtml).not.toMatch(/<(?:script|link)[^>]+(?:src|href)\s*=\s*["'](?:https?:)?\/\//i);
  });

  it('has no external fonts, images, or stylesheet imports', () => {
    for (const match of stylesCss.matchAll(/url\(\s*['"]?([^'")]+)/gi)) {
      expect(match[1], `external url() in styles.css: ${match[1]}`).not.toMatch(
        /^(https?:)?\/\//i,
      );
    }
    for (const match of stylesCss.matchAll(/@import\s+(?:url\()?['"]?([^'")\s]+)/gi)) {
      expect(match[1], `external @import in styles.css: ${match[1]}`).not.toMatch(
        /^(https?:)?\/\//i,
      );
    }
  });

  it('keeps every manifest icon and start URL local', () => {
    const manifest = JSON.parse(manifestRaw) as {
      start_url?: string;
      icons?: { src: string }[];
    };
    for (const ref of [manifest.start_url, ...(manifest.icons ?? []).map((icon) => icon.src)]) {
      expect(ref, `external manifest reference: ${ref}`).not.toMatch(/^(https?:)?\/\//i);
    }
  });

  it('precaches the built index assets, not just the four static shell files', () => {
    // The build fingerprints JS/CSS names, so the worker must discover them
    // from the deployed index.html during install.
    expect(serviceWorker).toMatch(/fetch\(\s*['"]\.\/index\.html['"]/);
    expect(serviceWorker).toMatch(/matchAll/);
    expect(serviceWorker).toMatch(/cache\.addAll/);
    expect(serviceWorker).toMatch(/skipWaiting/);
    // The shell and the index-discovered URLs must normalize together, or
    // cache.addAll rejects the duplicate and install fails silently.
    expect(serviceWorker).toMatch(/SHELL\.map[\s\S]{0,120}new URL/);
    // Static hosts may send Vary: Origin on JS/CSS; module-script requests have
    // an Origin header, so strict Vary matching misses a cached asset.
    expect(serviceWorker).toMatch(/ignoreVary:\s*true/);
  });
});
