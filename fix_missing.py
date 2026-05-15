import re

file_path = 'src/data/local-jeddah.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add recommendationEn and popularCarsEn where missing in the dictionary objects
# We can use regex or just loop through. Actually there are 15 districts, I'll just provide a quick regex fix.
# Better to find all occurrences of `popularCars: \[.*?\],` and if they don't have popularCarsEn, add it.

def fix_missing(match):
    text = match.group(0)
    if "recommendationEn" not in text:
        text = text.replace("recommendation:", "recommendationEn: 'Nano Ceramic — Blocks 90% Heat',\n    recommendation:")
    if "popularCarsEn" not in text:
        text = text.replace("popularCars:", "popularCarsEn: ['Toyota Camry', 'Hyundai Accent', 'Honda Accord'],\n    popularCars:")
    return text

# Match each object { ... } in the ksaCities array
# Wait, this is for jeddahDistricts
content = re.sub(r'\{\s*id: "al-.*?popularCars: \[.*?\]\s*,?\s*\}', fix_missing, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("local-jeddah.ts fixed")
