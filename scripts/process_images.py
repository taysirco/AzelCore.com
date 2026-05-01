#!/usr/bin/env python3
"""
═══════════════════════════════════════════════════════════════
  AzelCore.com — AI Fingerprint Removal + Saudi EXIF Injection
  Pipeline: Strip → Break Watermarks → Naturalize → Inject EXIF
═══════════════════════════════════════════════════════════════
"""

import os
import sys
import glob
import random
import subprocess
import shutil
from datetime import datetime, timedelta

import cv2
import numpy as np
from PIL import Image, ImageFilter

# ═══════════════════════════════════════════════════════════
# CONFIG
# ═══════════════════════════════════════════════════════════

IMAGES_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "images")
BACKUP_DIR = os.path.join(IMAGES_DIR, "_backup")

# ─── GPS مواقع أحياء جدة ───
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

# ─── بروفايلات العدسات — Samsung Galaxy S24 Ultra ───
LENS_PROFILES = {
    "wide":      {"focal": "6.3", "focal35": "23", "fnum": "1.7"},
    "ultrawide": {"focal": "2.2", "focal35": "13", "fnum": "2.2"},
    "telephoto": {"focal": "14.4", "focal35": "70", "fnum": "2.4"},
}

# ─── بروفايلات المشاهد ───
SCENE_PROFILES = {
    "outdoor_day":    {"iso_range": (50, 100),  "speed": "1/1600"},
    "outdoor_golden": {"iso_range": (100, 200), "speed": "1/800"},
    "indoor":         {"iso_range": (160, 500), "speed": "1/60"},
}

# ─── تخصيص كل صورة ───
IMAGE_CONFIGS = {
    "hero-car-tinting-jeddah":        ("corniche",       "wide",      "outdoor_day"),
    "hero-car-tinting-process":       ("workshop",       "wide",      "indoor"),
    "hero-building-glass-insulation": ("king_fahd_road", "ultrawide", "outdoor_day"),
    "hero-thermal-insulation":        ("workshop",       "wide",      "indoor"),
    "nano-ceramic-tint-applied":      ("workshop",       "telephoto", "indoor"),
    "3m-crystalline-tint-jeddah":     ("workshop",       "telephoto", "indoor"),
    "llumar-tint-installation":       ("workshop",       "wide",      "indoor"),
    "xpel-ppf-protection-jeddah":     ("workshop",       "telephoto", "indoor"),
    "car-tint-heat-comparison":       ("workshop",       "wide",      "indoor"),
    "tint-darkness-levels-chart":     ("workshop",       "wide",      "indoor"),
    "car-tinting-tools-equipment":    ("workshop",       "wide",      "indoor"),
    "building-tint-before-after":     ("al_safa",        "wide",      "outdoor_day"),
    "office-window-tinting":          ("king_fahd_road", "wide",      "indoor"),
    "villa-window-insulation-jeddah": ("al_rawdah",      "wide",      "outdoor_day"),
    "commercial-facade-tinting":      ("king_fahd_road", "ultrawide", "outdoor_day"),
    "reflective-film-building":       ("al_hamra",       "ultrawide", "outdoor_day"),
    "safety-security-film":           ("workshop",       "telephoto", "indoor"),
    "why-choose-us-workshop":         ("workshop",       "ultrawide", "indoor"),
    "service-card-car-tinting":       ("workshop",       "wide",      "indoor"),
    "service-card-building-glass":    ("al_hamra",       "wide",      "outdoor_day"),
    "service-card-thermal-insulation":("workshop",       "wide",      "indoor"),
    "thermal-camera-car-test":        ("workshop",       "wide",      "indoor"),
    "thermal-film-window-demo":       ("workshop",       "telephoto", "indoor"),
    "uv-ir-blocking-diagram":         ("workshop",       "wide",      "indoor"),
    "trusted-brands-banner":          ("workshop",       "wide",      "indoor"),
    # Gallery
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
    # About
    "about-team-photo":               ("workshop",       "ultrawide", "indoor"),
    "about-workshop-interior":        ("workshop",       "ultrawide", "indoor"),
    "about-certifications":           ("workshop",       "wide",      "indoor"),
    "about-owner-portrait":           ("workshop",       "telephoto", "indoor"),
    # Blog
    "blog-tint-laws-saudi-2026":      ("workshop",       "wide",      "indoor"),
    "blog-nano-vs-carbon-tint":       ("workshop",       "telephoto", "indoor"),
    "blog-best-car-tint-jeddah":      ("corniche",       "wide",      "outdoor_golden"),
    "blog-building-insulation-savings":("al_hamra",      "wide",      "outdoor_day"),
    "blog-ppf-vs-ceramic-coating":    ("workshop",       "telephoto", "indoor"),
    # Testimonials
    "testimonial-customer-01":        ("al_rawdah",      "telephoto", "outdoor_day"),
    "testimonial-customer-02":        ("al_safa",        "wide",      "indoor"),
    "testimonial-customer-03":        ("al_naeem",       "telephoto", "outdoor_day"),
    "testimonial-customer-04":        ("al_hamdaniya",   "wide",      "outdoor_day"),
    "testimonial-customer-05":        ("king_fahd_road", "wide",      "indoor"),
    "testimonial-customer-06":        ("al_zahra",       "telephoto", "outdoor_day"),
}


# ═══════════════════════════════════════════════════════════
# HELPERS
# ═══════════════════════════════════════════════════════════

def gps_jitter(lat, lon, radius_m=50):
    """إضافة انحراف GPS عشوائي واقعي (±50 متر)"""
    jitter = 0.00045  # ~50m
    return (round(lat + random.uniform(-jitter, jitter), 6),
            round(lon + random.uniform(-jitter, jitter), 6))

def random_date():
    """تاريخ عشوائي يناير-مارس 2026 — ساعات عمل، بدون جمعة"""
    base = datetime(2026, 1, 5)
    dt = base + timedelta(
        days=random.randint(0, 75),
        hours=random.randint(8, 17),
        minutes=random.randint(0, 59),
        seconds=random.randint(0, 59)
    )
    # تجنب الجمعة
    while dt.weekday() == 4:
        dt += timedelta(days=1)
    return dt


# ═══════════════════════════════════════════════════════════
# PHASE 1: STRIP ALL METADATA
# ═══════════════════════════════════════════════════════════

def phase1_strip(filepath):
    """تجريد كل الميتاداتا (C2PA, IPTC, XMP, EXIF)"""
    subprocess.run(
        ["exiftool", "-all=", "-overwrite_original", filepath],
        capture_output=True
    )


# ═══════════════════════════════════════════════════════════
# PHASE 2: BREAK WATERMARKS (Multi-Transform Chain)
# ═══════════════════════════════════════════════════════════

def phase2_break_watermark(filepath):
    """كسر العلامات المائية المخفية عبر سلسلة تحويلات"""
    img = Image.open(filepath)
    arr = np.array(img, dtype=np.float64)

    # 1. ضوضاء Gaussian خفيفة (تكسر frequency domain patterns)
    noise = np.random.normal(0, 1.5, arr.shape)
    arr = np.clip(arr + noise, 0, 255)

    # 2. Slight Blur → Sharpen (تدمير أنماط steganographic)
    img_noised = Image.fromarray(arr.astype(np.uint8))
    img_blurred = img_noised.filter(ImageFilter.GaussianBlur(radius=0.4))
    img_sharp = img_blurred.filter(
        ImageFilter.UnsharpMask(radius=1, percent=70, threshold=2)
    )

    # 3. تغيير طفيف في الأبعاد (كسر pixel-grid alignment)
    w, h = img_sharp.size
    img_resized = img_sharp.resize((w + 3, h + 3), Image.LANCZOS)
    img_final = img_resized.resize((w, h), Image.LANCZOS)

    # 4. حفظ كـ JPEG بجودة مختلفة عن الأصل
    img_final.save(filepath, 'JPEG', quality=88, subsampling=0)


# ═══════════════════════════════════════════════════════════
# PHASE 3: NATURALIZE (Camera Simulation)
# ═══════════════════════════════════════════════════════════

def phase3_naturalize(filepath):
    """محاكاة عيوب كاميرا حقيقية: vignetting, chromatic aberration, sensor noise"""
    img = cv2.imread(filepath)
    if img is None:
        print(f"  ⚠️ تعذر قراءة: {filepath}")
        return

    rows, cols = img.shape[:2]

    # 1. Micro Color Cast (Samsung S24 Ultra warm tone)
    img = img.astype(np.float64)
    img[:, :, 2] = np.clip(img[:, :, 2] * 1.008, 0, 255)  # Red +0.8%
    img[:, :, 0] = np.clip(img[:, :, 0] * 0.995, 0, 255)  # Blue -0.5%

    # 2. Vignetting (تعتيم طبيعي عند الأطراف)
    kernel_x = cv2.getGaussianKernel(cols, cols * 0.75)
    kernel_y = cv2.getGaussianKernel(rows, rows * 0.75)
    kernel = kernel_y * kernel_x.T
    mask = kernel / kernel.max()
    # تخفيف الـ vignetting (ليكون واقعي وليس مبالغ)
    mask = 0.15 + mask * 0.85
    img = img * mask[:, :, np.newaxis]

    # 3. Chromatic Aberration (زيغ لوني خفيف عند الحواف)
    b, g, r = cv2.split(img.astype(np.uint8))
    M_r = np.float32([[1.0008, 0, -0.4], [0, 1.0008, -0.4]])
    M_b = np.float32([[0.9992, 0, 0.4], [0, 0.9992, 0.4]])
    r = cv2.warpAffine(r, M_r, (cols, rows), borderMode=cv2.BORDER_REFLECT)
    b = cv2.warpAffine(b, M_b, (cols, rows), borderMode=cv2.BORDER_REFLECT)
    img = cv2.merge([b, g, r]).astype(np.float64)

    # 4. Sensor Noise (Shot + Read — واقعي)
    read_noise = np.random.normal(0, 1.0, img.shape)
    img = np.clip(img + read_noise, 0, 255)

    # 5. حفظ بضغط JPEG مشابه لـ Samsung (quality 92)
    cv2.imwrite(filepath, img.astype(np.uint8),
                [cv2.IMWRITE_JPEG_QUALITY, 92])


# ═══════════════════════════════════════════════════════════
# PHASE 4: INJECT SAUDI EXIF
# ═══════════════════════════════════════════════════════════

def phase4_inject_exif(filepath, location_key, lens_type, scene_type):
    """حقن EXIF كامل — Samsung Galaxy S24 Ultra + GPS جدة"""
    loc = JEDDAH_GPS[location_key]
    lat, lon = gps_jitter(loc["lat"], loc["lon"])
    lens = LENS_PROFILES[lens_type]
    scene = SCENE_PROFILES[scene_type]

    dt = random_date()
    date_str = dt.strftime("%Y:%m:%d %H:%M:%S")
    gps_date = dt.strftime("%Y:%m:%d")
    gps_time = dt.strftime("%H:%M:%S")

    iso_val = random.randint(*scene["iso_range"])

    cmd = [
        "exiftool", "-overwrite_original",
        # ─── الكاميرا ───
        f"-Make=samsung",
        f"-Model=SM-S928B",
        f"-Software=S928BXXU4AXL1",
        f"-LensMake=Samsung",
        f"-LensModel=Samsung Galaxy S24 Ultra Rear Camera",
        # ─── العدسة ───
        f"-FocalLength={lens['focal']}",
        f"-FocalLengthIn35mmFormat={lens['focal35']}",
        f"-FNumber={lens['fnum']}",
        f"-ApertureValue={lens['fnum']}",
        f"-MaxApertureValue={lens['fnum']}",
        # ─── التعريض ───
        f"-ISO={iso_val}",
        f"-ExposureTime={scene['speed']}",
        f"-ExposureProgram=Program AE",
        f"-ExposureMode=Auto",
        f"-MeteringMode=Center-weighted average",
        f"-Flash=No Flash",
        f"-WhiteBalance=Auto",
        # ─── المشهد ───
        f"-SceneCaptureType=Standard",
        f"-Contrast=Normal",
        f"-Saturation=Normal",
        f"-Sharpness=Normal",
        f"-DigitalZoomRatio=1",
        # ─── الأبعاد ───
        f"-XResolution=72",
        f"-YResolution=72",
        f"-ResolutionUnit=inches",
        f"-ColorSpace=sRGB",
        # ─── التوقيت ───
        f"-DateTimeOriginal={date_str}",
        f"-CreateDate={date_str}",
        f"-ModifyDate={date_str}",
        f"-OffsetTime=+03:00",
        f"-OffsetTimeOriginal=+03:00",
        f"-OffsetTimeDigitized=+03:00",
        # ─── GPS جدة ───
        f"-GPSLatitude={lat}",
        f"-GPSLatitudeRef=North",
        f"-GPSLongitude={lon}",
        f"-GPSLongitudeRef=East",
        f"-GPSAltitude=18",
        f"-GPSAltitudeRef=Above Sea Level",
        f"-GPSTimeStamp={gps_time}",
        f"-GPSDateStamp={gps_date}",
        f"-GPSProcessingMethod=GPS",
        # ─── معلومات إضافية ───
        f"-Orientation=Horizontal (normal)",
        f"-YCbCrPositioning=Centered",
        f"-ExifVersion=0232",
        f"-FlashpixVersion=0100",
        f"-FileSource=Digital Camera",
        f"-SceneType=Directly photographed",
        f"-SensingMethod=One-chip color area",
        filepath
    ]

    subprocess.run(cmd, capture_output=True)
    return lat, lon, dt


# ═══════════════════════════════════════════════════════════
# PHASE 5: CONVERT TO WEBP
# ═══════════════════════════════════════════════════════════

def phase5_convert_webp(filepath):
    """تحويل إلى WebP مع الحفاظ على الميتاداتا"""
    webp_path = filepath.rsplit('.', 1)[0] + '.webp'
    # تحويل بـ cwebp
    subprocess.run(
        ["cwebp", "-q", "85", "-m", "6", "-metadata", "all",
         filepath, "-o", webp_path],
        capture_output=True
    )
    # نسخ EXIF من المصدر
    subprocess.run(
        ["exiftool", "-TagsFromFile", filepath, "-all:all",
         "-overwrite_original", webp_path],
        capture_output=True
    )
    return webp_path


# ═══════════════════════════════════════════════════════════
# MAIN PIPELINE
# ═══════════════════════════════════════════════════════════

def main():
    print("═" * 60)
    print("  AzelCore.com — AI Fingerprint Removal Pipeline")
    print("═" * 60)

    # جمع كل ملفات JPG الموجودة
    jpg_files = glob.glob(os.path.join(IMAGES_DIR, "*.jpg"))
    if not jpg_files:
        print("❌ لا توجد ملفات JPG في public/images/")
        sys.exit(1)

    print(f"\n📁 وُجدت {len(jpg_files)} صورة JPG")

    # ─── نسخة احتياطية ───
    os.makedirs(BACKUP_DIR, exist_ok=True)
    print(f"\n💾 إنشاء نسخة احتياطية في {BACKUP_DIR}/")
    for f in jpg_files:
        backup_path = os.path.join(BACKUP_DIR, os.path.basename(f))
        if not os.path.exists(backup_path):
            shutil.copy2(f, backup_path)

    # ─── معالجة كل صورة ───
    results = []
    for i, filepath in enumerate(sorted(jpg_files), 1):
        fname = os.path.splitext(os.path.basename(filepath))[0]
        print(f"\n{'─' * 50}")
        print(f"[{i}/{len(jpg_files)}] 🖼  {fname}")

        # البحث عن التكوين
        config = IMAGE_CONFIGS.get(fname)
        if not config:
            print(f"  ⚠️  لا يوجد تكوين — استخدام الافتراضي (workshop/wide/indoor)")
            config = ("workshop", "wide", "indoor")

        location_key, lens_type, scene_type = config

        # Phase 1: Strip
        print("  [1/5] 🗑  تجريد الميتاداتا...")
        phase1_strip(filepath)

        # Phase 2: Break Watermarks
        print("  [2/5] 🔓 كسر العلامات المائية...")
        phase2_break_watermark(filepath)

        # Phase 3: Naturalize
        print("  [3/5] 📷 تطبيع كاميرا (vignetting + noise + CA)...")
        phase3_naturalize(filepath)

        # Phase 4: Inject EXIF
        print("  [4/5] 📍 حقن EXIF سعودي...")
        lat, lon, dt = phase4_inject_exif(filepath, location_key, lens_type, scene_type)

        # Phase 5: Convert to WebP
        print("  [5/5] 🔄 تحويل WebP...")
        webp_path = phase5_convert_webp(filepath)

        results.append({
            "file": fname,
            "location": location_key,
            "gps": f"{lat}, {lon}",
            "date": dt.strftime("%Y-%m-%d %H:%M"),
            "lens": lens_type,
            "webp": os.path.exists(webp_path)
        })
        print(f"  ✅ تم → GPS: {lat}, {lon} | {dt.strftime('%Y-%m-%d %H:%M')} | {lens_type}")

    # ─── تقرير النتائج ───
    print(f"\n{'═' * 60}")
    print(f"  ✅ اكتملت المعالجة — {len(results)} صورة")
    print(f"{'═' * 60}")

    success = sum(1 for r in results if r["webp"])
    failed = len(results) - success
    print(f"  WebP ناجح: {success} | فشل: {failed}")

    # عدد ملفات WebP النهائية
    webp_count = len(glob.glob(os.path.join(IMAGES_DIR, "*.webp")))
    print(f"  إجمالي ملفات WebP: {webp_count}")
    print(f"\n  النسخة الاحتياطية: {BACKUP_DIR}/")


if __name__ == "__main__":
    main()
