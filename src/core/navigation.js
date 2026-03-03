import { $$, $ } from "./dom.js";

export function createNavigator({ store, onEnterScreen }) {
  function goTo(n) {
    store.setState(s => ({ ...s, currentScreen: n }));

    $$(".screen").forEach(s => s.classList.remove("active"));
    $(`#s${n}`)?.classList.add("active");

    onEnterScreen(n);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { goTo };
}
