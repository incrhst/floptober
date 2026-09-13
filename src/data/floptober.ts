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
  title: 'The Social Flop',
  theme: 'Cringe & Visibility',
  body: 'Publish raw, unpolished work publicly. Share an unfinished concept, an awkward video, or an unconventional opinion with no disclaimers.'
},
{
  index: '02',
  week: 'Week Two',
  title: 'The Rejection Gauntlet',
  theme: 'Direct Outreach',
  body: 'Aim for 10 explicit "No"s. Pitch an out-of-reach client, ask for an unreasonable discount, or propose an ambitious partnership. Silence doesn\'t count.'
},
{
  index: '03',
  week: 'Week Three',
  title: 'The Janky Prototype',
  theme: 'Execution Speed',
  body: 'Build and ship something broken in 48 hours. A landing page with no backend, a micro-tool that crashes, or a one-page offer. Launch it before you feel ready.'
},
{
  index: '04',
  week: 'Week Four',
  title: 'The Eulogy',
  theme: 'Integration',
  body: 'Crown the "Worst Flop of October." Share the biggest swing that completely missed, examine the wreckage, and celebrate the fact that everyone is still alive.'
}];


export const scoring: ScoreRow[] = [
{ points: 1, label: 'Shipping a messy first draft without apologizing for it.' },
{ points: 3, label: 'Receiving an explicit, direct rejection (email, call, or pitch).' },
{ points: 5, label: 'Launching a live experiment that generates absolute silence.' },
{ points: 10, label: 'A public crash-and-burn (broken link, onstage stumble, or software crash).' },
{ points: -10, label: 'Letting an idea sit in your drafts folder because "it wasn\'t ready yet."' }];


export const graveyardImage = "/c533fa06-abb2-44ca-8725-ddda23f01b42.jpg";


export const mascotImage = "/82c879c0-607a-4ac2-8f66-6e23f41b4a17.jpg";