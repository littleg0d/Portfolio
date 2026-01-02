import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

const AppFooter = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border border-t bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
          {/* Column 1: Brand */}
          <div className="col-span-1">
            <h3 className="font-display mb-6 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-xl font-bold text-transparent">
              Federico.
            </h3>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <SocialLink
                href={siteConfig.links.github}
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
              <SocialLink
                href={siteConfig.links.linkedin}
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <CopyEmailLink email={siteConfig.email} />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="mb-6 font-semibold text-neutral-900 dark:text-white">Navigation</h4>
            <ul className="space-y-4">
              <FooterLink href="#hero" label={t('nav.home')} />
              <FooterLink href="#about" label={t('nav.about')} />
              <FooterLink href="#skills" label={t('nav.skills')} />
              <FooterLink href="#projects" label={t('nav.projects')} />
            </ul>
          </div>

          {/* Column 3: Projects */}
          <div>
            <h4 className="mb-6 font-semibold text-neutral-900 dark:text-white">Featured</h4>
            <ul className="space-y-4">
              <FooterLink href="#projects" label="Microservices Ecosystem" />
              <FooterLink href="#projects" label="E-Commerce API" />
              <FooterLink href="#projects" label="Auth System" />
              <FooterLink href="#certifications" label="Certifications" />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 md:flex-row dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {currentYear} Federico Rojas. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for new opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

import { useCopyToClipboard } from '@/components/hooks/useCopyToClipboard';
import { Check } from 'lucide-react';

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black"
    aria-label={label}
  >
    {icon}
  </a>
);

const CopyEmailLink = ({ email }: { email: string }) => {
  const { copiedText, copy } = useCopyToClipboard();
  const isCopied = !!copiedText;

  return (
    <button
      onClick={() => copy(email)}
      className="relative flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black"
      aria-label="Copy Email"
    >
      <span
        className={`absolute transition-all duration-300 ${isCopied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <Mail className="h-5 w-5" />
      </span>
      <span
        className={`absolute text-green-500 transition-all duration-300 ${isCopied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <Check className="h-5 w-5" />
      </span>
    </button>
  );
};

const FooterLink = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a
      href={href}
      className="group flex items-center text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
    >
      {label}
      <ArrowUpRight className="ml-1 h-3 w-3 translate-x-1 -translate-y-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
    </a>
  </li>
);

export default AppFooter;
