import { GraduationCap, Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { timeline } from '@/data/portfolio';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-pad relative bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-electric-500" /> {t.experience.eyebrow}
          </span>
          <h2 className="heading-lg mt-4">{t.experience.title}</h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-electric-500 via-turquoise-400 to-accent-400/30 sm:left-1/2 sm:-translate-x-1/2" />

          <ul className="space-y-8">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0;
              const Icon = entry.type === 'education' ? GraduationCap : Briefcase;
              const data = t.experience.entries[i];
              return (
                <li
                  key={entry.id}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-electric-500 to-turquoise-400 text-white shadow-glow">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 w-full sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                    }`}
                  >
                    <div className="card-surface group p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-soft">
                      <span className="font-mono text-xs uppercase tracking-wider text-electric-600 dark:text-electric-300">
                        {data.period}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-navy-900 dark:text-white">
                        {data.title}
                      </h3>
                      <p className="text-sm font-medium text-turquoise-600 dark:text-turquoise-300">
                        {data.organization}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-navy-600 dark:text-slate-400">
                        {data.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
