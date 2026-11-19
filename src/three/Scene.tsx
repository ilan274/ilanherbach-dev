import { Canvas } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { Galaxy, PointerState } from './Galaxy';

/** Full-screen, fixed WebGL background. Loaded client-side only. */
export default function Scene() {
  const pointer = useRef<PointerState>({ x: 10, y: 10, active: 0 });
  const scroll = useRef(0);
  const [config, setConfig] = useState<{ count: number; animate: boolean } | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const narrow = window.innerWidth < 768;
    const cores = navigator.hardwareConcurrency || 4;
    const count = narrow || cores <= 4 ? 9000 : 22000;
    setConfig({ count, animate: !reduced });

    let target = 0;
    let raf = 0;
    const tick = () => {
      // Ease pointer presence in/out so the effect never pops.
      const p = pointer.current;
      p.active += (target - p.active) * 0.08;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      target = reduced ? 0 : 1;
    };
    const onLeave = () => {
      target = 0;
    };
    const onUp = (e: PointerEvent) => {
      if (e.pointerType === 'touch') onLeave();
    };
    const onScroll = () => {
      scroll.current = window.scrollY / window.innerHeight;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!config) return null;

  return (
    <div className="scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 1.6, 7.5], fov: 55 }}
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }}
      >
        <Galaxy count={config.count} pointer={pointer} scroll={scroll} animate={config.animate} />
      </Canvas>
    </div>
  );
}
