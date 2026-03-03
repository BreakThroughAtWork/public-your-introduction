/* ─────────────────────────────────────────────────────────────
   SCREEN COPY CONFIG
   Each screen has: eyebrow, title, sub, and a next button label.
───────────────────────────────────────────────────────────── */
const SCREENS_CFG = [
  null, // 1-indexed
  {
    id: 's1', prog: 'You',
    eyebrow: 'Step 1 of 6',
    title: "Who Are You?",
    sub: null,
    next: "Let's Go →",
  },
  {
    id: 's2', prog: 'Pillars',
    eyebrow: 'The Foundation',
    title: "Your Story Pillars",
    sub: "These six pillars give your story structure. Pick up to 3 — but you need at least one identity pillar: <strong style='color:var(--red)'>Passion, Principle, or Practice.</strong>",
    next: "Build My Story →",
  },
  {
    id: 's3', prog: 'Story',
    eyebrow: 'Getting Specific',
    title: "Your Story Details",
    sub: "Choose what feels most like you within each pillar. Pick up to 2 per pillar.",
    next: "Reveal My Identity →",
  },
  {
    id: 's4', prog: 'Identity',
    eyebrow: 'The Big Reveal',
    title: "Your Story Identity",
    sub: null,
    next: "Add the Stakes →",
  },
  {
    id: 's5', prog: 'Challenges',
    eyebrow: 'The Stakes',
    title: "What You Work Against",
    sub: "Every powerful story has stakes. Choose up to 2 forces that make your work harder — and your impact more undeniable.",
    next: "See My Intros →",
    skip: "Skip this step →",
  },
  {
    id: 's6', prog: 'Intros',
    eyebrow: "You're Undeniable",
    title: "Your Introductions",
    sub: null,
    next: null,
  },
];
