import React, { useState, useEffect } from 'react';
import { DeveloperProfile } from '../types/portfolio';

interface HeroProps {
  profile: DeveloperProfile;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume }) => {
  // Typewriter effect state
  const roles = [
    "Computer Engineering Student",
    "TESDA NCII Electrical Installation & Management",
    "Object-Oriented Software Developer (Java OOP)",
    "Algorithmic Logic & Automation (Python)",
    "Modern Web Architecture (React & TypeScript)",
    "4th-Year Undergraduate @ ICCT Colleges"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal active tab state
  const [activeTab, setActiveTab] = useState<'profile' | 'python' | 'cli'>('profile');

  // Interactive CLI state
  const [cliOutput, setCliOutput] = useState<string>(
    "ariel@cpe-terminal:~$ ready. Click a command above to execute.\n> Verified credentials loaded."
  );

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  const handleCliCommand = (cmd: string) => {
    if (cmd === 'clear') {
      setCliOutput("ariel@cpe-terminal:~$ screen cleared.\n> Ready.");
      return;
    }
    let res = `ariel@cpe-terminal:~$ ${cmd}\n`;
    if (cmd === 'skills') {
      res += `TECHNICAL CAPABILITIES (QUALITATIVE DOMAINS):
  • Core Languages     : Java (OOP, Classes, Data Structures), Python (Algorithms)
  • Modern Web Stack   : TypeScript, React 18, Tailwind CSS, Vite, HTML5/CSS3
  • Electrical Systems : TESDA NCII Electrical Installation & Management Certified
  • DevOps & Quality   : Git, GitHub Pages, Automated GitHub Actions CI/CD
  • Practicum          : On-the-Job Training Student Teacher Practicum`;
    } else if (cmd === 'contact') {
      res += `VERIFIED CONTACT CHANNELS:
  • Mobile Phone : ${profile.phone} (Direct & SMS)
  • Email        : ${profile.socials.email}
  • Address      : ${profile.address}
  • GitHub       : ${profile.socials.github}`;
    } else if (cmd === 'education') {
      res += `ACADEMIC INSTITUTION:
  • Institution : ICCT Colleges Main Campus Cainta
  • Degree      : Bachelor of Science in Computer Engineering (BSCpE)
  • Status      : 4th-Year Undergraduate (Target Class of 2026)
  • Practicum   : Student Teacher On-the-Job Training Completed`;
    }
    setCliOutput(res);
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[var(--border)] z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Understated Classical Ribbon */}
        <div className="flex items-center gap-2 mb-6 text-xs text-[var(--text-muted)] tracking-widest uppercase">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]"></span>
          <span>Olympian Minimalist Edition // Computer Engineering & Software</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Primary Identity & Restrained Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Classical Title Hierarchy */}
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-[var(--border)] bg-[var(--surface-subtle)] text-[10px] font-mono text-[var(--text-muted)] tracking-wider uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)] animate-pulse" />
                <span>ICCT Colleges Cainta // Class of 2026</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[var(--text-primary)] tracking-tight leading-[1.15]">
                ArielAmabaPortfolio
              </h1>
              <p className="text-sm font-semibold text-[var(--text-secondary)] mt-1.5 tracking-wide">
                Ariel John A. Amaba • 4th-Year Computer Engineering Student
              </p>
            </div>

            {/* Restrained Typewriter (Classical & Compact) */}
            <div className="min-h-[38px] mb-6 flex items-center">
              <span className="text-base sm:text-lg text-[var(--text-secondary)] font-normal">
                Specializing in <span className="font-bold text-[var(--text-primary)]">{displayText}</span>
                <span className="inline-block w-[2px] h-[1.1em] ml-1 bg-[var(--text-primary)] animate-pulse align-middle" />
              </span>
            </div>

            {/* Narrative Bio: Grounded in Classical Mythology & Engineering Precision */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl mb-8">
              Inspired by the Promethean spark of algorithmic forethought and the forge of Hephaestus: uniting high-voltage electrical diagnostics certified in <strong className="text-[var(--text-primary)] font-semibold">TESDA NCII Electrical Installation & Management</strong> with clean software engineering in <strong className="text-[var(--text-primary)] font-semibold">Java (OOP)</strong>, <strong className="text-[var(--text-primary)] font-semibold">Python</strong>, and modern web architectures in <strong className="text-[var(--text-primary)] font-semibold">React & TypeScript</strong>.
            </p>

            {/* Action Buttons (Monochrome, Compact) */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#featured-project"
                className="px-5 py-2.5 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                Explore Featured Project →
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                View Official Résumé
              </button>

              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-mono transition-colors"
              >
                @{profile.handle}
              </a>
            </div>

            {/* Key Metrics Counter: Quantitative Qualifications (ZERO SKILL PERCENTAGES) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-[var(--border)]">
              <div className="p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">4th Year</div>
                <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">ICCT Colleges BSCpE</div>
              </div>

              <div className="p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">2026</div>
                <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">Graduation Year</div>
              </div>

              <div className="p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">TESDA NCII</div>
                <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">Electrical Certified</div>
              </div>

              <div className="p-3 rounded border border-[var(--border)] bg-[var(--surface)]">
                <div className="font-serif text-xl sm:text-2xl font-bold text-[var(--text-primary)]">Active</div>
                <div className="text-[11px] text-[var(--text-muted)] font-medium mt-0.5">GitHub CI/CD</div>
              </div>
            </div>

          </div>

          {/* Right Column: Personal Portrait on the Right & Terminal Console */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            
            {/* Classical Circular Personal Portrait Frame */}
            <div className="relative flex flex-col items-center mb-8 w-full max-w-sm">
              
              {/* Classical Header Ribbon */}
              <div className="flex items-center justify-between w-full px-2 mb-3 text-[10px] font-mono tracking-widest text-[var(--text-muted)] uppercase">
                <span>EST. 2026</span>
                <span className="font-serif font-bold tracking-wider text-[var(--text-primary)]">ATHENA • APOLLO</span>
                <span>BSCpE</span>
              </div>

              {/* Concentric Classical Rings Medallion */}
              <div className="relative p-2.5 rounded-full border-2 border-[var(--border-strong)] bg-[var(--surface)] shadow-sm group">
                {/* Subtle Hairline Inner Ring */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border border-[var(--border)] overflow-hidden bg-[var(--surface-subtle)]">
                  
                  {/* Ariel John A. Amaba's Personal Photo (Original Natural Color) */}
                  <img
                    id="heroPersonalPhoto"
                    src={profile.avatarUrl || "assets/images/profile.jpg"}
                    alt={`${profile.name} - Computer Engineering & Software Developer`}
                    className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-105"
                    style={{ objectPosition: 'center 32%' }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src.indexOf('media_1792505024991_d4551121.jpg') === -1) {
                        target.src = 'file:///C:/Users/Ayee%20Aviles/.gemini/antigravity/brain/c3a38b6a-4ca9-488c-9b2b-d0911361bf09/.user_uploaded/media_1792505024991_d4551121.jpg';
                      } else {
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling;
                        if (fallback) fallback.classList.remove('hidden');
                      }
                    }}
                  />

                  {/* Fallback Display */}
                  <div className="hidden w-full h-full rounded-full flex flex-col items-center justify-center font-mono text-[var(--text-primary)] bg-[var(--surface)] p-4 text-center">
                    <span className="font-serif font-bold text-3xl mb-1">AA</span>
                    <span className="text-xs font-bold tracking-wider">Ariel John A. Amaba</span>
                    <span className="text-[10px] text-[var(--text-muted)] mt-1">BSCpE • ICCT Colleges</span>
                  </div>
                </div>

                {/* Top Classical Pediment Accent Tag */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded border border-[var(--border)] bg-[var(--bg)] text-[9px] font-mono tracking-widest text-[var(--text-primary)] uppercase font-semibold whitespace-nowrap shadow-xs">
                  ENGINEER // SCHOLAR
                </div>

                {/* Bottom Classical Nameplate Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded border border-[var(--border-strong)] bg-[var(--surface)] text-[11px] font-serif font-bold text-[var(--text-primary)] uppercase tracking-wider whitespace-nowrap shadow-xs">
                  Ariel John A. Amaba
                </div>
              </div>

              {/* Classical Architectural Caption */}
              <div className="mt-5 text-center px-4">
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  Bachelor of Science in Computer Engineering
                </p>
                <p className="text-[11px] font-mono text-[var(--text-muted)] mt-0.5">
                  ICCT Colleges Cainta • Class of 2026
                </p>
              </div>
            </div>

            {/* Interactive Monochrome Code Terminal (Preserved Right Below Photo) */}
            <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden shadow-sm">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-3.5 py-2 border-b border-[var(--border)] bg-[var(--surface-subtle)]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full border border-[var(--border)] bg-[var(--text-muted)]/30"></span>
                  <span className="w-2.5 h-2.5 rounded-full border border-[var(--border)] bg-[var(--text-muted)]/30"></span>
                  <span className="w-2.5 h-2.5 rounded-full border border-[var(--border)] bg-[var(--text-muted)]/30"></span>
                  <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">terminal.cpe</span>
                </div>

                {/* Tab Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'profile'
                        ? 'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    profile.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('python')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'python'
                        ? 'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    logic.py
                  </button>
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'cli'
                        ? 'border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-primary)] font-semibold'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    cli
                  </button>
                </div>
              </div>

              {/* Tab 1: TypeScript Profile */}
              {activeTab === 'profile' && (
                <div className="p-4 font-mono text-xs leading-relaxed text-[var(--text-secondary)] bg-[var(--code-bg)] min-h-[290px]">
                  <p className="text-[var(--text-muted)]">// ICCT Colleges BSCpE Profile</p>
                  <p><span className="text-[var(--text-primary)] font-bold">const</span> engineer = {'{'}</p>
                  <div className="pl-4 space-y-0.5">
                    <p>name: <span className="text-[var(--text-primary)]">"{profile.name}"</span>,</p>
                    <p>title: <span className="text-[var(--text-primary)]">"ArielAmabaPortfolio"</span>,</p>
                    <p>institution: <span className="text-[var(--text-primary)]">"ICCT Colleges Main Campus Cainta"</span>,</p>
                    <p>academicYear: <span className="text-[var(--text-primary)]">"4th-Year (2026)"</span>,</p>
                    <p>credentials: [</p>
                    <div className="pl-4 text-[var(--text-muted)]">
                      <p>"TESDA NCII Electrical Installation & Management",</p>
                      <p>"On-the-Job Training Student Teacher Practicum"</p>
                    </div>
                    <p>],</p>
                    <p>coreLanguages: [<span className="text-[var(--text-primary)]">"Java (OOP)"</span>, <span className="text-[var(--text-primary)]">"Python"</span>, <span className="text-[var(--text-primary)]">"TypeScript"</span>]</p>
                  </div>
                  <p>{'}'};</p>
                </div>
              )}

              {/* Tab 2: Python Code */}
              {activeTab === 'python' && (
                <div className="p-4 font-mono text-xs leading-relaxed text-[var(--text-secondary)] bg-[var(--code-bg)] min-h-[290px]">
                  <p className="text-[var(--text-muted)]"># Promethean Algorithmic Script</p>
                  <p><span className="text-[var(--text-primary)] font-bold">class</span> <span className="text-[var(--text-primary)] font-semibold">ComputerEngineer</span>:</p>
                  <div className="pl-4 space-y-0.5">
                    <p><span className="text-[var(--text-primary)] font-bold">def</span> __init__(self):</p>
                    <p className="pl-4">self.author = <span className="text-[var(--text-primary)]">"{profile.name}"</span></p>
                    <p className="pl-4">self.certified = <span className="text-[var(--text-primary)]">"TESDA NCII Electrical"</span></p>
                    <p className="pl-4">self.school = <span className="text-[var(--text-primary)]">"ICCT Colleges"</span></p>
                    <p><span className="text-[var(--text-primary)] font-bold">def</span> execute_architecture(self):</p>
                    <p className="pl-4"><span className="text-[var(--text-primary)] font-bold">return</span> <span className="text-[var(--text-primary)]">"Engineered with rigor & precision."</span></p>
                  </div>
                  <p className="mt-2 text-[var(--text-muted)]">cpe = ComputerEngineer()</p>
                  <p>print(cpe.execute_architecture())</p>
                </div>
              )}

              {/* Tab 3: Interactive CLI Runner */}
              {activeTab === 'cli' && (
                <div className="p-4 font-mono text-xs leading-relaxed text-[var(--text-secondary)] bg-[var(--code-bg)] min-h-[290px] flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--text-muted)]">// Interactive Monochrome Terminal</p>
                    <p className="text-[11px] text-[var(--text-muted)] mb-2">Execute verified commands:</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      <button
                        onClick={() => handleCliCommand('skills')}
                        className="px-2 py-0.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[10px] text-[var(--text-primary)] bg-[var(--surface)] transition-colors"
                      >
                        $ skills()
                      </button>
                      <button
                        onClick={() => handleCliCommand('education')}
                        className="px-2 py-0.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[10px] text-[var(--text-primary)] bg-[var(--surface)] transition-colors"
                      >
                        $ education()
                      </button>
                      <button
                        onClick={() => handleCliCommand('contact')}
                        className="px-2 py-0.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[10px] text-[var(--text-primary)] bg-[var(--surface)] transition-colors"
                      >
                        $ contact()
                      </button>
                      <button
                        onClick={() => handleCliCommand('clear')}
                        className="px-2 py-0.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--surface)] transition-colors"
                      >
                        $ clear
                      </button>
                    </div>
                    <pre className="text-[11px] leading-relaxed whitespace-pre-wrap text-[var(--text-primary)] bg-[var(--surface-subtle)] p-2.5 rounded border border-[var(--border)] font-mono">
                      {cliOutput}
                    </pre>
                  </div>
                  <div className="pt-2 text-[10px] text-[var(--text-muted)] flex items-center justify-between border-t border-[var(--border)] mt-3">
                    <span>status: operational</span>
                    <span>mode: strict-monochrome</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
