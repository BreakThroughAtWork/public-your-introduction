import { el } from "../core/dom.js";

export function buildProgressBar({ SCREENS_CFG }) {
  const wrap = document.getElementById("progSteps");
  wrap.innerHTML = "";
  SCREENS_CFG.slice(1).forEach((sc, i) => {
    const node = el("div", { class: "prog-step", id: `pg${i + 1}` });
    node.textContent = sc.prog;
    wrap.appendChild(node);
  });
}

export function updateProgressBar({ SCREENS_CFG }, n) {
  SCREENS_CFG.slice(1).forEach((_, i) => {
    const el = document.getElementById(`pg${i + 1}`);
    if (!el) return;
    el.classList.remove("active", "done");
    if (i + 1 < n) el.classList.add("done");
    if (i + 1 === n) el.classList.add("active");
  });
}
