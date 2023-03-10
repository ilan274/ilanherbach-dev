import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/styles.css';
import { LanguageProvider } from '../context/LanguageContext/LanguageContext';
import { Header } from 'components/Header';
import { CopyrightComponent } from 'components/Copyright';
import { LanguageSwitch } from 'components/LanguageSwitch';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.style.backgroundColor = '#19181c';
    return () => {
      document.body.style.backgroundColor = '#19181c';
    };
  }, []);

  return (
    <div>
      <LanguageProvider>
      <LanguageSwitch />
        <Header />
        <Component {...pageProps} />
        {/* <BottomNav>
        <BottomNavigationAction label='Recents' icon={<Restore />} />
        <BottomNavigationAction label='Favorites' icon={<Favorite />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOn />} />
      </BottomNav> */}
        <CopyrightComponent />
      </LanguageProvider>
    </div>
  );
}
