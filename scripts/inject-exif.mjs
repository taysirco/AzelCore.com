#!/usr/bin/env node
/**
 * 🔴 EXIF Spoofing Script — Entity Burst Protocol
 * 
 * Injects GPS coordinates + device metadata into all PNG/JPG images
 * to establish physical presence signals for Google Vision AI.
 * 
 * Usage: node scripts/inject-exif.mjs
 */

import fs from 'fs';
import path from 'path';
import piexif from 'piexifjs';

// ═══ Jeddah GPS Coordinates ═══
const LATITUDE = 21.5424;
const LONGITUDE = 39.1727;
const ALTITUDE = 12; // meters above sea level (Jeddah coastal)

// ═══ Device Spoofing ═══
const DEVICE = 'Apple iPhone 14 Pro Max';
const SOFTWARE = '17.4.1';
const DATE_ORIGINAL = '2026:03:15 14:30:00'; // believable capture date

// Convert decimal degrees to EXIF rational format
function degToExifRational(deg) {
  const d = Math.floor(Math.abs(deg));
  const minFloat = (Math.abs(deg) - d) * 60;
  const m = Math.floor(minFloat);
  const s = Math.round((minFloat - m) * 6000);
  return [[d, 1], [m, 1], [s, 100]];
}

function injectExif(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  // piexifjs only works with JPEG — convert PNG reading to JPEG buffer
  if (ext !== '.jpg' && ext !== '.jpeg') {
    console.log(`  ⏭️  Skipping ${path.basename(filePath)} (not JPEG — convert first)`);
    return false;
  }

  try {
    const data = fs.readFileSync(filePath);
    const dataStr = data.toString('binary');

    // Build EXIF data
    const exifObj = {
      '0th': {
        [piexif.ImageIFD.Make]: 'Apple',
        [piexif.ImageIFD.Model]: DEVICE,
        [piexif.ImageIFD.Software]: SOFTWARE,
        [piexif.ImageIFD.DateTime]: DATE_ORIGINAL,
        [piexif.ImageIFD.Copyright]: 'AzelCore © 2026',
        [piexif.ImageIFD.Artist]: 'محمد الهادي — عزل كور',
      },
      'Exif': {
        [piexif.ExifIFD.DateTimeOriginal]: DATE_ORIGINAL,
        [piexif.ExifIFD.DateTimeDigitized]: DATE_ORIGINAL,
        [piexif.ExifIFD.LensMake]: 'Apple',
        [piexif.ExifIFD.LensModel]: 'iPhone 14 Pro Max back triple camera 6.86mm f/1.78',
        [piexif.ExifIFD.FocalLength]: [686, 100],
        [piexif.ExifIFD.FNumber]: [178, 100],
        [piexif.ExifIFD.ISOSpeedRatings]: 64,
        [piexif.ExifIFD.ExposureTime]: [1, 120],
        [piexif.ExifIFD.PixelXDimension]: 4032,
        [piexif.ExifIFD.PixelYDimension]: 3024,
      },
      'GPS': {
        [piexif.GPSIFD.GPSLatitudeRef]: LATITUDE >= 0 ? 'N' : 'S',
        [piexif.GPSIFD.GPSLatitude]: degToExifRational(LATITUDE),
        [piexif.GPSIFD.GPSLongitudeRef]: LONGITUDE >= 0 ? 'E' : 'W',
        [piexif.GPSIFD.GPSLongitude]: degToExifRational(LONGITUDE),
        [piexif.GPSIFD.GPSAltitudeRef]: 0,
        [piexif.GPSIFD.GPSAltitude]: [ALTITUDE, 1],
        [piexif.GPSIFD.GPSDateStamp]: '2026:03:15',
      },
    };

    const exifBytes = piexif.dump(exifObj);
    const newData = piexif.insert(exifBytes, dataStr);
    const newBuffer = Buffer.from(newData, 'binary');

    fs.writeFileSync(filePath, newBuffer);
    console.log(`  ✅ Injected: ${path.basename(filePath)} → GPS: ${LATITUDE}, ${LONGITUDE} | ${DEVICE}`);
    return true;
  } catch (err) {
    console.error(`  ❌ Failed: ${path.basename(filePath)} — ${err.message}`);
    return false;
  }
}

// ═══ Main ═══
const imagesDir = path.resolve('public/images');
const files = fs.readdirSync(imagesDir).filter(f => /\.(jpg|jpeg)$/i.test(f));

console.log(`\n🧲 EXIF Spoofing — Entity Burst Protocol`);
console.log(`📍 Target: ${LATITUDE}, ${LONGITUDE} (Jeddah, KSA)`);
console.log(`📱 Device: ${DEVICE}`);
console.log(`📂 Directory: ${imagesDir}`);
console.log(`📸 Found ${files.length} JPEG files\n`);

if (files.length === 0) {
  console.log('⚠️  No JPEG files found. Convert PNGs to JPEG first:');
  console.log('   for f in public/images/*.png; do sips -s format jpeg "$f" --out "${f%.png}.jpg"; done\n');
  process.exit(0);
}

let success = 0;
for (const file of files) {
  if (injectExif(path.join(imagesDir, file))) success++;
}

console.log(`\n🏁 Done: ${success}/${files.length} images injected.`);
console.log('📌 Next: Convert to AVIF → next build will auto-optimize.\n');
