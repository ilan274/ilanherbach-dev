export const galaxyVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uScroll;
  uniform vec2 uMouse;
  uniform float uAspect;
  uniform float uMouseForce;

  attribute float aScale;
  attribute float aRandom;
  attribute vec3 aColor;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec3 p = position;

    // Differential rotation: inner particles orbit faster than outer ones.
    float radius = length(p.xz);
    float angle = atan(p.z, p.x) + uTime * (0.6 / (radius + 0.6)) * 0.35;
    p.x = cos(angle) * radius;
    p.z = sin(angle) * radius;

    // Gentle breathing on the vertical axis.
    p.y += sin(uTime * 0.8 + aRandom * 6.2831) * 0.04 * (1.0 + radius * 0.15);

    // Scrolling scatters the disc a bit, like it's dissolving into the page.
    p *= 1.0 + uScroll * 0.25;
    p.y += (aRandom - 0.5) * uScroll * 1.2;

    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    vec4 clip = projectionMatrix * mvPosition;

    // Mouse repulsion, computed in screen space so it works at any tilt.
    vec2 ndc = clip.xy / clip.w;
    vec2 diff = ndc - uMouse;
    diff.x *= uAspect;
    float dist = length(diff);
    float push = smoothstep(0.35, 0.0, dist) * uMouseForce;
    vec2 dir = dist > 0.0001 ? diff / dist : vec2(0.0);
    dir.x /= uAspect;
    clip.xy += dir * push * 0.18 * clip.w;

    gl_Position = clip;
    gl_PointSize = uSize * aScale * (1.0 + push * 1.5) * (1.0 / -mvPosition.z);

    vColor = mix(aColor, vec3(1.0), push * 0.6);
    vAlpha = 0.55 + aRandom * 0.45;
  }
`;

export const galaxyFragment = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float strength = pow(max(1.0 - d * 2.0, 0.0), 2.6);
    if (strength < 0.01) discard;
    gl_FragColor = vec4(vColor, strength * vAlpha * uOpacity);
  }
`;
