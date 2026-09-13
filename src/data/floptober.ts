export interface Principle {
  icon: string;
  iconAlt: string;
  title: string;
  body: string;
}

export interface Sprint {
  index: string;
  week: string;
  title: string;
  theme: string;
  body: string;
}

export interface ScoreRow {
  points: number;
  label: string;
}

export const principles: Principle[] = [
{
  icon: "/ed3790b5-eb33-46e5-91ea-a9a450760379.jpg",
  iconAlt: 'Doodle of a duct-taped toy rocket puffing smoke',
  title: 'Effort Over Polish',
  body: 'Half-baking something in public beats over-baking it in secret.'
},
{
  icon: "/235b1ea5-b249-4e9e-9682-611041503eab.jpg",
  iconAlt: 'Doodle of two wonky dice mid-tumble',
  title: 'No Safe Bets',
  body: 'If you already know it works or feels comfortable, it does not count as a flop attempt.'
},
{
  icon: "/68d2c940-0bd5-4155-b0fa-7cd67b9db85b.jpg",
  iconAlt: 'Doodle of a leaning gravestone with a cable trailing out of the dirt',
  title: 'The Graveyard',
  body: 'Every dead project, ignored cold email, or zero-engagement post gets cataloged.'
}];


export const sprints: Sprint[] = [
{
  index: '01',
  week: 'Week One',
  title: 'The Public Flop',
  theme: 'Cringe & Visibility',
  body: 'Break identity attachment by publishing raw, unedited takes or demos publicly. Hard rule: zero apologies, caveats, or disclaimers allowed.'
},
{
  index: '02',
  week: 'Week Two',
  title: 'The Janky Prototype',
  theme: 'Execution Speed',
  body: 'Ship a half-baked product, landing page, or service package capped at a strict 48 hours. Requires a working buy/signup link, even if the backend is just a manual Google Sheet.'
},
{
  index: '03',
  week: 'Week Three',
  title: 'The Rejection Gauntlet',
  theme: 'Direct Outreach',
  body: 'Collect 10 explicit, synchronous "No"s while trying to sell or pitch your Week 2 prototype. Face-to-face, voice, or live DMs only—asynchronous cold email takes too long.'
},
{
  index: '04',
  week: 'Week Four',
  title: 'The Eulogy & Re-Up',
  theme: 'Integration',
  body: 'Deconstruct the wreckage and award the worst failure. Then, execute the 24-Hour Iteration Rule: take your worst flop, make one adjustment based on real feedback, and push it live again.'
}];


export const scoring: ScoreRow[] = [
{ points: 1, label: 'Shipping a messy first draft without apologizing for it.' },
{ points: 3, label: 'Receiving an explicit, direct rejection (email, call, or pitch).' },
{ points: 5, label: 'Launching a live experiment that generates absolute silence.' },
{ points: 10, label: 'A public crash-and-burn (broken link, onstage stumble, or software crash).' },
{ points: -10, label: 'Letting an idea sit in your drafts folder because "it wasn\'t ready yet."' }];


export const graveyardImage = "/c533fa06-abb2-44ca-8725-ddda23f01b42.jpg";


export const mascotImage = "/82c879c0-607a-4ac2-8f66-6e23f41b4a17.jpg";

export interface Persona {
  title: string;
  description: string;
}

export const personas: Persona[] = [
  {
    title: 'The Bedroom Producer',
    description: "Your hard drive is a graveyard of 8-bar loops. You're convinced you can't drop a track until a pro mixes it."
  },
  {
    title: 'The Stealth-Mode Dev',
    description: "You've been building in secret for six months, endlessly refactoring schemas instead of shipping an ugly MVP to actual users."
  },
  {
    title: 'The Lurker Substacker',
    description: "You're hoarding 40 drafts in your Notes app, paralyzed by the fear that publishing a raw, opinionated essay will get zero reads."
  },
  {
    title: 'The Boutique Solo Pro',
    description: "You're terrified of cold outreach or posting your high-ticket pricing publicly because you dread being left on 'read'."
  },
  {
    title: 'The Hardware Hacker',
    description: "You're tinkering indefinitely with rough breadboards and 3D prints, dreading the feedback on a non-factory-grade enclosure."
  },
  {
    title: 'The Course Creator',
    description: "Trapped in slide-deck and syllabus design purgatory instead of pre-selling a rough, live 3-person pilot."
  },
  {
    title: 'The Raw Comic',
    description: "You polish material in a notebook forever, dodging open mics to protect your ego-shield of being 'the funny friend'."
  },
  {
    title: 'The Indie Brand',
    description: "You're shelving physical inventory because the logo, custom packaging, or unboxing experience isn't luxury-tier yet."
  },
  {
    title: 'The Perfectionist Podcaster',
    description: "You obsess over mic gain and studio lighting instead of posting a raw, one-take phone video."
  }
];