import { Hero } from '../components/Hero';
import { TargetAudience } from '../components/TargetAudience';
import { Principles } from '../components/Principles';
import { Sprints } from '../components/Sprints';
import { Scoring } from '../components/Scoring';
import { ClosingCall } from '../components/ClosingCall';

export default function Page() {
  return (
    <div className="min-h-full w-full bg-flop-yellow">
      <Hero />
      <main>
        <TargetAudience />
        <Principles />
        <Sprints />
        <Scoring />
      </main>
      <ClosingCall />
    </div>
  );
}
