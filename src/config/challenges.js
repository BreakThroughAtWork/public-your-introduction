/* ─────────────────────────────────────────────────────────────
   CHALLENGE CATEGORIES
   Universal forces that make work harder — the "villain" in
   the story. Designed to work across any pillar combination.
   Each has: id, name, icon, desc, synonyms, examples,
   and pillarAffinity (which pillar types surface this challenge
   most prominently in the UI — all are always available).
───────────────────────────────────────────────────────────── */
const CHALLENGES = [
  { id:'scarcity',      name:'Scarcity',           icon:'📉',
    desc:'Not enough — resources, time, funding, staff, or tools to do the work right',
    synonyms:['scarcity','lack of resources','underfunding','not enough time or support','resource gaps that slow everything down'],
    examples:'Chronically understaffed teams, programs cut before they could grow, tools that don\'t exist yet',
    pillarAffinity:['practice','products','places'] },

  { id:'inequity',      name:'Inequity',           icon:'⚖️',
    desc:'Unequal access to power, opportunity, representation, or reward',
    synonyms:['inequity','systemic inequality','disparities in access and opportunity','power imbalances','who benefits and who doesn\'t'],
    examples:'Credential gatekeeping, wage gaps, underrepresentation, unequal enforcement of rules',
    pillarAffinity:['passion','principle','people'] },

  { id:'resistance',    name:'Resistance',         icon:'🧱',
    desc:'Pushback against change — the status quo protecting itself',
    synonyms:['resistance to change','institutional inertia','the status quo','pushback and gatekeeping','systems that don\'t want to move'],
    examples:'Policies that block innovation, leaders resistant to feedback, change fatigue, risk aversion',
    pillarAffinity:['principle','practice','products'] },

  { id:'invisibility',  name:'Invisibility',       icon:'👤',
    desc:'Work, people, or problems that go unseen, uncounted, or uncredited',
    synonyms:['invisibility','being unseen','uncredited labor','contributions that don\'t make the record','work that disappears'],
    examples:'Informal contributions ignored, communities left out of data, work credited to others',
    pillarAffinity:['products','people','passion'] },

  { id:'disconnection', name:'Disconnection',      icon:'🔗',
    desc:'People, places, or ideas isolated from the networks and resources that could help them',
    synonyms:['disconnection','isolation','broken networks','communities cut off from opportunity','gaps between people who should be working together'],
    examples:'Geographic isolation, siloed teams, communities overlooked by funders, lack of mentorship pipelines',
    pillarAffinity:['people','places','passion'] },

  { id:'harm',          name:'Active Harm',        icon:'⚠️',
    desc:'Damage being done — to people, communities, systems, or environments',
    synonyms:['harm','active harm being done','damage that needs to be stopped','hurt that compounds over time','cycles of harm'],
    examples:'Toxic workplace cultures, policy violence, environmental damage, communities under threat',
    pillarAffinity:['principle','passion','people'] },

  { id:'instability',   name:'Instability',        icon:'🌊',
    desc:'Constant flux — in leadership, funding, policy, or the environment itself',
    synonyms:['instability','constant change','unpredictable conditions','shifting ground','environments that can\'t hold steady'],
    examples:'Leadership turnover, funding cliffs, policy reversals, crisis conditions that never resolve',
    pillarAffinity:['practice','places','products'] },

  { id:'complexity',    name:'Complexity',         icon:'🕸️',
    desc:'Problems too tangled, layered, or systemic for simple solutions',
    synonyms:['complexity','wicked problems','layered systemic challenges','problems without easy answers','challenges that require more than one solution'],
    examples:'Multi-generational poverty, climate change, health disparities, broken criminal justice systems',
    pillarAffinity:['principle','practice','products'] },
];
