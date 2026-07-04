'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SparklineMotif } from '@/components/Sparkline';
import { projects } from '@/data/projects';

const TAGLINES = [
  'I turn data into decisions',
  'I build full-stack products',
  'I tell stories with data',
];

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 2200;

function useTypewriter(words: string[], enabled: boolean) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(enabled ? '' : words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? DELETE_MS : TYPE_MS
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, enabled]);

  return text;
}

const STATS = [
  { value: `${projects.length}`, label: 'projects built' },
  { value: '3+', label: 'years coding' },
  { value: '3', label: 'articles written' },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const tagline = useTypewriter(TAGLINES, !reduceMotion);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 font-mono text-sm text-teal md:text-base">
            Hi, my name is
          </p>

          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
            Athmisaynee Raveendran.
          </h1>

          <p
            className="mb-6 min-h-[1.5em] text-2xl font-bold text-muted sm:text-3xl md:text-4xl"
            aria-label={TAGLINES[0]}
          >
            <span aria-hidden="true">
              {tagline}
              <span
                className={`text-teal ${reduceMotion ? '' : 'animate-pulse'}`}
              >
                _
              </span>
            </span>
          </p>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Data analyst and full-stack developer — a final-year Software
            Engineering student at the University of Moratuwa, Sri Lanka.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-[6px] bg-teal px-6 py-3 font-mono text-sm font-semibold text-on-teal transition-colors hover:bg-teal-hover"
            >
              View my work →
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] border border-teal px-6 py-3 font-mono text-sm text-teal transition-colors hover:bg-teal/10"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Stats strip — GitHub repo count goes live here in Phase 3 */}
        <motion.dl
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-hairline pt-8"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="font-mono text-xs text-muted">{stat.label}</dt>
              <dd className="text-3xl font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <SparklineMotif className="absolute bottom-8 right-0 h-32 w-[min(480px,80vw)]" />
    </section>
  );
}
