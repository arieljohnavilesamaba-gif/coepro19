import React, { useState } from 'react';
import { profileData, projectsData, skillsData, timelineData } from './data/portfolioData';
import { Project } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProject } from './components/FeaturedProject';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Locate the primary featured project (Personal GitHub Portfolio)
  const featured = projectsData.find((p) => p.featured) || projectsData[0];

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text flex flex-col font-sans selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black relative transition-colors duration-200">
      {/* Classical Greek Mythology Background: Marble Statuary & Fluted Doric Architecture */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Classical Fluted Columns (Left & Right Margins) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ stroke: 'var(--column-stroke)' }}
        >
          {/* Left Doric Pillar */}
          <g strokeWidth="1.2" fill="none">
            <rect x="20" y="0" width="70" height="24" strokeWidth="1.8" />
            <line x1="20" y1="24" x2="90" y2="24" />
            <line x1="30" y1="24" x2="30" y2="100%" />
            <line x1="43" y1="24" x2="43" y2="100%" />
            <line x1="55" y1="24" x2="55" y2="100%" />
            <line x1="67" y1="24" x2="67" y2="100%" />
            <line x1="80" y1="24" x2="80" y2="100%" />
          </g>
          {/* Right Doric Pillar */}
          <g strokeWidth="1.2" fill="none">
            <rect x="calc(100% - 90px)" y="0" width="70" height="24" strokeWidth="1.8" />
            <line x1="calc(100% - 90px)" y1="24" x2="calc(100% - 20px)" y2="24" />
            <line x1="calc(100% - 80px)" y1="24" x2="calc(100% - 80px)" y2="100%" />
            <line x1="calc(100% - 67px)" y1="24" x2="calc(100% - 67px)" y2="100%" />
            <line x1="calc(100% - 55px)" y1="24" x2="calc(100% - 55px)" y2="100%" />
            <line x1="calc(100% - 43px)" y1="24" x2="calc(100% - 43px)" y2="100%" />
            <line x1="calc(100% - 30px)" y1="24" x2="calc(100% - 30px)" y2="100%" />
          </g>
        </svg>

        {/* Centered Parthenon Pediment Crest */}
        <svg
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-48 opacity-[0.05] dark:opacity-[0.06] pointer-events-none"
          viewBox="0 0 700 180"
          fill="none"
          stroke="currentColor"
        >
          <polygon points="350,15 40,140 660,140" strokeWidth="2" />
          <line x1="20" y1="140" x2="680" y2="140" strokeWidth="2.5" />
          <line x1="20" y1="150" x2="680" y2="150" strokeWidth="2" />
          <line x1="120" y1="150" x2="120" y2="180" strokeWidth="2" />
          <line x1="200" y1="150" x2="200" y2="180" strokeWidth="2" />
          <line x1="280" y1="150" x2="280" y2="180" strokeWidth="2" />
          <line x1="350" y1="150" x2="350" y2="180" strokeWidth="2" />
          <line x1="420" y1="150" x2="420" y2="180" strokeWidth="2" />
          <line x1="500" y1="150" x2="500" y2="180" strokeWidth="2" />
          <line x1="580" y1="150" x2="580" y2="180" strokeWidth="2" />
          <circle cx="350" cy="95" r="28" strokeWidth="1.5" />
          <circle cx="350" cy="95" r="18" strokeWidth="1" />
          <line x1="350" y1="60" x2="350" y2="67" strokeWidth="1.5" />
          <line x1="350" y1="123" x2="350" y2="130" strokeWidth="1.5" />
          <line x1="315" y1="95" x2="322" y2="95" strokeWidth="1.5" />
          <line x1="378" y1="95" x2="385" y2="95" strokeWidth="1.5" />
        </svg>

        {/* Sculpted Marble Bust (Athena / Apollo) with Negative Space */}
        <div
          className="absolute right-0 top-20 w-[420px] max-w-[45vw] h-[580px] pointer-events-none transition-opacity duration-300"
          style={{ opacity: 'var(--statue-opacity)' }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 400 550"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="130" y="490" width="140" height="35" strokeWidth="2" />
            <line x1="110" y1="525" x2="290" y2="525" strokeWidth="2.5" />
            <path
              d="M140 490 C130 420 90 380 70 340 C110 350 160 360 200 360 C240 360 290 350 330 340 C310 380 270 420 260 490 Z"
              strokeWidth="1.8"
            />
            <path d="M120 370 C160 400 240 400 280 370" strokeWidth="1.2" />
            <path d="M140 400 C170 430 230 430 260 400" strokeWidth="1.2" />
            <path d="M155 430 C180 455 220 455 245 430" strokeWidth="1.2" />
            <path d="M175 350 L175 290 C175 270 225 270 225 290 L225 350" strokeWidth="1.8" />
            <path
              d="M165 245 C155 220 155 170 180 145 C190 135 210 135 220 145 C245 170 245 220 235 245 C230 270 170 270 165 245 Z"
              strokeWidth="1.8"
            />
            <path d="M195 180 L205 195 L198 205" strokeWidth="1.2" />
            <path d="M195 218 C198 220 202 220 205 218" strokeWidth="1.2" />
            <path
              d="M175 145 C180 115 160 90 145 75 C180 80 220 80 255 75 C240 90 220 115 225 145 Z"
              strokeWidth="1.8"
            />
            <path d="M200 70 L200 35 L215 50" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Top Fixed Navigation */}
      <Navbar
        profile={profileData}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero
          profile={profileData}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <FeaturedProject
          project={featured}
          onOpenDetails={(p) => setActiveProjectModal(p)}
        />

        <About
          profile={profileData}
        />

        <Skills
          skills={skillsData}
        />

        <Projects
          projects={projectsData}
          onOpenDetails={(p) => setActiveProjectModal(p)}
        />

        <Timeline
          timeline={timelineData}
        />

        <Contact
          profile={profileData}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profileData}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profileData}
        skills={skillsData}
        timeline={timelineData}
      />

      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
      />
    </div>
  );
};

export default App;
