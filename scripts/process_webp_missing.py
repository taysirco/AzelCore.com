#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════
  حقن EXIF سعودي في ملفات WebP الناقصة (التي لم تُعالج)
═══════════════════════════════════════════════════════════════
"""

import os
import sys
import glob
import random
import subprocess
import tempfile
import shutil
from datetime import datetime, timedelta

# نفس التكوينات من السكربت الرئيسي
IMAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")

JEDDAH_GPS = {
    "workshop":       {"lat": 21.5169, "lon": 39.2192},
    "corniche":       {"lat": 21.5723, "lon": 39.1034},
    "al_hamra":       {"lat": 21.5424, "lon": 39.1743},
    "al_rawdah":      {"lat": 21.5221, "lon": 39.1912},
    "al_safa":        {"lat": 21.5635, "lon": 39.1567},
    "al_hamdaniya":   {"lat": 21.4311, "lon": 39.2674},
    "al_naeem":       {"lat": 21.5502, "lon": 39.1821},
    "al_zahra":       {"lat": 21.5337, "lon": 39.1653},
    "king_fahd_road": {"lat": 21.5482, "lon": 39.1758},
}

LENS_PROFILES = {
    "wide":      {"focal": "6.3", "focal35": "23", "fnum": "1.7"},
    "ultrawide": {"focal": "2.2", "focal35": "13", "fnum": "2.2"},
    "telephoto": {"focal": "14.4", "focal35": "70", "fnum": "2.4"},
}

SCENE_PROFILES = {
    "outdoor_day":    {"iso_range": (50, 100),  "speed": "1/1600"},
    "outdoor_golden": {"iso_range": (100, 200), "speed": "1/800"},
    "indoor":         {"iso_range": (160, 500), "speed": "1/60"},
}

IMAGE_CONFIGS = {
    "trusted-brands-banner":          ("workshop",       "wide",      "indoor"),
    "llumar-tint-installation":       ("workshop",       "wide",      "indoor"),
    "gallery-car-before-01":          ("al_rawdah",      "wide",      "outdoor_day"),
    "gallery-car-after-01":           ("al_rawdah",      "wide",      "outdoor_day"),
    "gallery-car-before-02":          ("al_hamra",       "wide",      "outdoor_day"),
    "gallery-car-after-02":           ("workshop",       "wide",      "indoor"),
    "gallery-car-before-03":          ("al_naeem",       "wide",      "outdoor_day"),
    "gallery-car-after-03":           ("workshop",       "wide",      "indoor"),
    "gallery-building-before-01":     ("king_fahd_road", "ultrawide", "outdoor_day"),
    "gallery-building-after-01":      ("king_fahd_road", "ultrawide", "outdoor_day"),
    "gallery-building-before-02":     ("al_safa",        "wide",      "outdoor_day"),
    "gallery-building-after-02":      ("al_safa",        "wide",      "outdoor_day"),
    "about-team-photo":               ("workshop",       "ultrawide", "indoor"),
    "about-workshop-interior":        ("workshop",       "ultrawide", "indoor"),
    "about-certifications":           ("workshop",       "wide",      "indoor"),
    "about-owner-portrait":           ("workshop",       "telephoto", "indoor"),
    "blog-tint-laws-saudi-2026":      ("workshop",       "wide",      "indoor"),
    "blog-nano-vs-carbon-tint":       ("workshop",       "telephoto", "indoor"),
    "blog-best-car-tint-jeddah":      ("corniche",       "wide",      "outdoor_golden"),
    "blog-building-insulation-savings":("al_hamra",      "wide",      "outdoor_day"),
    "blog-ppf-vs-ceramic-coating":    ("workshop",       "telephoto", "indoor"),
    "testimonial-customer-01":        ("al_rawdah",      "telephoto", "outdoor_day"),
    "testimonial-customer-02":        ("al_safa",        "wide",      "indoor"),
    "testimonial-customer-03":        ("al_naeem",       "telephoto", "outdoor_day"),
    "testimonial-customer-04":        ("al_hamdaniya",   "wide",      "outdoor_day"),
    "testimonial-customer-05":        ("king_fahd_road", "wide",      "indoor"),
    "testimonial-customer-06":        ("al_zahra",       "telephoto", "outdoor_day"),
    # Brand/OG — لا تحتاج EXIF كاميرا لكن نضيفه للتناسق
    "azelcore-logo":                  ("workshop",       "wide",      "indoor"),
    "azelcore-logo-dark":             ("workshop",       "wide",      "indoor"),
    "azelcore-favicon":               ("workshop",       "wide",      "indoor"),
    "azelcore-og-default":            ("workshop",       "wide",      "indoor"),
    "azelcore-og-arabic":             ("workshop",       "wide",      "indoor"),
}


def gps_jitter(lat, lon):
    jitter = 0.00045
    return (round(lat + random.uniform(-jitter, jitter), 6),
            round(lon + random.uniform(-jitter, jitter), 6))

def random_date():
    base = datetime(2026, 1, 5)
    dt = base + timedelta(days=random.randint(0, 75),
                          hours=random.randint(8, 17),
                          minutes=random.randint(0, 59),
                          seconds=random.randint(0, 59))
    while dt.weekday() == 4:
        dt += timedelta(days=1)
    return dt


def process_webp_with_naturalization(webp_path, config):
    """تحويل WebP → JPG temp → معالجة → حقن EXIF → إعادة كـ WebP"""
    import cv2
    import numpy as np
    from PIL import Image, ImageFilter

    location_key, lens_type, scene_type = config
    fname = os.path.splitext(os.path.basename(webp_path))[0]

    print(f"  [1/4] 🔄 تحويل مؤقت لـ JPG...")
    # تحويل WebP → JPG مؤقت
    img_pil = Image.open(webp_path).convert("RGB")
    tmp_jpg = os.path.join(tempfile.gettempdir(), f"{fname}_tmp.jpg")
    img_pil.save(tmp_jpg, "JPEG", quality=95)

    # تجريد ميتاداتا
    print(f"  [2/4] 🗑  تجريد + كسر علامات مائية...")
    subprocess.run(["exiftool", "-all=", "-overwrite_original", tmp_jpg], capture_output=True)

    # كسر watermark عبر Pillow
    arr = np.array(Image.open(tmp_jpg), dtype=np.float64)
    noise = np.random.normal(0, 1.5, arr.shape)
    arr = np.clip(arr + noise, 0, 255)
    img_noised = Image.fromarray(arr.astype(np.uint8))
    img_blurred = img_noised.filter(ImageFilter.GaussianBlur(radius=0.4))
    img_sharp = img_blurred.filter(ImageFilter.UnsharpMask(radius=1, percent=70, threshold=2))
    w, h = img_sharp.size
    img_resized = img_sharp.resize((w + 3, h + 3), Image.LANCZOS)
    img_final = img_resized.resize((w, h), Image.LANCZOS)
    img_final.save(tmp_jpg, 'JPEG', quality=88, subsampling=0)

    # Naturalize عبر OpenCV
    print(f"  [3/4] 📷 تطبيع كاميرا...")
    img_cv = cv2.imread(tmp_jpg)
    if img_cv is not None:
        rows, cols = img_cv.shape[:2]
        img_cv = img_cv.astype(np.float64)
        # Color cast
        img_cv[:, :, 2] = np.clip(img_cv[:, :, 2] * 1.008, 0, 255)
        img_cv[:, :, 0] = np.clip(img_cv[:, :, 0] * 0.995, 0, 255)
        # Vignetting
        kx = cv2.getGaussianKernel(cols, cols * 0.75)
        ky = cv2.getGaussianKernel(rows, rows * 0.75)
        mask = (ky * kx.T)
        mask = mask / mask.max()
        mask = 0.15 + mask * 0.85
        img_cv = img_cv * mask[:, :, np.newaxis]
        # Chromatic aberration
        b, g, r = cv2.split(img_cv.astype(np.uint8))
        M_r = np.float32([[1.0008, 0, -0.4], [0, 1.0008, -0.4]])
        M_b = np.float32([[0.9992, 0, 0.4], [0, 0.9992, 0.4]])
        r = cv2.warpAffine(r, M_r, (cols, rows), borderMode=cv2.BORDER_REFLECT)
        b = cv2.warpAffine(b, M_b, (cols, rows), borderMode=cv2.BORDER_REFLECT)
        img_cv = cv2.merge([b, g, r]).astype(np.float64)
        # Sensor noise
        read_noise = np.random.normal(0, 1.0, img_cv.shape)
        img_cv = np.clip(img_cv + read_noise, 0, 255)
        cv2.imwrite(tmp_jpg, img_cv.astype(np.uint8), [cv2.IMWRITE_JPEG_QUALITY, 92])

    # حقن EXIF
    print(f"  [4/4] 📍 حقن EXIF + تحويل WebP نهائي...")
    loc = JEDDAH_GPS[location_key]
    lat, lon = gps_jitter(loc["lat"], loc["lon"])
    lens = LENS_PROFILES[lens_type]
    scene = SCENE_PROFILES[scene_type]
    dt = random_date()
    date_str = dt.strftime("%Y:%m:%d %H:%M:%S")
    iso_val = random.randint(*scene["iso_range"])

    exif_cmd = [
        "exiftool", "-overwrite_original",
        f"-Make=samsung", f"-Model=SM-S928B", f"-Software=S928BXXU4AXL1",
        f"-LensMake=Samsung", f"-LensModel=Samsung Galaxy S24 Ultra Rear Camera",
        f"-FocalLength={lens['focal']}", f"-FocalLengthIn35mmFormat={lens['focal35']}",
        f"-FNumber={lens['fnum']}", f"-ApertureValue={lens['fnum']}",
        f"-ISO={iso_val}", f"-ExposureTime={scene['speed']}",
        f"-ExposureProgram=Program AE", f"-ExposureMode=Auto",
        f"-MeteringMode=Center-weighted average", f"-Flash=No Flash",
        f"-WhiteBalance=Auto", f"-SceneCaptureType=Standard",
        f"-Contrast=Normal", f"-Saturation=Normal", f"-Sharpness=Normal",
        f"-ColorSpace=sRGB",
        f"-DateTimeOriginal={date_str}", f"-CreateDate={date_str}", f"-ModifyDate={date_str}",
        f"-OffsetTime=+03:00", f"-OffsetTimeOriginal=+03:00",
        f"-GPSLatitude={lat}", f"-GPSLatitudeRef=North",
        f"-GPSLongitude={lon}", f"-GPSLongitudeRef=East",
        f"-GPSAltitude=18", f"-GPSAltitudeRef=Above Sea Level",
        f"-GPSTimeStamp={dt.strftime('%H:%M:%S')}", f"-GPSDateStamp={dt.strftime('%Y:%m:%d')}",
        f"-FileSource=Digital Camera", f"-SceneType=Directly photographed",
        f"-SensingMethod=One-chip color area",
        f"-Orientation=Horizontal (normal)", f"-ExifVersion=0232",
        tmp_jpg
    ]
    subprocess.run(exif_cmd, capture_output=True)

    # تحويل النهائي إلى WebP
    subprocess.run(["cwebp", "-q", "85", "-m", "6", "-metadata", "all",
                     tmp_jpg, "-o", webp_path], capture_output=True)
    subprocess.run(["exiftool", "-TagsFromFile", tmp_jpg, "-all:all",
                     "-overwrite_original", webp_path], capture_output=True)

    # تنظيف
    os.remove(tmp_jpg)
    return lat, lon, dt


def main():
    print("═" * 60)
    print("  معالجة ملفات WebP الناقصة (بدون EXIF)")
    print("═" * 60)

    # جمع ملفات WebP بدون EXIF
    missing = []
    for f in sorted(glob.glob(os.path.join(IMAGES_DIR, "*.webp"))):
        result = subprocess.run(
            ["exiftool", "-s", "-s", "-s", "-Make", f],
            capture_output=True, text=True
        )
        if not result.stdout.strip():
            missing.append(f)

    if not missing:
        print("✅ كل ملفات WebP تحتوي EXIF سعودي!")
        return

    print(f"\n📁 وُجدت {len(missing)} ملف WebP بدون EXIF\n")

    for i, filepath in enumerate(missing, 1):
        fname = os.path.splitext(os.path.basename(filepath))[0]
        config = IMAGE_CONFIGS.get(fname, ("workshop", "wide", "indoor"))
        print(f"{'─' * 50}")
        print(f"[{i}/{len(missing)}] 🖼  {fname}")
        lat, lon, dt = process_webp_with_naturalization(filepath, config)
        print(f"  ✅ تم → GPS: {lat}, {lon} | {dt.strftime('%Y-%m-%d %H:%M')}")

    print(f"\n{'═' * 60}")
    print(f"  ✅ اكتملت معالجة {len(missing)} ملف WebP")
    print("═" * 60)


if __name__ == "__main__":
    main()
