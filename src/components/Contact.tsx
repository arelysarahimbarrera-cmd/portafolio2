import { useState, type FormEvent } from 'react';
import { Mail, Linkedin, Github, Send, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profile } from '@/data/portfolio';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

type Status = 'idle' | 'submitting' | 'no-config';

export function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t.contact.validation.nameRequired;
    if (!form.email.trim()) {
      e.email = t.contact.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = t.contact.validation.emailInvalid;
    }
    if (!form.message.trim()) {
      e.message = t.contact.validation.messageRequired;
    } else if (form.message.trim().length < 10) {
      e.message = t.contact.validation.messageShort;
    }
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('no-config');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  }

  function updateField(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
    if (status !== 'idle') setStatus('idle');
  }

  const contactLinks = [
    { label: t.contact.labels.email, value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: t.contact.labels.linkedin, value: t.contact.linkedinValue, href: profile.linkedin, icon: Linkedin },
    { label: t.contact.labels.github, value: t.contact.githubValue, href: profile.github, icon: Github },
  ];

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-px">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">
            <span className="h-px w-8 bg-electric-500" /> {t.contact.eyebrow}
          </span>
          <h2 className="heading-lg mt-4">{t.contact.title}</h2>
          <p className="mt-4 text-lg text-navy-600 dark:text-slate-400">{t.contact.subtitle}</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
          {/* Contact links */}
          <div className="lg:col-span-2">
            <ul className="space-y-4">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card-surface group flex items-center gap-4 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-electric-500/40 hover:shadow-glow-soft"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500/15 to-turquoise-400/15 text-electric-600 transition-colors group-hover:from-electric-500 group-hover:to-turquoise-400 group-hover:text-white dark:text-electric-300">
                      <link.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-navy-500 dark:text-slate-400">{link.label}</p>
                      <p className="text-base font-semibold text-navy-900 dark:text-white">{link.value}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="card-surface space-y-5 p-6 lg:col-span-3 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-slate-200">
                {t.contact.labels.name}
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => updateField('name', e.target.value)}
                className={`w-full rounded-xl border bg-white/60 px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-electric-500 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 ${
                  errors.name ? 'border-red-400 dark:border-red-500/60' : 'border-navy-900/15 dark:border-white/15'
                }`}
                placeholder={t.contact.placeholders.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-slate-200">
                {t.contact.labels.email}
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`w-full rounded-xl border bg-white/60 px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-electric-500 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 ${
                  errors.email ? 'border-red-400 dark:border-red-500/60' : 'border-navy-900/15 dark:border-white/15'
                }`}
                placeholder={t.contact.placeholders.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" /> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy-800 dark:text-slate-200">
                {t.contact.labels.message}
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => updateField('message', e.target.value)}
                className={`w-full resize-y rounded-xl border bg-white/60 px-4 py-3 text-base text-navy-900 placeholder:text-navy-400 transition-colors focus:border-electric-500 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500 ${
                  errors.message ? 'border-red-400 dark:border-red-500/60' : 'border-navy-900/15 dark:border-white/15'
                }`}
                placeholder={t.contact.placeholders.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" /> {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-500 to-electric-600 px-6 py-3.5 text-base font-semibold text-white shadow-glow-soft transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> {t.contact.sending}
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> {t.contact.send}
                </>
              )}
            </button>

            {status === 'no-config' && (
              <div className="flex items-start gap-2.5 rounded-xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                <p>
                  {t.contact.noConfigTitle} {t.contact.noConfigBody}{' '}
                  <a href={`mailto:${profile.email}`} className="font-semibold underline">
                    {profile.email}
                  </a>
                  .
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
