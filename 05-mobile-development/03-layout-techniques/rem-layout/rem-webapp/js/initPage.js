function init() {
  const clientWidth = document.documentElement.clientWidth;
  const parts = 10;
  const fontSize = clientWidth / parts;
  document.documentElement.style.fontSize = `${fontSize}px`;
}

export default function initPage() {
  init();

  // Attach initPage with resize event
  window.addEventListener("resize", initPage);
}
