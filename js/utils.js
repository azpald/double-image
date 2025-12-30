function cubicBezier(t, p0, p1, p2, p3) {
  // Clamp t to the range [0, 1]
  t = Math.max(0, Math.min(1, t));

  const u = 1 - t;

  return (
    u * u * u * p0 +          // Start point
    3 * u * u * t * p1 +      // First control point
    3 * u * t * t * p2 +      // Second control point
    t * t * t * p3            // End point
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


function monochrome4(gray, x, y) {
  const blockSize = 2;
  const blocks = [
    [
      [0, 0],
      [0, 0],
    ],
    [
      [0, 0],
      [0, 1],
    ],
    [
      [1, 0],
      [0, 1],
    ],
    [
      [1, 1],
      [0, 1],
    ],
    [
      [1, 1],
      [1, 1],
    ],
  ];
  const blockId = Math.floor(gray/255 * 5);

  try {
    // let block = blocks[blockId];
    // if (y % 4 < 2) block = block.reverse();
    // let blockRow = block[y % blockSize];
    // if (x % 4 < 2) blockRow = blockRow.reverse();
    // return blockRow[x % blockSize] * 255;

    return blocks[blockId][y % blockSize][x % blockSize] * 255;
  } catch (error) {
    return 0;
  }
}

function monochrome9(gray, x, y) {
  const blockSize = 3;
  const blocks = [
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 0, 1],
    ],
    [
      [0, 1, 0],
      [0, 0, 1],
      [1, 0, 0],
    ],
    [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, 0],
    ],
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
    ],
    [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  ];
  const blockId = Math.floor(gray/255 * 10);

  try {
    return blocks[blockId][y % blockSize][x % blockSize] * 255;
  } catch (error) {
    return 0;
  }
}