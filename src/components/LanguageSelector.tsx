import { useState, useRef, useEffect } from 'react';
import { Globe, Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { languageOptions } from '@/data/translations';

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const current = languageOptions.find((o) => o.code === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={t.nav.selectLanguage}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex h-10 items-center gap-1.5 rounded-xl border border-navy-900/10 bg-white/60 px-3 text-sm font-medium text-navy-700 transition-all hover:border-electric-500/40 hover:text-electric-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-electric-300"
      >
        <Globe className="h-4 w-4" />
        <span className="font-mono text-xs uppercase tracking-wide">{current.shortLabel}</span>
      </button>

      {open && (
        <div
          className="absolute right-0 z-50 mt-2 min-w-[160px] animate-fade-up rounded-xl border border-navy-900/10 bg-white p-1.5 shadow-card dark:border-white/10 dark:bg-navy-900"
          role="listbox"
        >
          {languageOptions.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLang(opt.code);
                setOpen(false);
              }}
              role="option"
              aria-selected={lang === opt.code}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                lang === opt.code
                  ? 'bg-electric-500/10 font-semibold text-electric-600 dark:text-electric-300'
                  : 'text-navy-700 hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase">{opt.shortLabel}</span>
                <span>{opt.fullLabel}</span>
              </span>
              {lang === opt.code && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
