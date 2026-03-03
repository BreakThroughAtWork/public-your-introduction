/* ─────────────────────────────────────────────────────────────
   INTRO TEMPLATES
   Keys match getTplKey() output. Tokens: [id] [passion]
   [principle] [practice] [people] [products] [places] [challenges]
───────────────────────────────────────────────────────────── */
const TEMPLATES = {
  'practice':[
    ()=>`I am a [id] using [practice] in my work.`,
    ()=>`As a [id], my work centers on [practice].`,
    ()=>`My work as a [id] is built on [practice].`,
  ],
  'passion':[
    ()=>`I am a [id], fueled by [passion].`,
    ()=>`As a [id], everything I do is driven by [passion].`,
    ()=>`My work is rooted in [passion] — that's what makes me a [id].`,
  ],
  'principle':[
    ()=>`I am a [id], guided by [principle].`,
    ()=>`As a [id], I lead with [principle].`,
    ()=>`Everything I do reflects my commitment to [principle] — I am a [id].`,
  ],
  'passion+practice':[
    ()=>`I am a [id] fueled by [passion] in my [practice].`,
    ()=>`As a [id], I use [practice] driven by [passion].`,
    ()=>`My work as a [id] blends [practice] and [passion] to create impact.`,
    ()=>`I'm a [id] driven by [passion] — it's what keeps me going in my [practice].`,
  ],
  'principle+practice':[
    ()=>`As a [id], my [practice] reflects my commitment to [principle].`,
    ()=>`I am a [id] applying [practice] with [principle] at the core.`,
    ()=>`As a [id], I lead with [principle] in my [practice].`,
  ],
  'passion+principle':[
    ()=>`I am a [id] guided by [principle] and fueled by [passion].`,
    ()=>`As a [id], I lead with [principle] and stay fueled by [passion].`,
    ()=>`I'm a [id] — [principle] guides me and [passion] drives me.`,
  ],
  'passion+principle+practice':[
    ()=>`As a [id], I use [practice] fueled by [passion] and guided by [principle].`,
    ()=>`I am a [id] driven by [passion], grounded in [principle], and skilled in [practice].`,
    ()=>`I'm a [id] using [practice] to create impact — with [passion] and [principle] at the core.`,
    ()=>`My work as a [id] brings together [practice], [passion], and [principle].`,
  ],
};
