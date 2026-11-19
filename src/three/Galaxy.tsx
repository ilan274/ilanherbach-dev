import { useFrame, useThree } from '@react-three/fiber';
import { MutableRefObject, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { galaxyFragment, galaxyVertex } from './shaders';

export interface PointerState {
  x: number; // NDC -1..1
  y: number;
  active: number; // 0..1, eased presence of the pointer
}

interface Props {
  count: number;
  pointer: MutableRefObject<PointerState>;
  scroll: MutableRefObject<number>;
  animate: boolean;
}

const PALETTE = {
  core: new THREE.Color('#f4ffb8'),
  lime: new THREE.Color('#dcf763'),
  mint: new THREE.Color('#63f7c6'),
  deep: new THREE.Color('#2f6b4f'),
};

const BRANCHES = 4;
const RADIUS = 6;

function buildGalaxy(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const randoms = new Float32Array(count);
  const tmp = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const r = Math.pow(Math.random(), 1.6) * RADIUS;
    const branch = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
    const spin = r * 0.9;
    const spread = 0.35 + r * 0.06;
    const rnd = () => Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * spread * r * 0.35;

    positions[i * 3] = Math.cos(branch + spin) * r + rnd();
    positions[i * 3 + 1] = rnd() * 0.6;
    positions[i * 3 + 2] = Math.sin(branch + spin) * r + rnd();

    const t = r / RADIUS;
    if (t < 0.15) tmp.copy(PALETTE.core).lerp(PALETTE.lime, t / 0.15);
    else if (t < 0.6) tmp.copy(PALETTE.lime).lerp(PALETTE.mint, (t - 0.15) / 0.45);
    else tmp.copy(PALETTE.mint).lerp(PALETTE.deep, (t - 0.6) / 0.4);
    // A few bright sparkles scattered around.
    if (Math.random() < 0.02) tmp.set('#ffffff');

    colors[i * 3] = tmp.r;
    colors[i * 3 + 1] = tmp.g;
    colors[i * 3 + 2] = tmp.b;
    scales[i] = 0.4 + Math.random() * 1.1;
    randoms[i] = Math.random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
  geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
  return geometry;
}

function buildDust(count: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 12 + Math.random() * 18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return geometry;
}

export function Galaxy({ count, pointer, scroll, animate }: Props) {
  const group = useRef<THREE.Group>(null);
  const dust = useRef<THREE.Points>(null);
  const { size, viewport, camera } = useThree();

  const geometry = useMemo(() => buildGalaxy(count), [count]);
  const dustGeometry = useMemo(() => buildDust(Math.round(count / 6)), [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uSize: { value: 40 },
      uScroll: { value: 0 },
      uMouse: { value: new THREE.Vector2(10, 10) },
      uAspect: { value: 1 },
      uMouseForce: { value: 0 },
      uOpacity: { value: 1 },
    }),
    []
  );

  const isNarrow = size.width < 768;
  const smoothScroll = useRef(0);

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (animate) uniforms.uTime.value += dt;

    const s = scroll.current;
    smoothScroll.current = THREE.MathUtils.damp(smoothScroll.current, s, 4, dt);
    const ss = smoothScroll.current;
    const p = pointer.current;

    uniforms.uSize.value = (isNarrow ? 34 : 44) * viewport.dpr;
    uniforms.uAspect.value = size.width / size.height;
    uniforms.uMouse.value.set(p.x, p.y);
    uniforms.uMouseForce.value = p.active;
    uniforms.uScroll.value = Math.min(ss, 1.5);
    // Fade the galaxy behind content so text stays readable.
    uniforms.uOpacity.value = THREE.MathUtils.lerp(1, 0.45, Math.min(ss, 1));

    if (group.current) {
      // Slide to the side as the content sections come in (desktop only).
      const targetX = isNarrow ? 0 : THREE.MathUtils.lerp(0, 3.2, Math.min(ss, 1));
      group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 3, dt);
      group.current.rotation.y = ss * 0.9;
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.42 + p.y * 0.08, 3, dt);
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -0.18 - p.x * 0.08, 3, dt);
    }
    if (dust.current && animate) dust.current.rotation.y += dt * 0.01;

    // Subtle camera parallax.
    camera.position.x = THREE.MathUtils.damp(camera.position.x, p.x * 0.4, 2, dt);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 1.6 + p.y * 0.3, 2, dt);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <group ref={group}>
        <points geometry={geometry}>
          <shaderMaterial
            vertexShader={galaxyVertex}
            fragmentShader={galaxyFragment}
            uniforms={uniforms}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
      <points ref={dust} geometry={dustGeometry}>
        <pointsMaterial size={0.06} color="#cfd8b0" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
      </points>
    </>
  );
}
