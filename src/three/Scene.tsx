import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Galaxy } from './Galaxy';

/** Full-screen, fixed WebGL background. Loaded client-side only. */
export default function Scene() {
  const scroll = useRef(0);
  const [config, setConfig] = useState<{ count: number; animate: boolean } | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const count = narrow || cores <= 4 ? 9000 : 22000;
    setConfig({ count, animate: !reduced });

    const onScroll = () => {
      scroll.current = window.scrollY / window.innerHeight;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!config) return null;

  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.6, 7.5], fov: 55 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      >
        <Galaxy count={config.count} scroll={scroll} animate={config.animate} />
      </Canvas>
    </div>
  );
}
