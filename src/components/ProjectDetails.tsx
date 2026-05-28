import { useEffect } from 'react';
import { ArrowUpRight, CalendarDays, FolderOpen, Tag, X } from 'lucide-react';
import type { ProjectDetails } from '../Files/ProjectDetails';

type ProjectModalProps = {
  project: ProjectDetails;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const isProjectLinkAvailable =
    project.projectURL &&
    project.projectURL !== 'none' &&
    project.projectURL !== 'Not Yet';
  const isDocumentLinkAvailable = Boolean(project.documentURL);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/25 backdrop-blur-md px-4 py-8 animate-in fade-in duration-300"
      aria-hidden={false}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl h-[72vh] max-h-[82vh] overflow-hidden rounded-3xl border border-white/25 bg-white/15 shadow-2xl shadow-slate-950/30 backdrop-blur-2xl animate-in zoom-in-95 duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/80 pointer-events-none" />

        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:scale-105 cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative grid h-full gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[220px] h-full overflow-hidden md:min-h-full">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />

            <div className="absolute left-0 right-0 bottom-0 p-6 md:p-8 text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/90 backdrop-blur-md">
                <FolderOpen className="h-4 w-4" />
                Project Details
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
                {project.description}
              </p>
            </div>
          </div>

          <div className="relative h-full overflow-y-auto p-6 md:p-8 text-white">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                <CalendarDays className="h-4 w-4" />
                {project.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
                <Tag className="h-4 w-4" />
                Portfolio Project
              </span>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Overview
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/80">
                {project.overview}
              </p>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Features
              </h3>
              <ul className="mt-3 space-y-3">
                {project.featureinclude.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-white/80">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-white/70" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                Tech Stack
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techstack.split(',').map((tech) => (
                  <span
                    key={tech.trim()}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white/85"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {isProjectLinkAvailable ? (
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/25 hover:scale-[1.01]"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/65">
                  Project link not available yet
                </div>
              )}

              {isDocumentLinkAvailable ? (
                <a
                  href={project.documentURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  View Document
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
