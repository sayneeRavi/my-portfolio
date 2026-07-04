import Image from 'next/image';
import type { Project } from '@/data/projects';

const ICONS = {
  demo: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-7.5M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  ),
  code: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-hairline bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-teal/60">
      <div className="relative h-44 overflow-hidden border-b border-hairline">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 text-lg font-bold text-ink transition-colors group-hover:text-teal">
          {project.title}
        </h3>
        <p className="mb-3 text-sm font-semibold text-teal/90">
          {project.oneLineImpact}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-[6px] border border-hairline px-2 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(project.demo || project.github) && (
          <div className="flex gap-4 border-t border-hairline pt-4">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors hover:text-teal-hover"
              >
                {ICONS.demo} Live demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-teal transition-colors hover:text-teal-hover"
              >
                {ICONS.code} Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
