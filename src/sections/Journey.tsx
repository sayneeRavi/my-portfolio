import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

type JourneyNode = {
  date: string;
  title: string;
  org: string;
  outcome: string;
};

const NODES: JourneyNode[] = [
  {
    date: '2022',
    title: 'G.C.E. Advanced Level — Biological Science',
    org: 'T. Sri Shanmuga Hindu Ladies College',
    outcome:
      'Trained in the scientific method through biology, chemistry, and physics — then chose to build things instead.',
  },
  {
    date: '2023 — Present',
    title: 'BSc (Hons) Software Engineering',
    org: 'University of Moratuwa',
    outcome:
      'Top grades in programming-focused modules; served as Level-3 Batch Representative for Batch 22.',
  },
  {
    // TODO: confirm the project date range
    date: '2024',
    title: 'Enterprise RMA System — Client Project',
    org: 'MillenniumIT ESP',
    outcome:
      'Delivered a hardware-return tracking system end-to-end, from requirements to deployment.',
  },
  {
    // TODO: confirm internship dates and role title
    date: '2025',
    title: 'Software Engineering Intern',
    org: 'Aventude',
    outcome:
      'Brought data-minded engineering to production codebases beyond the classroom.',
  },
  {
    date: '2026 →',
    title: "What's next",
    org: 'Your team?',
    outcome:
      'Looking for a place where data analytics and full-stack engineering meet.',
  },
];

type Cert = {
  title: string;
  issuer: string;
  date: string;
  url: string;
};

const CERTS: Cert[] = [
  {
    title: 'AI/ML Engineer — Stage 1 & 2',
    issuer: 'SLIIT Centre for Open & Distance Education',
    date: '2025',
    url: '/cv.pdf',
  },
  {
    // TODO: replace with the real issuing organization/platform
    title: 'AI Agents Certification',
    issuer: 'Professional Development',
    date: '2025',
    url: '/ai-agents.webp',
  },
  {
    // TODO: replace with the real issuing organization/platform
    title: 'Data Analyst Certification',
    issuer: 'Professional Development',
    date: '2024',
    url: '/data-analyst-certificate.pdf',
  },
  {
    // TODO: replace with the real issuing organization/platform
    title: 'Python for Beginners',
    issuer: 'E-Learning Platform',
    date: '2024',
    url: '/python-beginners-certificate.pdf',
  },
  {
    // TODO: replace with the real issuing organization/platform
    title: 'Web Design for Beginners',
    issuer: 'E-Learning Platform',
    date: '2024',
    url: '/web-design-beginners-certificate.pdf',
  },
];

export default function Journey() {
  return (
    <Section id="journey" number="02" title="Journey">
      <ol className="relative ml-3 space-y-10 border-l border-hairline pl-8">
        {NODES.map((node, index) => (
          <li key={node.title} className="relative">
            <Reveal delay={index * 0.08}>
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full border border-teal bg-navy"
              />
              <p className="mb-1 font-mono text-xs text-teal">{node.date}</p>
              <h3 className="text-lg font-bold text-ink">{node.title}</h3>
              <p className="mb-2 font-mono text-sm text-muted">{node.org}</p>
              <p className="max-w-xl text-muted">{node.outcome}</p>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.2}>
        <h3 className="mb-6 mt-16 font-mono text-sm text-muted">
          {'// certifications along the way'}
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CERTS.map((cert) => (
            <li key={cert.title}>
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[12px] border border-hairline bg-surface px-4 py-3 transition-colors hover:border-teal/60"
              >
                <span className="font-semibold text-ink group-hover:text-teal">
                  {cert.title}
                </span>
                <span className="mt-1 font-mono text-xs text-muted">
                  {cert.issuer} · {cert.date}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
