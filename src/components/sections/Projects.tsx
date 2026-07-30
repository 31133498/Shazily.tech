import { motion } from 'framer-motion';
import { projects } from '../../data/portfolio';
import { TechIcon } from '../ui/TechIcon';
import type { ProjectType } from '../../types';

const typeBadge: Record<ProjectType, { label: string; className: string }> = {
  startup:     { label: 'Startup',      className: 'text-white border-white' },
  contract:    { label: 'Contract',     className: 'text-zinc-300 border-zinc-500' },
  hackathon:   { label: 'Hackathon',    className: 'text-amber-400 border-amber-600' },
  undisclosed: { label: 'Undisclosed',  className: 'text-zinc-600 border-zinc-700' },
};

export default function Projects() {
  const visible = projects.filter((p) => p.projectType !== 'undisclosed');
  const undisclosed = projects.filter((p) => p.projectType === 'undisclosed');

  return (
    <section id="projects" className="w-full px-5 lg:px-20 py-16 bg-black">
      <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-5">

        {/* Heading */}
        <div className="flex gap-4 items-center justify-center py-5 text-[48px] leading-[56px] tracking-[-0.96px]">
          <span className="font-sora font-normal text-white">My</span>
          <span className="font-sora font-extrabold text-white">Projects</span>
        </div>

        {/* Visible projects */}
        {visible.map((project, index) => {
          const badge = typeBadge[project.projectType];
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-10 py-5 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Preview image */}
              <div className="flex-shrink-0 w-full lg:w-[594px] h-[300px] lg:h-[476px] flex items-center">
                <div className="relative w-full max-w-[530px] h-[260px] lg:h-[398px] rounded-[18px] overflow-hidden shadow-[0px_8px_18px_-6px_rgba(24,39,75,0.12),0px_12px_42px_-4px_rgba(24,39,75,0.12)] bg-zinc-900">
                  {project.previewUrl && (
                    <img
                      src={project.previewUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-5 flex-1">
                {/* Type badge + number row */}
                <div className="flex items-center gap-4">
                  <span className={`font-sora font-semibold text-xs uppercase tracking-widest border px-3 py-1 rounded-[4px] ${badge.className}`}>
                    {badge.label}
                  </span>
                  <p className="font-sora font-extrabold text-[48px] text-white leading-[56px] tracking-[-0.96px]">
                    {project.number}
                  </p>
                </div>

                <p className="font-sora font-bold text-[32px] text-white leading-10 tracking-[-0.64px]">
                  {project.title}
                </p>

                {project.hackathonWin && (
                  <p className="font-sora font-semibold text-sm text-amber-400 border border-amber-600 px-3 py-1 rounded-[4px] w-fit tracking-[-0.32px]">
                    {project.hackathonWin}
                  </p>
                )}

                <p className="font-sora font-normal text-base text-zinc-500 leading-6 tracking-[0.32px]">
                  {project.description}
                </p>

                {/* Tech tags */}
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center gap-1.5 font-sora font-semibold text-sm text-zinc-300 border border-zinc-500 px-3 py-1 rounded-[4px]"
                      >
                        <TechIcon name={tech} size={14} />
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Live link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="w-5 h-5 text-white hover:opacity-70 transition-opacity"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Undisclosed projects row */}
        {undisclosed.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            {undisclosed.map((p) => (
              <div
                key={p.id}
                className="flex-1 border border-zinc-800 rounded-[12px] px-8 py-10 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  {/* Lock icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span className="font-sora font-semibold text-xs uppercase tracking-widest text-zinc-600 border border-zinc-700 px-3 py-1 rounded-[4px]">
                    Undisclosed
                  </span>
                </div>
                <p className="font-sora font-bold text-xl text-zinc-700">NDA</p>
                <p className="font-sora font-normal text-sm text-zinc-700 leading-5">
                  Details of this project are under a non-disclosure agreement. Ask me about it directly.
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
