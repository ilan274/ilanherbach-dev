import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/styles.css';
import { LanguageProvider } from '../context/LanguageContext/LanguageContext';

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
        <Component {...pageProps} />
      </LanguageProvider>
      {/* <BottomNav>
        <BottomNavigationAction label='Recents' icon={<Restore />} />
        <BottomNavigationAction label='Favorites' icon={<Favorite />} />
        <BottomNavigationAction label='Nearby' icon={<LocationOn />} />
      </BottomNav> */}
    </div>
  );
}
