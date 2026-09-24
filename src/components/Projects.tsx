import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowDown, X } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { asset, links } from "../data/profile";
import { ExternalLink, SectionHeading, Tags } from "./ui/shared";
function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    element?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      element?.close();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-title"
      onClose={() => {
        // StrictMode reopens the dialog after effect cleanup; ignore its queued close event.
        if (!dialog.current?.open) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex="0"]',
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        <button
          autoFocus
          className="icon-button dialog-close"
          aria-label="Close project details"
          onClick={onClose}
        >
          <X size={22} />
        </button>
        <img
          src={asset(project.image)}
          width="1000"
          height="563"
          alt={project.title}
          className="dialog-image"
        />
        <div className="p-6 sm:p-9">
          <p className="eyebrow mb-3">
            {project.category} / {project.date}
          </p>
          <h2 id="project-title" className="text-3xl tracking-tight mb-5">
            {project.title}
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            {project.longDescription}
          </p>
          <Tags items={project.tags} />
          <div className="mt-7 flex flex-wrap gap-5">
            {project.github && (
              <ExternalLink href={project.github} className="text-link">
                View code
              </ExternalLink>
            )}
            {project.link && (
              <ExternalLink href={project.link} className="text-link">
                {project.linkLabel ?? "View demonstration"}
              </ExternalLink>
            )}
            {project.paper && (
              <ExternalLink href={project.paper} className="text-link">
                Read paper
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
export default function Projects() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="projects" className="section shell">
      <SectionHeading
        number="03"
        label="Selected projects"
        title="From concept to capability."
      >
        <ExternalLink href={links.github} className="text-link">
          Explore GitHub
        </ExternalLink>
      </SectionHeading>
      <div className="project-grid" id="project-grid">
        {(expanded ? projects : projects.slice(0, 3)).map((project, index) => (
          <article className="project-card" key={project.title}>
            <button
              className="project-image-button group"
              onClick={() => setSelected(project)}
              aria-label={`View ${project.title} details`}
            >
              <img
                src={asset(project.image)}
                width="1000"
                height="563"
                loading="lazy"
                decoding="async"
                alt={project.title}
              />
              <span className="project-open">
                <ArrowUpRight size={20} />
              </span>
            </button>
            <div className="pt-5">
              <div className="flex justify-between gap-3 mb-3">
                <p className="eyebrow">{project.category}</p>
                <span className="text-xs font-mono text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>
                <button
                  className="text-left hover:text-accent"
                  onClick={() => setSelected(project)}
                >
                  {project.title}
                </button>
              </h3>
              <p className="project-description">{project.description}</p>
              <Tags items={project.tags.slice(0, 3)} />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="secondary-button"
          aria-expanded={expanded}
          aria-controls="project-grid"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show selected projects"
            : `View all ${projects.length} projects`}
          <ArrowDown size={17} className={expanded ? "rotate-180" : ""} />
        </button>
      </div>
      {selected && (
        <ProjectDetails project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
