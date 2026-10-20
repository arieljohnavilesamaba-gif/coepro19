import React from 'react';
import { DeveloperProfile } from '../types/portfolio';

interface FooterProps {
  profile: DeveloperProfile;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-[var(--border)] bg-[var(--bg)] text-xs text-[var(--text-muted)] font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left: Brand & Academic Statement */}
        <div className="flex items-center gap-2">
          <span className="font-serif font-bold text-[var(--text-primary)]">
            ArielAmabaPortfolio
          </span>
          <span>•</span>
          <span>© 2026 {profile.name}. ICCT Colleges BSCpE.</span>
        </div>

        {/* Right: Quick Links & Back to Top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Top ↑
          </button>
          <a
            href="#about"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Skills
          </a>
          <button
            onClick={onOpenResume}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Résumé
          </button>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
};
