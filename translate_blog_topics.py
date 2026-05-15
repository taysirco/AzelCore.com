import re
import json

topics_translations = {
    'tint-laws-saudi-2026': {
        'titleEn': "Saudi Car Tinting Laws 2026 — The Complete Guide",
    },
    'nano-ceramic-vs-carbon-vs-3m': {
        'titleEn': "Nano Ceramic vs Carbon vs 3M — Comprehensive Numbers Comparison",
    },
    'best-car-tint-jeddah-2026': {
        'titleEn': "Best Car Tinting Shop in Jeddah 2026 — Selection Guide",
    },
    'building-insulation-electricity-savings': {
        'titleEn': "How Much Does Building Glass Insulation Save on Electricity? — Real Calculations",
    },
    'how-to-spot-fake-tint': {
        'titleEn': "5 Signs to Spot Fake Tint from Original",
    },
    'ppf-vs-ceramic-coating': {
        'titleEn': "PPF vs Nano Ceramic Coating — Which Do You Need?",
    },
    'jeddah-heat-car-damage': {
        'titleEn': "What Does Jeddah Sun Do to Your Car? — 7 Unknown Damages",
    },
    'tint-signal-interference': {
        'titleEn': "Does Tint Affect Mobile and GPS Signals? — The Technical Truth",
    },
    'vision-2030-energy-efficiency': {
        'titleEn': "Vision 2030 and Energy Efficiency — The Role of Building Insulation",
    },
    'car-tint-maintenance-guide': {
        'titleEn': "Car Tint Maintenance Guide — 10 Tips to Extend Film Life",
    }
}

with open('src/data/blog-topics.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""export interface BlogTopic {
  slug: string;
  titleAr: string;
  targetKeyword: string;
  intent: "informational" | "comparison" | "how-to" | "legal";
  linksToServices: string[];
  outline: string[];
  priority: 1 | 2 | 3;
}""",
"""export interface BlogTopic {
  slug: string;
  titleAr: string;
  titleEn?: string;
  targetKeyword: string;
  intent: "informational" | "comparison" | "how-to" | "legal";
  linksToServices: string[];
  outline: string[];
  priority: 1 | 2 | 3;
}""")

lines = content.splitlines()
out_lines = []
in_topic = False
current_slug = None

for line in lines:
    stripped = line.strip()
    
    match = re.match(r'slug:\s*"([^"]+)"', stripped)
    if match:
        current_slug = match.group(1)
        
    out_lines.append(line)
        
    if stripped.startswith('titleAr:') and current_slug:
        out_lines.append(f'    titleEn: "{topics_translations[current_slug]["titleEn"]}",')

with open('src/data/blog-topics.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines) + "\n")
