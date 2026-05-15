import re
import json

districts_translations = {
    'al-rawdah': {
        'localParagraphEn': "Al-Rawdah is one of the most prestigious neighborhoods in north Jeddah. Its proximity to the Corniche (3 km) raises humidity to 78% and increases salt corrosion. Luxury cars (Lexus, Mercedes, BMW) need double protection from marine salinity that penetrates cheap films within months.",
        'faqs': [
            {'questionEn': 'Does salinity in Al-Rawdah affect window tinting?', 'answerEn': 'Yes, proximity to the sea (3 km) increases salt corrosion. Regular films peel within 8-12 months. Nano Ceramic is salt-resistant and lasts 10+ years with warranty.'},
            {'questionEn': 'How much is it to tint a Lexus ES in Al-Rawdah?', 'answerEn': 'Tinting a Lexus ES with Nano Ceramic starts at 1,400 SAR, including a salt protection layer. Includes a 10-year warranty against peeling and color fading.'},
            {'questionEn': 'Do you offer mobile service for Al-Rawdah?', 'answerEn': 'Yes, we provide mobile tinting for Al-Rawdah and north Jeddah. The technician arrives within 30-45 minutes. Installation is done in a shaded parking or garage.'}
        ],
        'expertTipEn': "For Al-Rawdah residents: Choose a film with an Anti-Salt Corrosion layer — 78% humidity accelerates the corrosion of regular films 3 times faster than inland neighborhoods."
    },
    'al-hamdaniya': {
        'localParagraphEn': "Al-Hamdaniya in east Jeddah is 25 km away from the sea — meaning less salinity but higher heat (42°C). Most residents drive practical cars (Camry, Accent) and need economical tinting solutions with high performance.",
        'faqs': [
            {'questionEn': 'Which film is best for hot Al-Hamdaniya?', 'answerEn': 'Al-Hamdaniya is one of the hottest neighborhoods (42°C). We recommend 3M CR70 — blocks 70% of heat at an affordable price. Carbon films are also a good economical choice.'},
            {'questionEn': 'Does tinting save fuel in Al-Hamdaniya?', 'answerEn': 'Yes, with high heat, the AC works harder. Tinting reduces cabin temperature from 75°C to 42°C = less AC work = 15-20% fuel savings.'},
            {'questionEn': 'What is the tinting price for a Camry in Al-Hamdaniya?', 'answerEn': 'Tinting a Camry with 3M CR70 starts at 900 SAR. Nano Ceramic from 1,200 SAR. All prices include warranty and installation.'}
        ],
        'expertTipEn': "For Al-Hamdaniya residents: Heat is the primary enemy — focus on an IR rejection rate above 90%. Salinity is low so you don't need a salt protection layer."
    },
    'al-safa': {
        'localParagraphEn': "Al-Safa is in the heart of Jeddah, an upscale neighborhood with luxury cars (Range Rover, Porsche, Lexus LX). Humidity is 70% with moderate salt corrosion. Residents seek the highest quality with no compromise — making XPEL PRIME XR Plus the perfect choice.",
        'faqs': [
            {'questionEn': 'Why is XPEL better for Al-Safa cars?', 'answerEn': 'XPEL PRIME XR Plus blocks 98% of IR rays with excellent optical clarity. Ideal for Al-Safa luxury cars that need top performance without altering glass appearance.'},
            {'questionEn': 'Does tinting protect Range Rover leather from cracking?', 'answerEn': 'Nano Ceramic tint blocks 99% of UV rays that cause leather cracking. Without tint, Range Rover leather loses 23% of its elasticity within 6 months in Jeddah sun.'},
            {'questionEn': 'How many days to tint a full Porsche Cayenne?', 'answerEn': 'Tinting a Porsche Cayenne with XPEL PRIME takes only 3-4 hours. We advise not to roll down windows for 48 hours until the adhesive dries completely.'}
        ],
        'expertTipEn': "For Al-Safa residents: Your luxury cars deserve the best protection. XPEL PRIME XR Plus + PPF on the hood = comprehensive protection that maintains resale value."
    },
    'al-naeem': {
        'localParagraphEn': "Al-Naeem in north Jeddah is a family neighborhood with a medium-high economic level. 75% humidity and proximity to the sea (4 km) mean high salinity. LLumar CTX offers the perfect balance between quality and price.",
        'faqs': [
            {'questionEn': 'What is the difference between LLumar and 3M for Al-Naeem?', 'answerEn': 'LLumar CTX excels in salt resistance (important near the sea). 3M Crystalline is better for night visibility. Both are excellent — LLumar is 15-20% cheaper.'},
            {'questionEn': 'Does tinting protect children\'s eyes in the car?', 'answerEn': 'Yes. Nano Ceramic blocks 99% of harmful UV rays. Crucial for Al-Naeem families — Jeddah UV Index reaches 11+ which is dangerous for kids.'},
            {'questionEn': 'How much to tint a Honda Accord in Al-Naeem?', 'answerEn': 'Tinting a Honda Accord with LLumar CTX starts at 1,100 SAR with warranty. Economical choice: Carbon film from 700 SAR.'}
        ],
        'expertTipEn': "For Al-Naeem families: LLumar CTX combines UV protection for kids and sea salt resistance — best value for money in this category."
    },
    'al-marwah': {
        'localParagraphEn': "Al-Marwah in south Jeddah is a popular-to-medium neighborhood with high heat (40°C). Most cars are practical (Hilux, Patrol, Camry). Salt corrosion is moderate (8 km from sea). Carbon films offer excellent protection at an economical price.",
        'faqs': [
            {'questionEn': 'Cheapest good tinting for Al-Marwah cars?', 'answerEn': 'Carbon film at 600-800 SAR provides 60-65% heat protection and 99% UV protection. Excellent choice for practical cars. 5-year warranty.'},
            {'questionEn': 'Does tinting protect a Hilux from Al-Marwah heat?', 'answerEn': 'Tinting lowers cabin temperature from 78°C to 42°C. Very important in Al-Marwah (40°C) — AC cools faster and engine uses less fuel.'},
            {'questionEn': 'Is there a difference between side and front window tinting?', 'answerEn': 'Front windshield needs high transparency (70%+ by law). Sides and rear can be darker (up to 15%). Prices: Front only 300-500 SAR.'}
        ],
        'expertTipEn': "For Al-Marwah residents: Don't pay extra for a salt protection layer — 8 km distance from the sea is enough to reduce the risk. Focus on heat rejection."
    },
    'al-zahra': {
        'localParagraphEn': "Al-Zahra is one of north Jeddah's most luxurious neighborhoods — just 2 km from the sea. Humidity reaches 80% and salt corrosion is very high. Luxury cars (Mercedes GLE, BMW X5, Audi Q7) need XPEL film with extended salt resistance.",
        'faqs': [
            {'questionEn': 'Does salt corrosion reach Al-Zahra cars?', 'answerEn': 'Yes, Al-Zahra is just 2 km from the sea. Salt spray accumulates and corrodes cheap films within 6 months. XPEL is designed for this environment.'},
            {'questionEn': 'Tinting price for a BMW X5 in Al-Zahra?', 'answerEn': 'BMW X5 with XPEL PRIME starts at 1,800 SAR. Includes all glass + sunroof + 10-year warranty against peeling and salinity.'},
            {'questionEn': 'Does tinting affect BMW smart cameras?', 'answerEn': 'No. Nano Ceramic is completely transparent to cameras, radars, and ADAS. We use precise computer cutting to leave camera slots open.'}
        ],
        'expertTipEn': "For Al-Zahra residents: Ask for a Salt Spray Test certificate with the film. XPEL passes 1,000+ hours — cheap films fail after 200 hours."
    },
    'al-khalidiya': {
        'localParagraphEn': "Al-Khalidiya in west Jeddah is the closest to the sea (just 1 km). Highest humidity (85%) and severest salt corrosion. Luxury cars (Lexus LX 600, Land Cruiser, Mercedes G-Class) demand the highest protection available.",
        'faqs': [
            {'questionEn': 'Why is Al-Khalidiya the hardest neighborhood for tinting?', 'answerEn': 'Just 1 km from the sea — 85% humidity and severe salinity. Regular film peels from the edges within 4-6 months. Only Nano Ceramic survives.'},
            {'questionEn': 'Land Cruiser tinting price in Al-Khalidiya?', 'answerEn': 'Nano Ceramic + salt layer starts at 1,600 SAR. XPEL PRIME XR Plus from 2,200 SAR. Both with 10-year warranty.'},
            {'questionEn': 'Do I have to wash the car after rain in Al-Khalidiya?', 'answerEn': 'Absolutely. Jeddah rain carries high salinity — if it dries on the film it causes stains. Wash within 24 hours. Nano Ceramic is easier to clean.'}
        ],
        'expertTipEn': "For Al-Khalidiya residents: You are in the harshest saline environment in Jeddah. Don't compromise on quality — XPEL PRIME + PPF is the minimum acceptable."
    },
    'al-nuzha': {
        'localParagraphEn': "Al-Nuzha in north Jeddah is a quiet family neighborhood. 72% humidity and 6 km from the sea means moderate salt corrosion. 3M Crystalline 70 provides the best night visibility — crucial for residents who commute at night.",
        'faqs': [
            {'questionEn': 'Why is 3M Crystalline better for Al-Nuzha residents?', 'answerEn': 'It allows 70% visible light transmission — clearest night visibility while blocking 97% of heat. Ideal for night driving in Al-Nuzha streets.'},
            {'questionEn': 'Is dark tinting against the law in Al-Nuzha?', 'answerEn': 'Saudi traffic law allows 30% VLT minimum for side windows. Front must be 70%+. We comply 100% and provide a compliance certificate.'},
            {'questionEn': 'Tinting price for Kia K5 in Al-Nuzha?', 'answerEn': 'Kia K5 with 3M Crystalline starts at 1,100 SAR. LLumar CTX from 950 SAR. Both include 7-10 year warranties.'}
        ],
        'expertTipEn': "For Al-Nuzha residents: If you drive a lot at night, choose 3M Crystalline — night visibility is 30% higher than regular dark films."
    },
    'al-shati': {
        'localParagraphEn': "Al-Shati is the most luxurious and closest to the sea (just 500 meters). 88% humidity and maximum salt corrosion. Cars here are exceptional (Rolls Royce, Bentley, Mercedes S-Class). Tinting is a necessity to protect investments exceeding 500,000 SAR.",
        'faqs': [
            {'questionEn': 'How much to tint a Rolls Royce in Al-Shati?', 'answerEn': 'Rolls Royce with XPEL PRIME XR Plus + full PPF starts at 3,500 SAR. Includes precise computer cutting + sunroof + 10-year warranty.'},
            {'questionEn': 'Does 88% humidity destroy tinting?', 'answerEn': '88% humidity + 500m from the sea = harshest environment. Cheap films ruin in 3-4 months. XPEL PRIME is custom-designed for this and lasts 10+ years.'},
            {'questionEn': 'Does tinting affect Bentley smart systems?', 'answerEn': 'No. Nano Ceramic is 100% metal-free — does not affect ADAS, Radar, HUD, NFC or electronics. We use DAP templates for each model.'}
        ],
        'expertTipEn': "For Al-Shati residents: Your car is a massive investment — tinting protects its resale value. Original tinting retains 15-20% extra value."
    },
    'al-ajaweed': {
        'localParagraphEn': "Al-Ajaweed in south Jeddah is furthest from the sea (20 km). Salinity is low but heat is intense (41°C) with Extreme UV. Cars are practical (Hilux, Sunny, Accent) and need economical solutions focused on heat rejection.",
        'faqs': [
            {'questionEn': 'Best economical tint for Al-Ajaweed?', 'answerEn': '3M CR70 blocks 70% of heat starting from 800 SAR for sedans. Excellent choice for high heat (41°C) without a big budget. 7-year warranty.'},
            {'questionEn': 'Do I need a salt protection layer in Al-Ajaweed?', 'answerEn': 'No. Al-Ajaweed is 20 km from the sea and salt corrosion is low. Save the money and invest in higher IR rejection — that\'s what matters here.'},
            {'questionEn': 'Tinting price for Nissan Sunny in Al-Ajaweed?', 'answerEn': 'Carbon film from 550 SAR. 3M CR70 from 750 SAR. Nano Ceramic from 1,000 SAR. All with official warranty.'}
        ],
        'expertTipEn': "For Al-Ajaweed residents: Save money on the salt layer and choose a film with higher IR rejection. The 41°C heat is the real challenge — not salt."
    }
}

with open('src/data/districts-content.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""export interface DistrictFAQ {
  question: string;
  answer: string;
}

export interface DistrictContent {
  /** فقرة وصفية فريدة عن الحي وعلاقته بالتظليل */
  localParagraph: string;
  /** 3 أسئلة FAQ محلية مخصصة */
  faqs: DistrictFAQ[];
  /** نصيحة خبير مخصصة للحي */
  expertTip: string;
}""",
"""export interface DistrictFAQ {
  question: string;
  answer: string;
  questionEn?: string;
  answerEn?: string;
}

export interface DistrictContent {
  /** فقرة وصفية فريدة عن الحي وعلاقته بالتظليل */
  localParagraph: string;
  localParagraphEn?: string;
  /** 3 أسئلة FAQ محلية مخصصة */
  faqs: DistrictFAQ[];
  /** نصيحة خبير مخصصة للحي */
  expertTip: string;
  expertTipEn?: string;
}""")

lines = content.splitlines()
out_lines = []
in_district = False
current_district = None
faq_index = 0

for line in lines:
    stripped = line.strip()
    
    # Detect district start
    match = re.match(r"^'?([a-z-]+)'?:\s*\{", stripped)
    if match and stripped != "faqs: {":
        in_district = True
        current_district = match.group(1)
        faq_index = 0
        out_lines.append(line)
        continue
        
    if in_district and stripped.startswith("localParagraph:"):
        out_lines.append(line)
        out_lines.append(f"    localParagraphEn: `{districts_translations[current_district]['localParagraphEn']}`,")
        continue
        
    if in_district and stripped.startswith("expertTip:"):
        out_lines.append(line)
        out_lines.append(f"    expertTipEn: `{districts_translations[current_district]['expertTipEn']}`,")
        continue
        
    if in_district and stripped.startswith("{ question:"):
        # it's a FAQ line
        out_lines.append(line.replace(" }", f", questionEn: `{districts_translations[current_district]['faqs'][faq_index]['questionEn']}`, answerEn: `{districts_translations[current_district]['faqs'][faq_index]['answerEn']}` }}"))
        faq_index += 1
        continue
        
    out_lines.append(line)

with open('src/data/districts-content.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines) + "\n")
