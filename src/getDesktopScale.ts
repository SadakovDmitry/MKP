export const DESKTOP_SCALE_MAX_VIEWPORT_WIDTH = 1500;

export default function getDesktopScale(viewportWidth: number, frameWidth: number) {
  if (!Number.isFinite(viewportWidth) || viewportWidth <= 0) {
    return 1;
  }

  if (!Number.isFinite(frameWidth) || frameWidth <= 0) {
    return 1;
  }

  return Math.min(viewportWidth, DESKTOP_SCALE_MAX_VIEWPORT_WIDTH) / frameWidth;
}
