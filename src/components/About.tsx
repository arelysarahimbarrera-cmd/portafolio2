import { GraduationCap, Briefcase, Lightbulb, Telescope } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const highlightIcons = [GraduationCap, Briefcase, Lightbulb, Telescope];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-electric-500" /> {t.about.eyebrow}
          </span>
          <h2 className="heading-lg mt-4">{t.about.title}</h2>
        </div>

        <div className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-navy-700 dark:text-slate-300">
          <p className="mb-5">{t.about.para1}</p>
          <p>{t.about.para2}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.about.highlights.map((item, i) => {
            const Icon = highlightIcons[i];
            return (
              <div
                key={item.title}
                className="card-surface glow-border group p-6 hover:-translate-y-1 hover:shadow-glow-soft"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/15 to-turquoise-400/15 text-electric-600 transition-colors group-hover:from-electric-500 group-hover:to-turquoise-400 group-hover:text-white dark:text-electric-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-navy-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-navy-600 dark:text-slate-400">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
