import { Atom, Heart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.footer.links.about, href: '#about' },
    { label: t.footer.links.skills, href: '#skills' },
    { label: t.footer.links.projects, href: '#projects' },
    { label: t.footer.links.experience, href: '#experience' },
    { label: t.footer.links.contact, href: '#contact' },
  ];

  return (
    <footer className="border-t border-navy-900/10 bg-navy-50/50 py-12 dark:border-white/10 dark:bg-navy-900/40">
      <div className="container-px">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-electric-500 to-turquoise-400 text-white">
              <Atom className="h-4 w-4" />
            </span>
            <span className="font-display text-base font-semibold">Arely Maya</span>
          </div>

          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-navy-600 transition-colors hover:text-electric-600 dark:text-slate-400 dark:hover:text-electric-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-navy-900/10 pt-6 text-center text-sm text-navy-500 dark:border-white/10 dark:text-slate-500">
          <p className="flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Arely Maya. {t.footer.builtWith}
            <Heart className="h-3.5 w-3.5 text-electric-500" /> and attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
