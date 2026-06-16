import os
import sys
from PIL import Image
import piexif
from datetime import datetime

def decimal_to_dms(deg, is_lat):
    """Convert decimal degrees to degrees, minutes, seconds for EXIF."""
    negative = deg < 0
    deg = abs(deg)
    d = int(deg)
    md = (deg - d) * 60
    m = int(md)
    sd = (md - m) * 60
    s = int(sd * 100)  # multiply by 100 for denominator representation
    
    # Ref
    if is_lat:
        ref = 'S' if negative else 'N'
    else:
        ref = 'W' if negative else 'E'
        
    return ref, ((d, 1), (m, 1), (s, 100))

def process_image(src_path, dest_path, is_hero=True):
    print(f"Processing {src_path} -> {dest_path}")
    
    # Open image
    img = Image.open(src_path)
    
    # Convert to RGB if PNG/RGBA
    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
        # Create a white background
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')
        
    # Resize
    if is_hero:
        # 1200 x 675 (16:9)
        img = img.resize((1200, 675), Image.Resampling.LANCZOS)
    else:
        # 800 x 533 (approx 3:2)
        img = img.resize((800, 533), Image.Resampling.LANCZOS)
        
    # Prepare clean EXIF
    # Coordinates of Jeddah (e.g. Al-Balad / City Center: 21.4858, 39.1925)
    lat_ref, lat_dms = decimal_to_dms(21.4858, is_lat=True)
    lon_ref, lon_dms = decimal_to_dms(39.1925, is_lat=False)
    
    current_time_str = datetime.now().strftime("%Y:%m:%d %H:%M:%S")
    
    # Define EXIF dict
    zeroth_ifd = {
        piexif.ImageIFD.Make: u"Samsung",
        piexif.ImageIFD.Model: u"SM-S928B",  # Galaxy S24 Ultra international model
        piexif.ImageIFD.Software: u"SM-S928B_14",
        piexif.ImageIFD.DateTime: current_time_str,
    }
    
    exif_ifd = {
        piexif.ExifIFD.DateTimeOriginal: current_time_str,
        piexif.ExifIFD.DateTimeDigitized: current_time_str,
        piexif.ExifIFD.LensModel: u"Galaxy S24 Ultra Rear Camera",
    }
    
    gps_ifd = {
        piexif.GPSIFD.GPSLatitudeRef: lat_ref,
        piexif.GPSIFD.GPSLatitude: lat_dms,
        piexif.GPSIFD.GPSLongitudeRef: lon_ref,
        piexif.GPSIFD.GPSLongitude: lon_dms,
        piexif.GPSIFD.GPSDateStamp: datetime.now().strftime("%Y:%m:%d"),
    }
    
    exif_dict = {"0th": zeroth_ifd, "Exif": exif_ifd, "GPS": gps_ifd}
    exif_bytes = piexif.dump(exif_dict)
    
    # Save as WebP with EXIF and high compression (quality 82)
    # PIL supports saving EXIF in WebP
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    img.save(dest_path, "WEBP", quality=82, exif=exif_bytes)
    print(f"Saved optimized image to {dest_path} with size {os.path.getsize(dest_path)} bytes")

if __name__ == "__main__":
    if len(sys.argv) < 4:
        print("Usage: python3 process_images.py <src_path> <dest_path> <is_hero(true/false)>")
        sys.exit(1)
        
    src = sys.argv[1]
    dest = sys.argv[2]
    is_hero_flag = sys.argv[3].lower() == 'true'
    process_image(src, dest, is_hero_flag)
