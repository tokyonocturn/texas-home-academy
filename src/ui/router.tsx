import { useCallback, useEffect, useState } from 'react';

/**
 * Minimal hash router. Hash routing keeps the built site working from a plain
 * folder, a GitHub Pages project path, or an offline file share.
 */

export function currentPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash === '' ? '/dashboard' : hash;
}

export function navigate(path: string): void {
  if (currentPath() === path) return;
  window.location.hash = path;
}

export function useRoute(): { path: string; segments: string[] } {
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    const onChange = () => {
      setPath(currentPath());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('hashchange', onChange);
    if (!window.location.hash) window.location.hash = '/dashboard';
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const segments = path.split('/').filter(Boolean);
  return { path, segments };
}

export function useLinkProps(path: string) {
  const onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey) return;
      event.preventDefault();
      navigate(path);
    },
    [path],
  );
  return { href: `#${path}`, onClick };
}
