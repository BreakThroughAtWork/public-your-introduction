export function enableIframeAutoHeight({ throttleMs = 100 } = {}) {
  let last = 0;

  const send = () => {
    const now = Date.now();
    if (now - last < throttleMs) return;
    last = now;

    const height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    // Parent page can listen for this and resize iframe if desired.
    window.parent?.postMessage(
      { type: "story-builder:height", height },
      "*"
    );
  };

  const ro = new ResizeObserver(send);
  ro.observe(document.body);

  window.addEventListener("load", send);
  window.addEventListener("resize", send);

  return () => ro.disconnect();
}
