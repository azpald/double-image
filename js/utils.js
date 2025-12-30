function cubicBezier(t, p1, p2, p3, p4) {
  // Clamp input to [0, 1]
  t = Math.max(0, Math.min(1, t));

  const u = 1 - t;

  return (
    u * u * u * p1 +
    3 * u * u * t * p2 +
    3 * u * t * t * p3 +
    t * t * t * p4
  );
}

function jsonDecode(str) {
  if (!str) return null;
  try {
    const parsed = JSON.parse(str);
    return parsed;
  } catch (error) {
    return null;
  }
}

function hexToRgb(hex) {
  hex = hex.replace("#", "");
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16),
  ];
}
function rgbToHex(rgb) {
  const hex = rgb.map(component => {
    return (component % 256).toString(16).padStart(2, '0');
  }).join('');
  return `#${hex}`;
}
