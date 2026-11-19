export const galaxyVertex = /* glsl */ `
  uniform float uTime;
  uniform float uSize;
  uniform float uScroll;

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
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * aScale * (1.0 / -mvPosition.z);

    vColor = aColor;
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
