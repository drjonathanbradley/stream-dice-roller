function hideOverlay() {}

function showOverlay() {}

export function toggleOverlay(visible) {
  visible ? hideOverlay() : showOverlay();
  visible = !visible;
}
