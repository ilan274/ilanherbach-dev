import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/i18n/LanguageContext';
import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { About, Contact, Footer, Projects, Stack } from '@/components/Sections';

// WebGL only runs in the browser.
const Scene = dynamic(() => import('@/three/Scene'), { ssr: false });

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Head>
        <title>{`Ilan Herbach — ${t.hero.role}`}</title>
        <meta name="description" content={t.hero.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0b0b0e" />
        <meta property="og:title" content="Ilan Herbach" />
        <meta property="og:description" content={t.hero.tagline} />
      </Head>
      <Scene />
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
