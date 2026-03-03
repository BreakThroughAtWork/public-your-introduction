import { COACHES } from "./coaches.js";
import { SCREENS_CFG } from "./screens.js";
import { PILLARS } from "./pillars.js";
import { CATS } from "./categories.js";
import { CHALLENGES } from "./challenges.js";
import { TEMPLATES } from "./templates.js";

export function readRuntimeConfig(locationSearch) {
  const params = new URLSearchParams(locationSearch);
  return {
    tier: params.get("tier") || "free",
    coachId: params.get("coach") || "warm",
    maxPillars: 3,
    maxCats: 2,
    maxChallenges: 2,
  };
}

export { COACHES, SCREENS_CFG, PILLARS, CATS, CHALLENGES, TEMPLATES };
