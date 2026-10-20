import React from 'react';
import { DeveloperProfile } from '../types/portfolio';

interface AboutProps {
  profile: DeveloperProfile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            01 // Academic Foundation
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Engineering Philosophy & Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Statement */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
            <p className="font-medium text-[var(--text-primary)] italic border-l-2 border-[var(--border-strong)] pl-4 py-1">
              "I am a 4th-year Computer Engineering student at ICCT Colleges Main Campus Cainta. I am committed to advancing my technical skills in programming, digital systems, and practical electrical engineering."
            </p>
            <p>
              In Greek classical thought, <strong className="text-[var(--text-primary)] font-semibold">Prometheus</strong> embodied the spark of intellectual discovery, while <strong className="text-[var(--text-primary)] font-semibold">Hephaestus</strong> represented the master craftsman who built resilient, indestructible physical artifacts. As a Computer Engineering student, I adhere to this exact dual discipline.
            </p>
            <p>
              With formal national certification in <strong className="text-[var(--text-primary)] font-semibold">TESDA NCII Electrical Installation and Management</strong>, I apply rigorous safety, schematic analysis, and diagnostic procedures. In the software domain, I focus on clean Object-Oriented Programming (OOP) in <strong className="text-[var(--text-primary)] font-semibold">Java</strong>, algorithmic automation in <strong className="text-[var(--text-primary)] font-semibold">Python</strong>, and modern component systems with <strong className="text-[var(--text-primary)] font-semibold">React, TypeScript, and Tailwind CSS</strong>.
            </p>
            <p>
              Additionally, my On-the-Job Training (OJT) as a Student Teacher strengthened my communication, patience, structured mentoring, and leadership abilities.
            </p>

            {/* Core Competencies Checklist */}
            <div className="pt-3">
              <h3 className="font-serif text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                Core Engineering Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {profile.about.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text-primary)] flex items-start gap-2"
                  >
                    <span className="font-bold">▹</span>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Verified Credentials Box */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Candidate Formal Portrait Frame */}
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg border border-[var(--border-strong)] overflow-hidden shrink-0 bg-[var(--surface-subtle)]">
                <img
                  src={profile.avatarUrl || "assets/images/profile.jpg"}
                  alt={`${profile.name} - Formal Portrait`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 32%' }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.indexOf('profile.jpg') === -1) {
                      target.src = 'assets/images/profile.jpg';
                    } else {
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling;
                      if (fallback) fallback.classList.remove('hidden');
                    }
                  }}
                />
                <div className="hidden w-full h-full flex flex-col items-center justify-center font-mono text-[var(--text-muted)] bg-[var(--surface-subtle)]">
                  <span className="font-serif font-bold text-base text-[var(--text-primary)]">AA</span>
                  <span className="text-[9px] uppercase tracking-wider mt-0.5">Profile Photo</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">Candidate Portrait</div>
                <h3 className="font-serif text-base font-bold text-[var(--text-primary)]">{profile.name}</h3>
                <p className="text-xs text-[var(--text-secondary)] font-mono mt-0.5">
                  BSCpE Student • ICCT Colleges
                </p>
                <div className="mt-2 text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
                  <span>Active Candidate (Class of 2026)</span>
                </div>
              </div>
            </div>

            {/* Core Competencies Box */}
            <div className="p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] space-y-4">
              <h3 className="font-serif text-base font-bold text-[var(--text-primary)] border-b border-[var(--border)] pb-2">
                Verified Credentials & Status
              </h3>
            <ul className="space-y-3 text-xs text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-primary)] font-bold">▪</span>
                <span><strong className="text-[var(--text-primary)]">ICCT Colleges Main Campus Cainta:</strong> 4th-Year Bachelor of Science in Computer Engineering (BSCpE, Expected 2026).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-primary)] font-bold">▪</span>
                <span><strong className="text-[var(--text-primary)]">TESDA NCII National Certification:</strong> Electrical Installation and Management (Wiring, Circuit Diagnostics, Standards).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-primary)] font-bold">▪</span>
                <span><strong className="text-[var(--text-primary)]">Teaching Practicum:</strong> Completed On-the-Job Training (OJT) as Student Teacher.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-primary)] font-bold">▪</span>
                <span><strong className="text-[var(--text-primary)]">Eastern Star Academy:</strong> Humanities and Social Sciences (HUMSS) foundational graduate.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--text-primary)] font-bold">▪</span>
                <span><strong className="text-[var(--text-primary)]">GitHub Profile:</strong> Active version control via <code className="text-[var(--text-primary)] font-mono">@{profile.handle}</code>.</span>
              </li>
            </ul>

            {/* Guiding Principle */}
            <div className="pt-3 border-t border-[var(--border)]">
              <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-mono mb-1">
                Engineering Maxim
              </div>
              <p className="text-xs italic text-[var(--text-primary)] font-serif">
                "{profile.about.philosophy}"
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
