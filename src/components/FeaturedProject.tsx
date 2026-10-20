import React from 'react';
import { Project } from '../types/portfolio';

interface FeaturedProjectProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, onOpenDetails }) => {
  return (
    <section id="featured-project" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            02 // Primary Featured Project
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Personal GitHub Portfolio Architecture
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            Engineered as a real software project featuring React 18, TypeScript 5, Vite, Tailwind CSS, and automated CI/CD deployment via GitHub Actions.
          </p>
        </div>

        {/* Featured Card (Monochrome, Elegant, Compact) */}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm">
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Project Overview */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider font-semibold border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)]">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--surface-subtle)]">
                      ● GitHub Actions Active
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono border border-[var(--border)] text-[var(--text-muted)] bg-[var(--surface-subtle)]">
                      {project.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-2">
                    {project.title} (Featured Project)
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Purpose & Core Architecture Requirements */}
                  <div className="p-3.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] mb-4 text-xs text-[var(--text-secondary)] space-y-1.5">
                    <div className="font-bold text-[var(--text-primary)] uppercase tracking-wider text-[11px]">
                      Core Architecture Requirements
                    </div>
                    {project.features.map((feat, index) => (
                      <p key={index} className="flex items-start gap-1.5">
                        <span className="text-[var(--text-primary)]">▹</span>
                        <span>{feat}</span>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Links */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4 font-mono text-[11px]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--surface-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--border)]">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
                    >
                      View Repository on GitHub
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] text-xs font-semibold tracking-wider uppercase transition-colors"
                      >
                        Live Demo URL
                      </a>
                    )}

                    <button
                      onClick={() => onOpenDetails(project)}
                      className="px-4 py-2 rounded border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono transition-colors"
                    >
                      // Technical Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Verification Matrix & CI/CD */}
              <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[var(--border)] pt-6 lg:pt-0 lg:pl-6 space-y-4">
                <div>
                  <h4 className="font-serif text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold mb-3">
                    Production Engineering Metrics
                  </h4>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] flex justify-between items-center">
                      <span className="text-[var(--text-secondary)]">Type Safety:</span>
                      <span className="font-bold text-[var(--text-primary)]">Strict TypeScript 5</span>
                    </div>
                    <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] flex justify-between items-center">
                      <span className="text-[var(--text-secondary)]">Design System:</span>
                      <span className="font-bold text-[var(--text-primary)]">Monochrome CSS Variables</span>
                    </div>
                    <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] flex justify-between items-center">
                      <span className="text-[var(--text-secondary)]">CI/CD Pipeline:</span>
                      <span className="font-bold text-[var(--text-primary)]">GitHub Actions Passing</span>
                    </div>
                    <div className="p-2.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] flex justify-between items-center">
                      <span className="text-[var(--text-secondary)]">Lighthouse Score:</span>
                      <span className="font-bold text-[var(--text-primary)]">Optimized & Accessible</span>
                    </div>
                  </div>
                </div>

                {/* CI/CD Flow Illustration */}
                <div className="p-3.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-[11px] font-mono text-[var(--text-secondary)] space-y-1">
                  <div className="font-bold text-[var(--text-primary)] text-xs mb-1">CI/CD Pipeline Automated Sequence:</div>
                  <p>1. git commit & push to <span className="text-[var(--text-primary)]">main</span></p>
                  <p>2. GitHub Actions invokes <span className="text-[var(--text-primary)]">npm run build</span></p>
                  <p>3. Artifact packaged and deployed to <span className="text-[var(--text-primary)]">GitHub Pages</span></p>
                  <div className="pt-2 text-[10px] text-[var(--text-muted)] border-t border-[var(--border)] mt-2">
                    Status: Zero-downtime, fully reproducible.
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
