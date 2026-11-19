import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';

export const Nav = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    ['#about', t.nav.about],
    ['#stack', t.nav.stack],
    ['#contact', t.nav.contact],
  ];

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <a href="#top" className="nav-logo" aria-label="Ilan Herbach, home">
        ih<span>.</span>
      </a>
      <nav aria-label="Main">
        <ul className="nav-links">
          {items.map(([href, label]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <LanguageSwitch />
    </header>
  );
};
