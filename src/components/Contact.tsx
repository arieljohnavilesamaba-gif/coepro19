import React, { useState } from 'react';
import { DeveloperProfile } from '../types/portfolio';

interface ContactProps {
  profile: DeveloperProfile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-[var(--border)] bg-[var(--bg-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="text-[11px] font-bold text-[var(--text-muted)] tracking-widest uppercase mb-1">
            06 // Transmission Channel
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
            Connect & Collaborate
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Direct channels to contact Ariel John A. Amaba for engineering collaborations, technical interviews, and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Verified Contact Details with 1-Click Copy */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Verified Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] truncate font-semibold">
                  {profile.socials.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {copiedEmail ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Contact Phone
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${profile.phone}`}
                  className="font-mono text-xs sm:text-sm text-[var(--text-primary)] hover:underline font-semibold"
                >
                  {profile.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded border border-[var(--border)] hover:border-[var(--border-strong)] text-[11px] font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {copiedPhone ? "Copied" : "Copy"}
                </button>
              </div>
            </div>

            {/* Location & Institution */}
            <div className="p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-xs font-mono space-y-2 text-[var(--text-secondary)]">
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Location:</span>
                <span className="text-[var(--text-primary)] text-right font-medium">
                  {profile.address}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Campus:</span>
                <span className="text-[var(--text-primary)] font-medium">
                  ICCT Colleges (Main Campus Cainta)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">GitHub:</span>
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--text-primary)] hover:underline font-bold"
                >
                  @{profile.handle}
                </a>
              </div>
            </div>

          </div>

          {/* Right: Functional Clean Monochrome Form */}
          <div className="lg:col-span-7 p-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                    placeholder="e.g. Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                  placeholder="Software Engineering / Technical Opportunity"
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-[var(--text-secondary)] mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3 py-2 rounded border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs focus:outline-none focus:border-[var(--border-strong)] transition-colors resize-none"
                  placeholder="Your message regarding software engineering or opportunities..."
                ></textarea>
              </div>

              {isSuccess && (
                <div className="p-3 rounded border border-[var(--border-strong)] bg-[var(--surface-subtle)] text-xs font-mono text-[var(--text-primary)]">
                  ✓ Transmission recorded. Ariel John A. Amaba will respond via email shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 rounded border border-[var(--border-strong)] bg-[var(--text-primary)] text-[var(--bg)] text-xs font-semibold tracking-wider uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Dispatching..." : "Send Transmission →"}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
