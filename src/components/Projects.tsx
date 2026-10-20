import React, { useState } from 'react';
import { Project } from '../types/portfolio';

interface ProjectsProps {
  projects: Project[];
  onOpenDetails: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onOpenDetails }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Filter out the main featured project so it doesn't duplicate, or show all
  const secondaryProjects = projects.filter(p => !p.featured);

  const filteredProjects = selectedFilter === 'all'
    ? secondaryProjects
    : selectedFilter === 'software'
    ? secondaryProjects.filter(p => p.category === 'Software Development')
    : secondaryProjects.filter(p => p.category !== 'Software Development');

  return (
    <section id="projects" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
              04 // Practical Initiatives
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Engineering Projects Portfolio
            </h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">
              Clean, verifiable projects demonstrating software logic and hardware diagnostics.
            </p>
          </div>

          {/* Filter Buttons (Monochrome, Compact) */}
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1 rounded border transition-colors ${
                selectedFilter === 'all'
                  ? 'border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold'
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface)]'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedFilter('software')}
              className={`px-3 py-1 rounded border transition-colors ${
                selectedFilter === 'software'
                  ? 'border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold'
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface)]'
              }`}
            >
              Software
            </button>
            <button
              onClick={() => setSelectedFilter('hardware')}
              className={`px-3 py-1 rounded border transition-colors ${
                selectedFilter === 'hardware'
                  ? 'border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold'
                  : 'border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface)]'
              }`}
            >
              Hardware / Circuits
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
                    {project.techStack[0] || project.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-secondary)]">
                    {project.date}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="space-y-1 text-xs text-[var(--text-secondary)] mb-4">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-[var(--text-primary)]">▪</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border)] flex justify-between items-center text-xs font-mono">
                <span className="text-[var(--text-muted)]">
                  {project.tags.slice(0, 2).join(' • ')}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenDetails(project)}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--text-primary)] font-bold hover:underline"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
