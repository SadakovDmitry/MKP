export default function getViewportWidth() {
  if (typeof window === 'undefined') {
    return 0;
  }

  const candidates = [
    window.visualViewport?.width ?? 0,
    document.documentElement?.clientWidth ?? 0,
    window.innerWidth ?? 0,
  ].filter((value): value is number => Number.isFinite(value) && value > 0);

  if (candidates.length === 0) {
    return 0;
  }

  return Math.floor(Math.min(...candidates));
}

