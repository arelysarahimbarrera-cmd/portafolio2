import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Atom } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { LanguageSelector } from '@/components/LanguageSelector';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-navy-900/10 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-navy-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between lg:h-18">
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-display text-lg font-semibold"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-turquoise-400 text-white shadow-glow transition-transform duration-300 group-hover:scale-110">
            <Atom className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline">Arely Maya</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-navy-700 transition-colors hover:text-electric-600 dark:text-slate-300 dark:hover:text-electric-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSelector />

          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.theme.toLight : t.theme.toDark}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-900/10 bg-white/60 text-navy-700 transition-all hover:border-electric-500/40 hover:text-electric-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-electric-300"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-soft transition-transform hover:scale-105 lg:inline-flex"
          >
            {t.nav.getInTouch}
          </a>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-navy-900/10 bg-white/60 text-navy-700 transition-colors hover:text-electric-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative mx-4 mt-2 animate-fade-up rounded-2xl border border-navy-900/10 bg-white p-4 shadow-card dark:border-white/10 dark:bg-navy-900">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-navy-700 transition-colors hover:bg-electric-50 hover:text-electric-600 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-electric-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-4 py-3 text-center text-base font-semibold text-white shadow-glow-soft"
                >
                  {t.nav.getInTouch}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
