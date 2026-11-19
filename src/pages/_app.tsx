import type { AppProps } from 'next/app';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { LanguageProvider } from '@/i18n/LanguageContext';
import '@/styles/globals.css';

const display = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-display' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <div className={`${display.variable} ${mono.variable} app`}>
        <Component {...pageProps} />
      </div>
    </LanguageProvider>
  );
}
