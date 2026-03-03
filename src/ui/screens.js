import { el, $ } from "../core/dom.js";

export function buildScreens({ containerId = "screens", screenBuilders }) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  screenBuilders.forEach((build, i) => {
    const div = el("div", { class: "screen", id: `s${i + 1}` });
    build(div);
    container.appendChild(div);
  });
}

export function renderHeader({ CFG, COACHES, SCREENS_CFG }, div, screenNum) {
  const sc = SCREENS_CFG[screenNum];
  const coach = COACHES[CFG.coachId] || COACHES.warm;
  const line = coach.lines[`s${screenNum}`];

  div.innerHTML = `
    ${line ? `
      <div class="coach-wrap">
        <div class="coach-avatar">${coach.avatar}</div>
        <div class="coach-bubble">
          <div class="coach-name">${coach.name}</div>${line}
        </div>
      </div>` : ""
    }
    <div class="screen-eyebrow">${sc.eyebrow}</div>
    <div class="stitle">${sc.title}</div>
    ${sc.sub ? `<div class="ssub">${sc.sub}</div>` : ""}
  `;
}
