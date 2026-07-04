import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

const MEDIUM_URL = 'https://medium.com/@athmiraveendran';

/**
 * Phase 2 shell — Phase 3 replaces the placeholder cards with the latest
 * 3 posts fetched from the Medium RSS feed (ISR, 6h revalidate).
 */
export default function FieldNotes() {
  return (
    <Section id="field-notes" number="05" title="Field Notes">
      <Reveal>
        <p className="mb-8 max-w-xl text-muted">
          Notes from the field — what I&apos;m learning, building, and figuring
          out, published on Medium.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {[0, 1, 2].map((index) => (
          <Reveal key={index} delay={index * 0.08} className="h-full">
            <article className="flex h-full flex-col rounded-[12px] border border-hairline bg-surface p-5">
              <p className="mb-2 font-mono text-xs text-muted">Coming soon</p>
              <h3 className="mb-3 flex-1 text-lg font-bold text-ink">
                Latest posts land here
              </h3>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-teal transition-colors hover:text-teal-hover"
              >
                Read on Medium ↗
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
