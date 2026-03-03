/* ─────────────────────────────────────────────────────────────
   COACH CONFIG
   Each screen key maps to lines per coach voice.
   Add coaches here — rendering reads them automatically.
───────────────────────────────────────────────────────────── */
const COACHES = {
  warm: {
    name: 'Your Guide',
    avatar: '🌟',
    lines: {
      s1: "Hey! I'm so glad you're here. Let's start simple — what's your name?",
      s2: "Your pillars give your story its structure. Pick what feels true, not what sounds impressive.",
      s3: "Now let's get specific. These categories help others understand exactly what you do and why.",
      s4: "This is you. Own it. Which identity opens the door to your story right now?",
      s5: "Every story has a villain. What forces does your work push back against?",
      s6: "Here it is — your story, in your words. These are yours to use, share, and build from.",
    }
  },
  direct: {
    name: 'Coach Mode',
    avatar: '🎯',
    lines: {
      s1: "Let's build your story. First — your name.",
      s2: "Pick your pillars. You need at least one identity pillar: Passion, Principle, or Practice.",
      s3: "Choose categories that are actually true for you. Two per pillar, max.",
      s4: "Lead with your strongest identity. You can always switch it for different rooms.",
      s5: "Name what you work against. It makes your story undeniable.",
      s6: "Your intros are ready. Copy, use, and come back tomorrow for fresh options.",
    }
  },
  reflective: {
    name: 'Reflection Guide',
    avatar: '🪞',
    lines: {
      s1: "Before we build your story, let's start with the most important word in it — your name.",
      s2: "Which of these pillars have always been part of how you work, even when no one named them?",
      s3: "What feels most true — not most impressive, not most professional — most true?",
      s4: "If someone who knew your work deeply had to describe you in one word, which of these would they choose?",
      s5: "What have you been working against your whole career — even before you had language for it?",
      s6: "Read these slowly. Notice which one feels like something you could actually say out loud.",
    }
  }
};
