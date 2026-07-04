import Link from 'next/link';
import { SparklineDivider } from '@/components/Sparkline';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-6xl font-bold text-teal md:text-7xl">
        404
      </p>
      <p className="mb-8 text-lg text-muted">
        This page wandered off the chart.
      </p>
      <Link
        href="/"
        className="rounded-[6px] border border-teal px-6 py-3 font-mono text-sm text-teal transition-colors hover:bg-teal/10"
      >
        ← Back home
      </Link>
      <div className="mt-12 w-40">
        <SparklineDivider />
      </div>
    </main>
  );
}
