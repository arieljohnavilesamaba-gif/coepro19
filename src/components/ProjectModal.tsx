import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span>
            <span className="font-mono text-xs font-semibold text-[var(--text-primary)]">
              Project Specification // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs text-[var(--text-secondary)] leading-relaxed">
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-primary)]">
                {project.category}
              </span>
              <span className="text-[var(--text-muted)]">
                {project.date}
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-1">
              {project.title}
            </h2>
            <p className="font-mono text-xs text-[var(--text-muted)]">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2 text-xs leading-relaxed text-[var(--text-secondary)]">
            <p>{project.longDescription || project.description}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              Key Features & Architectural Capabilities
            </h3>
            <ul className="space-y-1.5 font-mono text-xs">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--text-primary)]">▹</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              Technical Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-between items-center font-mono text-xs">
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold uppercase hover:opacity-90 transition-opacity"
            >
              GitHub Repository →
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
