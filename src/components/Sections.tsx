import { ReactNode } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { LINKS } from './links';
import { Reveal } from './Reveal';

const SectionHeading = ({ kicker, title }: { kicker: string; title: string }) => (
  <Reveal className="section-heading">
    <p className="kicker">{kicker}</p>
    <h2>{title}</h2>
  </Reveal>
);

const Section = ({ id, children }: { id: string; children: ReactNode }) => (
  <section id={id} className="section">
    <div className="container">{children}</div>
  </section>
);

export const About = () => {
  const { t } = useLanguage();
  return (
    <Section id="about">
      <SectionHeading kicker={t.about.kicker} title={t.about.title} />
      <Reveal className="about-text" delay={0.1}>
        {t.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
      <Reveal className="languages" delay={0.2}>
        <h3>{t.about.languagesLabel}</h3>
        <ul className="chips">
          {t.about.languages.map((l) => (
            <li key={l} className="chip">
              {l}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
};

export const Stack = () => {
  const { t } = useLanguage();
  return (
    <Section id="stack">
      <SectionHeading kicker={t.stack.kicker} title={t.stack.title} />
      <div className="stack-grid">
        {t.stack.groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.1} className="stack-group glass">
            <h3>{g.label}</h3>
            <ul className="chips">
              {g.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export const Contact = () => {
  const { t } = useLanguage();
  return (
    <Section id="contact">
      <Reveal className="contact glass">
        <p className="kicker">{t.contact.kicker}</p>
        <h2 className="contact-title">{t.contact.title}</h2>
        <p className="contact-text">{t.contact.text}</p>
        <div className="contact-actions">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <LinkedInIcon size={18} /> LinkedIn
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GitHubIcon size={18} /> GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
};

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <span>
        © {new Date().getFullYear()} Ilan Herbach. {t.footer.rights}
      </span>
      <span className="footer-built">{t.footer.built}</span>
    </footer>
  );
};
