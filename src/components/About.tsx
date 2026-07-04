import Image from 'next/image';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import DetailTip from '@/components/DetailTip';

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <Reveal>
            <p className="text-lg font-semibold text-ink md:text-xl">
              I sit at the intersection of data and product: analytical enough
              to find the signal, engineer enough to ship what it suggests.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p>
              I&apos;m a final-year Software Engineering student at the{' '}
              <DetailTip detail="Sri Lanka's leading engineering university — consistently top-ranked for technology programs.">
                University of Moratuwa
              </DetailTip>
              , drawn to the stories numbers tell. For{' '}
              <DetailTip detail="A client project where I handled the full cycle: requirements, UI design, backend, database integration, and deployment.">
                MillenniumIT ESP
              </DetailTip>
              , I built an enterprise RMA system end-to-end — my favorite kind
              of work, where analysis meets something people actually use.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p>
              Outside the editor, I served as{' '}
              <DetailTip detail="Level-3 representative for Batch 22 — organized tech events that helped peers prepare for and land internships.">
                Batch Representative
              </DetailTip>{' '}
              at UoM and reached the finals of{' '}
              <DetailTip detail="A national healthcare-innovation competition; our team was a 2025 finalist.">
                BrainStorm 2025
              </DetailTip>
              . I&apos;m also a cricket player, a hiker, and a sucker for a
              good story — in data or otherwise.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="justify-self-center md:justify-self-end">
          <div className="relative">
            <Image
              src="/profile-pic.webp"
              alt="Athmisaynee Raveendran"
              width={280}
              height={280}
              className="h-52 w-52 rounded-[12px] border border-hairline object-cover md:h-64 md:w-64"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[12px] border border-teal/40"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
