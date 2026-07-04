import Section from '@/components/Section';
import Reveal from '@/components/Reveal';

const SKILL_GROUPS: { group: string; skills: string[] }[] = [
  {
    group: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML & CSS'],
  },
  {
    group: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Spring Boot', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
  },
  {
    group: 'Data & Analytics',
    skills: ['Data Visualization', 'Chart.js', 'OpenCV', 'TensorFlow', 'PyTorch', 'Excel'],
  },
  {
    group: 'Tools',
    skills: ['Git & GitHub', 'Figma', 'Vercel', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" number="03" title="Skills">
      <div className="grid gap-10 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.group} delay={index * 0.08}>
            <h3 className="mb-4 font-mono text-sm text-teal">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-[6px] border border-hairline px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-teal hover:text-ink"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
