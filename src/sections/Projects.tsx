import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <Section id="projects" number="04" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-10 text-center">
        <a
          href="https://github.com/sayneeRavi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-[6px] border border-teal px-6 py-3 font-mono text-sm text-teal transition-colors hover:bg-teal/10"
        >
          More on GitHub →
        </a>
      </Reveal>
    </Section>
  );
}
