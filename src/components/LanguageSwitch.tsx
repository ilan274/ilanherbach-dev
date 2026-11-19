import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';
import { Locale } from '@/i18n/content';

const OPTIONS: { locale: Locale; flag: string; label: string }[] = [
  { locale: 'pt', flag: '/flags/brazil.svg', label: 'Português' },
  { locale: 'en', flag: '/flags/usa.svg', label: 'English' },
];

export const LanguageSwitch = () => {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {OPTIONS.map((o) => (
        <button
          key={o.locale}
          type="button"
          className={`lang-btn${locale === o.locale ? ' is-active' : ''}`}
          aria-pressed={locale === o.locale}
          aria-label={o.label}
          title={o.label}
          onClick={() => setLocale(o.locale)}
        >
          <Image src={o.flag} alt="" width={20} height={20} />
          <span>{o.locale.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
};
