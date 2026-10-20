import React, { useState, useEffect } from 'react';
import { DeveloperProfile } from '../types/portfolio';
import { GithubIcon, DownloadIcon, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  profile: DeveloperProfile;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Read active theme
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = (stored === 'light' || stored === 'dark') ? stored : (prefersDark ? 'dark' : 'light');
    setCurrentTheme(initial);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'featured-project', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setCurrentTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', nextTheme);
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Featured', href: '#featured-project', id: 'featured-project' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Timeline', href: '#timeline', id: 'timeline' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md ${
        isScrolled ? 'py-2.5 shadow-sm' : 'py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <!-- Brand Monogram -->
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-8 h-8 rounded border border-[var(--border-strong)] flex items-center justify-center text-[var(--text-primary)] transition-transform group-hover:scale-105">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z"/>
                <path d="M4 12h16M12 4v16"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="classical-serif text-sm font-bold tracking-wider text-[var(--text-primary)]">
                ArielAmabaPortfolio
              </span>
              <span className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                BSCpE • ICCT Colleges 2026
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? 'text-[var(--text-primary)] font-bold border-b border-[var(--border-strong)] pb-0.5'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <!-- Right Controls: Theme Toggle + Résumé + GitHub -->
          <div className="flex items-center gap-2.5">
            
            <!-- Functional Theme Switcher -->
            <button
              onClick={toggleTheme}
              aria-label="Toggle monochrome color theme"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] bg-[var(--surface-subtle)] text-[var(--text-primary)] text-xs font-mono transition-all"
              title="Toggle theme (Light / Dark)"
            >
              {currentTheme === 'dark' ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
              <span className="text-[11px] tracking-wider uppercase font-semibold">
                {currentTheme === 'dark' ? 'LIGHT' : 'DARK'}
              </span>
            </button>

            <!-- Résumé Modal Trigger -->
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] hover:opacity-90 text-xs font-medium tracking-wide transition-opacity"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </button>

            <!-- GitHub Link -->
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[var(--text-primary)] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <!-- Mobile Hamburger Button -->
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded border border-[var(--border)] text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
          </div>

        </div>

        <!-- Mobile Navigation Menu -->
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-[var(--border)] mt-3 flex flex-col gap-3 text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="text-left py-1 text-[var(--text-primary)] font-bold"
            >
              Open Résumé
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
