import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { LINKS } from './links';

export const Hero = () => {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  const item = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <motion.div className="hero-avatar" {...item(0)}>
          <Image src="/eu.jpg" alt="Ilan Herbach" width={96} height={96} priority />
          <span className="status-dot" aria-hidden="true" />
        </motion.div>

        <motion.p className="hero-greeting" {...item(1)}>
          {t.hero.greeting}
        </motion.p>
        <motion.h1 className="hero-title" {...item(2)}>
          {t.hero.name}
        </motion.h1>
        <motion.p className="hero-role" {...item(3)}>
          <span className="prompt">&gt;</span> {t.hero.role}
          <span className="caret" aria-hidden="true" />
        </motion.p>
        <motion.p className="hero-tagline" {...item(4)}>
          {t.hero.tagline}
        </motion.p>

        <motion.div className="hero-actions" {...item(5)}>
          <a href="#contact" className="btn btn-primary">
            {t.hero.ctaPrimary}
          </a>
          <a href="#about" className="btn btn-ghost">
            {t.hero.ctaSecondary}
          </a>
          <div className="hero-social">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
              <GitHubIcon />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
              <LinkedInIcon />
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-hint" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
};
