import { ArrowRight, User, Sparkles, Code2, LineChart, Cpu, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/portfolio';

const floatingTags = [
  { label: 'Python', icon: Code2, delay: '0s', x: '8%', y: '18%' },
  { label: 'SQL', icon: Code2, delay: '1.5s', x: '82%', y: '22%' },
  { label: 'Power BI', icon: LineChart, delay: '0.8s', x: '14%', y: '72%' },
  { label: 'Automation', icon: Cpu, delay: '2.2s', x: '78%', y: '68%' },
];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-radial pt-16"
    >
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-light bg-[size:48px_48px] opacity-60 dark:bg-grid-dark"
        aria-hidden
      />
      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-electric-500/20 blur-3xl dark:bg-electric-500/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-24 h-80 w-80 rounded-full bg-turquoise-400/20 blur-3xl dark:bg-turquoise-400/15"
        aria-hidden
      />

      {/* Floating skill chips */}
      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className="pointer-events-none absolute hidden animate-float xl:flex"
          style={{ left: tag.x, top: tag.y, animationDelay: tag.delay }}
          aria-hidden
        >
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-navy-700 shadow-card backdrop-blur-md dark:border-white/10 dark:bg-navy-900/70 dark:text-slate-200">
            <tag.icon className="h-4 w-4 text-electric-500 dark:text-electric-300" />
            {tag.label}
          </div>
        </div>
      ))}

      <div className="container-px relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-electric-500/30 bg-electric-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-electric-600 dark:text-electric-300">
            <Sparkles className="h-3.5 w-3.5" />
            {t.hero.badge}
          </div>

          <h1 className="heading-xl animate-fade-up">
            {t.hero.titlePrefix}{' '}
            <span className="relative bg-gradient-to-r from-electric-500 via-turquoise-400 to-accent-400 bg-clip-text text-transparent">
              {t.hero.titleAccent}
            </span>
          </h1>

          <p
            className="mt-5 animate-fade-up font-mono text-sm uppercase tracking-[0.2em] text-turquoise-600 dark:text-turquoise-300 sm:text-base"
            style={{ animationDelay: '0.1s' }}
          >
            {t.hero.subtitle}
          </p>

          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-navy-700 dark:text-slate-300 sm:text-xl"
            style={{ animationDelay: '0.2s' }}
          >
            {t.hero.intro}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: '0.3s' }}
          >
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-7 py-3.5 text-base font-semibold text-white shadow-glow-soft transition-transform hover:scale-105 sm:w-auto"
            >
              {t.hero.exploreProjects}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a66c2] px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105 sm:w-auto"
            >
              <Linkedin className="h-5 w-5" />
              {t.hero.linkedinButton}
            </a>
            <a
              href="#about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-navy-900/15 bg-white/60 px-7 py-3.5 text-base font-semibold text-navy-800 backdrop-blur transition-all hover:border-electric-500/40 hover:text-electric-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:text-electric-300 sm:w-auto"
            >
              <User className="h-5 w-5" />
              {t.hero.aboutMe}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-500 transition-colors hover:text-electric-500 dark:text-slate-400 sm:flex"
        aria-label={t.hero.scroll}
      >
        <span className="text-xs font-mono uppercase tracking-widest">{t.hero.scroll}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-current p-1">
          <span className="h-2 w-1 animate-pulse-glow rounded-full bg-current" />
        </span>
      </a>
    </section>
  );
}
