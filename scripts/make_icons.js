/**
 * Generate the PWA launcher icons (no image tooling required).
 *
 * Draws a simple bistro-copper cooking pot on the app's chalkboard background
 * and writes it out as PNG at the sizes the manifest asks for.
 *
 *   node scripts/make_icons.js
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const IMAGES_DIR = path.join(__dirname, '..', 'images');

const BG = [10, 11, 11];
const GOLD = [199, 159, 94];
const GOLD_DIM = [140, 111, 66];

function encodePng(width, height, pixels) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  let offset = 0;
  for (let y = 0; y < height; y++) {
    raw[offset++] = 0; // filter: none
    pixels.copy(raw, offset, y * width * 4, (y + 1) * width * 4);
    offset += width * 4;
  }

  const chunk = (type, data) => {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeAndData = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeAndData) >>> 0);
    return Buffer.concat([len, typeAndData, crc]);
  };

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // colour type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

let crcTable = null;
function crc32(buf) {
  if (!crcTable) {
    crcTable = [];
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      crcTable[n] = c;
    }
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  return crc ^ 0xffffffff;
}

function drawIcon(size, maskable) {
  const pixels = Buffer.alloc(size * size * 4);
  // Maskable icons get cropped to a circle, so keep the art well inside.
  const scale = maskable ? 0.56 : 0.68;
  const cx = size / 2;
  const cy = size / 2;

  const potRadius = (size * scale) / 2;
  const potTop = cy - potRadius * 0.35;
  const rimHeight = potRadius * 0.22;

  const set = (x, y, colour) => {
    const i = (y * size + x) * 4;
    pixels[i] = colour[0];
    pixels[i + 1] = colour[1];
    pixels[i + 2] = colour[2];
    pixels[i + 3] = 255;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let colour = BG;

      const dx = x - cx;
      const dy = y - cy;

      // Pot body: lower half of a circle
      const inBody = dx * dx + dy * dy <= potRadius * potRadius && y >= potTop + rimHeight;
      // Rim: a wider bar across the top of the body
      const inRim = Math.abs(dx) <= potRadius * 1.05 &&
        y >= potTop && y < potTop + rimHeight;
      // Handles: short stubs either side of the rim
      const inHandle = Math.abs(dx) > potRadius * 1.05 &&
        Math.abs(dx) <= potRadius * 1.28 &&
        y >= potTop + rimHeight * 0.2 && y < potTop + rimHeight * 0.8;
      // Steam: three vertical strokes above the pot
      const steamY = y < potTop - rimHeight * 0.4 && y > potTop - potRadius * 0.85;
      const inSteam = steamY && [-0.42, 0, 0.42].some(off => {
        const wobble = Math.sin((y / size) * 22) * size * 0.012;
        return Math.abs(dx - off * potRadius - wobble) < size * 0.018;
      });

      if (inBody || inRim) colour = GOLD;
      else if (inHandle) colour = GOLD_DIM;
      else if (inSteam) colour = GOLD_DIM;

      set(x, y, colour);
    }
  }

  return encodePng(size, size, pixels);
}

if (!fs.existsSync(IMAGES_DIR)) fs.mkdirSync(IMAGES_DIR, { recursive: true });

[
  ['icon-192.png', 192, false],
  ['icon-512.png', 512, false],
  ['icon-maskable-512.png', 512, true]
].forEach(([name, size, maskable]) => {
  const png = drawIcon(size, maskable);
  fs.writeFileSync(path.join(IMAGES_DIR, name), png);
  console.log(`🎨 images/${name} (${size}x${size}, ${(png.length / 1024).toFixed(1)} KB)`);
});
