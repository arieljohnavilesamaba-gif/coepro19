import React, { useState } from 'react';
import { SkillItem } from '../types/portfolio';

interface SkillsProps {
  skills: SkillItem[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Languages', 'Frontend', 'Hardware & Systems', 'Tools & DevOps'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            03 // Technical Competencies
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Skills & Architectural Proficiencies
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
            A structured competency matrix spanning programming languages, hardware standards, and modern web development. All percentages have been intentionally eliminated in favor of verified qualitative tiers.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono tracking-wide transition-all ${
                selectedCategory === cat
                  ? 'border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold'
                  : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid: Rigorous Cards with Pantheon Identity & ZERO Percentages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-serif font-bold text-base text-[var(--text-primary)]">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold border border-[var(--border)] bg-[var(--badge-bg)] text-[var(--badge-text)]">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-4 font-mono text-[10px]">
                  {item.highlights?.map((hl, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-0.5 rounded border border-[var(--border)] text-[var(--text-secondary)] bg-[var(--surface-subtle)]"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-2 border-t border-[var(--border)] flex justify-between items-center text-[11px] font-mono text-[var(--text-muted)]">
                <span>{item.mythologyTitle || "Classical Standard"}</span>
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
