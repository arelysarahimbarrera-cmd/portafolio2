import { useState } from 'react';
import { X, Target, AlertCircle, Compass, Wrench, TrendingUp, BookOpen } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { projects, type ProjectData } from '@/data/portfolio';
import type { Translation } from '@/data/translations';

const sectionIcons = [Target, AlertCircle, Compass, Wrench, TrendingUp, BookOpen];

export function Projects() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="section-pad relative">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-electric-500" /> {t.projects.eyebrow}
          </span>
          <h2 className="heading-lg mt-4">{t.projects.title}</h2>
          <p className="mt-4 text-lg text-navy-600 dark:text-slate-400">{t.projects.subtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, idx) => {
            const item = t.projects.items[idx];
            const statusLabel =
              project.status === 'proposed' ? t.projects.statusProposed : t.projects.statusInProgress;
            return (
              <button
                key={project.id}
                onClick={() => setSelectedIdx(idx)}
                className="card-surface glow-border group flex flex-col overflow-hidden p-0 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-soft"
              >
                <div className={`relative h-32 bg-gradient-to-br ${project.gradient} p-5`}>
                  <project.icon className="h-8 w-8 text-white/90" />
                  <span className="absolute bottom-4 right-4 rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white backdrop-blur">
                    {statusLabel}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-navy-600 dark:text-slate-400">
                    {item.tagline}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600 dark:text-electric-300">
                    {t.projects.viewDetails}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedIdx !== null && (
        <ProjectModal
          project={projects[selectedIdx]}
          item={t.projects.items[selectedIdx]}
          statusLabel={
            projects[selectedIdx].status === 'proposed'
              ? t.projects.statusProposed
              : t.projects.statusInProgress
          }
          modal={t.projects.modal}
          onClose={() => setSelectedIdx(null)}
        />
      )}
    </section>
  );
}

interface ModalProps {
  project: ProjectData;
  item: {
    title: string;
    tagline: string;
    objective: string;
    problem: string;
    approach: string;
    tools: string[];
    results: string;
    lessons: string;
  };
  statusLabel: string;
  modal: Translation['projects']['modal'];
  onClose: () => void;
}

function ProjectModal({ project, item, statusLabel, modal, onClose }: ModalProps) {
  const sections = [
    { label: modal.objective, value: item.objective, isTools: false },
    { label: modal.problem, value: item.problem, isTools: false },
    { label: modal.approach, value: item.approach, isTools: false },
    { label: modal.tools, value: '', isTools: true },
    { label: modal.results, value: item.results, isTools: false },
    { label: modal.lessons, value: item.lessons, isTools: false },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-950/60 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} details`}
    >
      <div
        className="relative my-auto w-full max-w-2xl animate-fade-up rounded-2xl border border-navy-900/10 bg-white shadow-card dark:border-white/10 dark:bg-navy-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative rounded-t-2xl bg-gradient-to-br ${project.gradient} p-6 sm:p-8`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur">
                <project.icon className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-medium text-white backdrop-blur">
                  {statusLabel}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label={modal.closeAria}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="mt-4 text-white/90">{item.tagline}</p>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6 sm:p-8">
          {sections.map((section, i) => {
            const Icon = sectionIcons[i];
            return (
              <div key={i}>
                <div className="mb-2 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-electric-500 dark:text-electric-300" />
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-navy-800 dark:text-slate-200">
                    {section.label}
                  </h4>
                </div>
                {section.isTools ? (
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-lg bg-electric-500/10 px-3 py-1 text-sm font-medium text-electric-700 dark:text-electric-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-base leading-relaxed text-navy-600 dark:text-slate-400">
                    {section.value}
                  </p>
                )}
              </div>
            );
          })}

          {/* Illustrative placeholder */}
          <div className="mt-4 rounded-xl border border-dashed border-navy-900/15 bg-navy-50/60 p-8 text-center dark:border-white/10 dark:bg-white/5">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-electric-500/10 text-electric-500 dark:text-electric-300">
              <TrendingUp className="h-8 w-8" />
            </div>
            <p className="mt-3 text-sm text-navy-500 dark:text-slate-500">{modal.placeholder}</p>
          </div>

          <button
            onClick={onClose}
            className="w-full rounded-xl border border-navy-900/15 py-3 text-sm font-semibold text-navy-700 transition-colors hover:bg-navy-50 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/5"
          >
            {modal.close}
          </button>
        </div>
      </div>
    </div>
  );
}
