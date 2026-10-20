import React from 'react';
import { TimelineItem } from '../types/portfolio';

interface TimelineProps {
  timeline: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
  return (
    <section id="timeline" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            05 // Milestone Journey
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Academic Path & Professional Milestones
          </h2>
        </div>

        {/* Chronological Classical List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[var(--border-strong)] space-y-8 ml-2 sm:ml-4">
          {timeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--border-strong)] bg-[var(--bg)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></div>
              </div>

              {/* Card Container */}
              <div className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] transition-colors">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                    {item.period}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)]">
                    {item.type}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[var(--text-primary)]">
                  {item.organization || item.title}
                </h3>

                <div className="text-xs font-medium text-[var(--text-secondary)] mb-2">
                  {item.title} — <span className="text-[var(--text-muted)]">{item.subtitle}</span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.achievements && item.achievements.length > 0 && (
                  <div className="space-y-1 mb-3 text-xs text-[var(--text-secondary)]">
                    {item.achievements.map((ach, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <span className="text-[var(--text-primary)]">▪</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2 border-t border-[var(--border)]">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono border border-[var(--border)] text-[var(--text-muted)] bg-[var(--surface-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
