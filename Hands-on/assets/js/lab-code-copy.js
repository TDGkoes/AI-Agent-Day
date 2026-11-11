/* Remove incidental block indentation when copying, preserving relative indent. */
(function () {
  "use strict";

  function normalizeCode(text) {
    const lines = text.replace(/\r\n?/g, "\n").split("\n");
    while (lines.length && !lines[0].trim()) lines.shift();
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    const nonEmpty = lines.filter((line) => line.trim());
    let indent = nonEmpty.length ? nonEmpty[0].match(/^[\t ]*/)[0] : "";
    nonEmpty.forEach((line) => {
      while (indent && !line.startsWith(indent)) indent = indent.slice(0, -1);
    });
    return lines.map((line) => line.startsWith(indent) ? line.slice(indent.length) : line).join("\n");
  }

  const timers = new WeakMap();
  document.addEventListener("click", async function (event) {
    const button = event.target.closest(".main-content .highlighter-rouge > button");
    if (!button || !button.querySelector(".copy-icon") || !navigator.clipboard) return;
    const block = button.parentElement;
    const code = block.querySelector("pre:not(.lineno, .highlight)") || block.querySelector("code");
    if (!code) return;
    const original = code.innerText;
    const normalized = normalizeCode(original);
    // Retain the theme's native action when nothing needs correcting.
    if (normalized === original) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    const use = button.querySelector("use");
    clearTimeout(timers.get(button));
    try {
      await navigator.clipboard.writeText(normalized);
      button.setAttribute("aria-label", "복사됨");
      if (use) {
        use.setAttribute("href", "#svg-copied");
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#svg-copied");
      }
    } catch (error) {
      button.setAttribute("aria-label", "복사 실패 — 다시 시도해 주세요");
    }
    timers.set(button, setTimeout(function () {
      button.setAttribute("aria-label", "Copy code to clipboard");
      if (use) {
        use.setAttribute("href", "#svg-copy");
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#svg-copy");
      }
      timers.delete(button);
    }, 4000));
  }, true);
})();
