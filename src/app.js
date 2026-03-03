import { readRuntimeConfig, COACHES, SCREENS_CFG, PILLARS, CATS, CHALLENGES, TEMPLATES } from "./config/index.js";
import { createStore } from "./state/store.js";
import { buildProgressBar, updateProgressBar } from "./ui/progress.js";
import { buildScreens } from "./ui/screens.js";
import { createNavigator } from "./core/navigation.js";
import { enableIframeAutoHeight } from "./core/iframeSizing.js";

// screen builder imports you create:
// import { buildS1, setupS1 } from "./ui/screen1.js"; etc.

const CFG = readRuntimeConfig(window.location.search);
const store = createStore();

function applyHeaderSub() {
  const el = document.getElementById("hdrSub");
  el.textContent = CFG.tier === "paid"
    ? "BreakRoom Member Experience"
    : "Build your introduction · Free forever";
}

applyHeaderSub();
buildProgressBar({ SCREENS_CFG });

// Build screen scaffolding
buildScreens({
  screenBuilders: [
    /* buildS1, buildS2, buildS3, buildS4, buildS5, buildS6 */
  ]
});

const navigator = createNavigator({
  store,
  onEnterScreen: (n) => {
    updateProgressBar({ SCREENS_CFG }, n);
    // call your per-screen setup/render functions here:
    // if (n === 1) setupS1(...);
  }
});

enableIframeAutoHeight();

// Start
navigator.goTo(1);
