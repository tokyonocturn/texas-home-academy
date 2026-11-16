#!/usr/bin/env node
/**
 * Post-build offline guard.
 *
 * The app is a static, same-origin SPA with no backend. A production build must
 * therefore load with no internet at all. This check fails the build if the
 * shipped HTML, manifest, CSS, or service worker introduces:
 *   - an http(s) or protocol-relative runtime reference,
 *   - a missing local file referenced by index.html,
 *   - an external font, image, or stylesheet in built CSS,
 *   - or a service worker that no longer precaches the built index assets.
 */
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const failures = [];

function fail(message) {
  failures.push(message);
}

function assertLocalReference(ref, source) {
  if (!ref || ref.startsWith('#') || ref.startsWith('data:') || ref.startsWith('mailto:')) return;
  if (/^(https?:)?\/\//i.test(ref)) {
    fail(`${source}: external runtime reference "${ref}"`);
    return;
  }
  const clean = ref.split(/[?#]/)[0];
  if (!clean) return;
  const file = resolve(dist, clean.replace(/^\.\//, '').replace(/^\/+/, ''));
  if ((file !== dist && !file.startsWith(dist + sep)) || !existsSync(file)) {
    fail(`${source}: referenced file does not exist: "${ref}"`);
  }
}

const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) {
  fail('dist/index.html is missing; run vite build first');
} else {
  const html = readFileSync(indexPath, 'utf8');
  for (const match of html.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/gi)) {
    assertLocalReference(match[1], 'dist/index.html');
  }
  if (/<(?:script|link)[^>]+(?:src|href)\s*=\s*["'](?:https?:)?\/\//i.test(html)) {
    fail('dist/index.html loads a remote script or stylesheet');
  }

  const manifestPath = join(dist, 'manifest.webmanifest');
  if (existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
      assertLocalReference(manifest.start_url ?? './', 'manifest.start_url');
      for (const icon of manifest.icons ?? []) {
        assertLocalReference(icon.src, 'manifest.icons');
      }
    } catch (error) {
      fail(`manifest.webmanifest is not valid JSON: ${error.message}`);
    }
  }
}

const assetsDir = join(dist, 'assets');
if (existsSync(assetsDir)) {
  for (const name of readdirSync(assetsDir)) {
    if (!name.endsWith('.css')) continue;
    const css = readFileSync(join(assetsDir, name), 'utf8');
    for (const match of css.matchAll(/url\(\s*['"]?([^'")]+)/gi)) {
      assertLocalReference(match[1], `dist/assets/${name}`);
    }
    for (const match of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s]+)/gi)) {
      assertLocalReference(match[1], `dist/assets/${name} @import`);
    }
  }
}

const swPath = join(dist, 'sw.js');
if (!existsSync(swPath)) {
  fail('dist/sw.js is missing; the production build cannot run offline');
} else {
  const sw = readFileSync(swPath, 'utf8');
  if (!/fetch\(\s*['"]\.\/index\.html['"]/.test(sw) || !/matchAll/.test(sw)) {
    fail('dist/sw.js no longer reads index.html to precache its hashed assets');
  }
  if (!/cache\.addAll/.test(sw)) {
    fail('dist/sw.js no longer precaches the app shell');
  }
  if (!/SHELL\.map[\s\S]{0,120}new URL/.test(sw)) {
    fail('dist/sw.js no longer normalizes shell URLs before cache.addAll (duplicates fail install)');
  }
  if (!/ignoreVary:\s*true/.test(sw)) {
    fail('dist/sw.js no longer ignores Vary when matching cached assets (cache may miss JS/CSS)');
  }
}

if (failures.length > 0) {
  console.error('Offline build check failed:');
  for (const message of failures) console.error(`  - ${message}`);
  process.exit(1);
}

console.log('Offline build check passed: no external runtime assets and the service worker precaches the built app.');
