import type { ReactNode } from 'react';
import Reveal from '@/components/Reveal';

type SectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

/** Numbered section shell: mono `01.` eyebrow + title, consistent width. */
export default function Section({ id, number, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mb-10 flex items-baseline gap-3 text-2xl font-bold text-ink md:text-3xl">
            <span className="font-mono text-base font-normal text-teal md:text-lg">
              {number}.
            </span>
            {title}
            <span
              aria-hidden="true"
              className="ml-4 hidden h-px flex-1 bg-hairline sm:block"
            />
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
