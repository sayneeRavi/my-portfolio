'use client';

import { motion, useReducedMotion } from 'framer-motion';

const TEAL_POINTS = '0,84 48,70 96,91 144,42 192,63 240,28 288,49 336,14 384,35 432,21 480,42';
const PURPLE_POINTS = '0,98 48,77 96,105 144,70 192,84 240,56 288,70 336,42 384,63 432,49 480,70';

/**
 * Signature motif (PRD 7.4): teal + purple polylines at ~15% opacity,
 * drawn in on load. This is the site's only decorative device.
 */
export function SparklineMotif({ className = '' }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <svg
      viewBox="0 0 480 120"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    >
      <motion.polyline
        points={TEAL_POINTS}
        stroke="var(--color-teal)"
        strokeWidth="2"
        strokeOpacity="0.15"
        initial={reduceMotion ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.polyline
        points={PURPLE_POINTS}
        stroke="var(--color-spark-purple)"
        strokeWidth="2"
        strokeOpacity="0.15"
        initial={reduceMotion ? false : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
      />
    </svg>
  );
}

/** Tiny static echo of the motif, used as a divider between sections. */
export function SparklineDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-2" aria-hidden="true">
      <svg viewBox="0 0 120 16" fill="none" className="h-4 w-28 mx-auto">
        <polyline
          points="0,12 15,9 30,13 45,5 60,8 75,3 90,6 105,2 120,4"
          stroke="var(--color-teal)"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />
        <polyline
          points="0,14 15,11 30,15 45,9 60,12 75,7 90,10 105,6 120,8"
          stroke="var(--color-spark-purple)"
          strokeWidth="1.5"
          strokeOpacity="0.15"
        />
      </svg>
    </div>
  );
}
