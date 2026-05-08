export const TILE_FORGE_VERTEX_SHADER = `
attribute vec2 a_position;
attribute vec2 a_local;
attribute float a_kind;
attribute vec4 a_color;
attribute float a_opacity;
attribute float a_radius;
attribute float a_softness;

uniform vec2 u_resolution;

varying vec2 v_local;
varying float v_kind;
varying vec4 v_color;
varying float v_opacity;
varying float v_radius;
varying float v_softness;

void main() {
  vec2 zeroToOne = a_position / u_resolution;
  vec2 clip = zeroToOne * 2.0 - 1.0;

  gl_Position = vec4(clip * vec2(1.0, -1.0), 0.0, 1.0);

  v_local = a_local;
  v_kind = a_kind;
  v_color = a_color;
  v_opacity = a_opacity;
  v_radius = a_radius;
  v_softness = a_softness;
}
`;

export const TILE_FORGE_FRAGMENT_SHADER = `
precision mediump float;

varying vec2 v_local;
varying float v_kind;
varying vec4 v_color;
varying float v_opacity;
varying float v_radius;
varying float v_softness;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec4 color = v_color;
  float alpha = color.a * v_opacity;

  if (alpha <= 0.001) {
    discard;
  }

  // kind 0 = tile body / border / small rectangles.
  if (v_kind < 0.5) {
    float d = roundedBox(v_local, vec2(0.5, 0.5), v_radius);
    float edge = smoothstep(v_softness, 0.0, d);
    gl_FragColor = vec4(color.rgb, alpha * edge);
    return;
  }

  // kind 1 = radial glow.
  if (v_kind < 1.5) {
    float dist = length(v_local);
    float glow = 1.0 - smoothstep(0.0, 1.0, dist);
    glow = pow(max(glow, 0.0), 1.35);
    gl_FragColor = vec4(color.rgb, alpha * glow);
    return;
  }

  // kind 2 = terminal dot.
  if (v_kind < 2.5) {
    float dist = length(v_local);
    float dotAlpha = 1.0 - smoothstep(0.45, 0.52, dist);
    gl_FragColor = vec4(color.rgb, alpha * dotAlpha);
    return;
  }

  gl_FragColor = vec4(color.rgb, alpha);
}
`;