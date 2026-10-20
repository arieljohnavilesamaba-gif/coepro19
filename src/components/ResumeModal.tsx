import React, { useEffect } from 'react';
import { DeveloperProfile, SkillItem, TimelineItem } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: DeveloperProfile;
  skills: SkillItem[];
  timeline: TimelineItem[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {profile.name}
            </h2>
            <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
              Official Academic & Technical Résumé • ICCT Colleges BSCpE
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-primary)] text-lg leading-none"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Printable Document Content */}
        <div className="space-y-6 text-xs text-[var(--text-secondary)] leading-relaxed">
          {/* Contact Strip with Candidate Photo */}
          <div className="p-3.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] font-mono text-xs flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 rounded border border-[var(--border-strong)] overflow-hidden shrink-0 bg-[var(--surface)]">
              <img
                src={profile.avatarUrl || "assets/images/profile.jpg"}
                alt={`${profile.name} - Candidate Portrait`}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 32%' }}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.indexOf('profile.jpg') === -1) {
                    target.src = 'assets/images/profile.jpg';
                  } else {
                    target.style.display = 'none';
                  }
                }}
              />
            </div>
            <div className="space-y-0.5 w-full">
              <div><strong>Candidate:</strong> {profile.name} (BSCpE 4th-Year Candidate)</div>
              <div><strong>Phone:</strong> {profile.phone} • <strong>Email:</strong> {profile.socials.email}</div>
              <div><strong>Address:</strong> {profile.address}</div>
              <div><strong>GitHub:</strong> {profile.socials.github}</div>
            </div>
          </div>

          {/* Objective / Academic Bio */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
              Academic Objective
            </h3>
            <p className="italic pl-3 border-l-2 border-[var(--border-strong)] text-[var(--text-secondary)]">
              "{profile.about.lead}"
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              Education
            </h3>
            <div className="space-y-3 font-mono">
              <div>
                <div className="font-bold text-[var(--text-primary)] text-sm">
                  ICCT COLLEGES (Main Campus Cainta)
                </div>
                <div className="text-[var(--text-secondary)]">
                  Bachelor of Science in Computer Engineering (BSCpE, Expected 2026)
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  Coursework: OOP, Data Structures, Digital Logic Design, Microprocessors, Computer Architecture.
                </div>
              </div>
              <div>
                <div className="font-bold text-[var(--text-primary)] text-sm">
                  EASTERN STAR ACADEMY (2021 — 2023)
                </div>
                <div className="text-[var(--text-secondary)]">
                  Humanities and Social Sciences Student (HUMSS)
                </div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  Senior High School studies in analytical research, critical thinking, and technical writing.
                </div>
              </div>
            </div>
          </div>

          {/* Working Experience */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-1">
              Working Experience
            </h3>
            <div className="font-mono">
              <div className="font-bold text-[var(--text-primary)] text-sm">
                On-the-Job Training (OJT) as Student Teacher
              </div>
              <div className="text-[11px] text-[var(--text-muted)]">
                Instructional Support, Technical Demonstrations & Academic Mentoring
              </div>
            </div>
          </div>

          {/* Skills & Certifications (ZERO PERCENTAGES) */}
          <div>
            <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-2">
              Skills & National Certification
            </h3>
            <div className="space-y-1.5 font-mono text-xs">
              <div>
                <strong>⚡ Certification:</strong> TESDA NCII Electrical Installation and Management (Certified Master)
              </div>
              <div>
                <strong>💻 Programming:</strong> Java (OOP), Python (Algorithms & Scripting), TypeScript, React 18, Tailwind CSS, HTML5/CSS3
              </div>
              <div>
                <strong>⚙ DevOps & Tools:</strong> Git, GitHub Actions CI/CD Pipeline, VS Code, Digital Logic Analysis
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 pt-4 border-t border-[var(--border)] flex justify-end gap-3 font-mono text-xs">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] font-semibold uppercase hover:opacity-90 transition-opacity"
          >
            Print / Save PDF
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
