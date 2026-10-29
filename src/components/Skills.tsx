import { useLanguage } from '@/context/LanguageContext';
import { skillCategories } from '@/data/portfolio';

const accentMap: Record<string, { text: string; bg: string; border: string; chip: string }> = {
  electric: {
    text: 'text-electric-600 dark:text-electric-300',
    bg: 'from-electric-500/15 to-electric-500/5',
    border: 'group-hover:border-electric-500/40',
    chip: 'bg-electric-500/10 text-electric-700 dark:text-electric-200',
  },
  turquoise: {
    text: 'text-turquoise-600 dark:text-turquoise-300',
    bg: 'from-turquoise-400/15 to-turquoise-400/5',
    border: 'group-hover:border-turquoise-400/40',
    chip: 'bg-turquoise-400/10 text-turquoise-700 dark:text-turquoise-200',
  },
  accent: {
    text: 'text-accent-600 dark:text-accent-300',
    bg: 'from-accent-400/15 to-accent-400/5',
    border: 'group-hover:border-accent-400/40',
    chip: 'bg-accent-400/10 text-accent-700 dark:text-accent-200',
  },
};

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="skills" className="section-pad relative bg-navy-50/50 dark:bg-navy-900/30">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-electric-500" /> {t.skills.eyebrow}
          </span>
          <h2 className="heading-lg mt-4">{t.skills.title}</h2>
          <p className="mt-4 text-lg text-navy-600 dark:text-slate-400">{t.skills.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => {
            const accent = accentMap[cat.accent];
            const catTitle = t.skills.categories[i].title;
            return (
              <div
                key={cat.id}
                className={`card-surface group p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow-soft ${accent.border}`}
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent.bg} ${accent.text}`}
                >
                  <cat.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{catTitle}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <li
                      key={si}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${accent.chip}`}
                    >
                      {skill[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
