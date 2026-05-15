import re
import json

cities_translations = {
    'riyadh': {
        'paragraphEn': "Riyadh is the hottest Gulf capital (44°C in summer) with very low humidity (15%). Commercial towers and luxury villas consume massive energy for cooling. Insulating glass facades saves 35-45% on electricity bills.",
        'savingsEstimateEn': "20-story office tower: Save ~450,000 SAR/year | 400m² villa: Save ~12,000 SAR/year",
        'recommendedFilmEn': "Sputtered Multilayer — 82% TSER rejection with high transparency for commercial facades",
        'faqs': [
            {'questionEn': 'How much does insulating a commercial building in Riyadh save?', 'answerEn': 'A 2,400m² glass facade office building in Riyadh saves ~37,500 SAR/month in summer. ROI within 8-11 months.'},
            {'questionEn': 'Is glass insulation enough without wall insulation in Riyadh?', 'answerEn': 'Windows transfer 45-65% of heat. Glass insulation alone reduces cooling load by 35%. With wall insulation, savings reach 55%.'},
            {'questionEn': 'Which film is best for Riyadh\'s dry heat?', 'answerEn': 'Riyadh\'s heat is dry (15% humidity) — no salt resistance needed. Focus on high TSER rejection. Sputtered Multilayer (82% rejection) is the best.'}
        ]
    },
    'dammam': {
        'paragraphEn': "Dammam is a coastal city with high humidity (70%) and massive glass sea-facing facades. Salt corrosion requires resistant films. Commercial complexes on the Corniche achieve the highest return from insulation.",
        'savingsEstimateEn': "Sea-facing commercial complex: Save ~280,000 SAR/year | Sea-facing apartment: Save ~6,000 SAR/year",
        'recommendedFilmEn': "Salt-resistant Nano Ceramic — 75% TSER rejection + marine corrosion protection",
        'faqs': [
            {'questionEn': 'Does Dammam sea salinity affect the insulation film?', 'answerEn': 'Yes. Facades on the Corniche are exposed to direct salt spray. A film with Salt Spray Resistance 1,000+ hours certificate must be used.'},
            {'questionEn': 'How much does it cost to insulate a complex facade in Dammam?', 'answerEn': 'Cost of insulating a 1,000m² glass facade: 50,000-100,000 SAR depending on the film type. ROI within 10-14 months.'},
            {'questionEn': 'Does insulation protect against Dammam humidity?', 'answerEn': 'The film blocks heat and reduces condensation on the inner glass. It reduces mold and moisture problems in coastal buildings by 40%.'}
        ]
    },
    'makkah': {
        'paragraphEn': "Makkah receives millions of pilgrims annually. Hotels and residential towers around the Haram need specialized insulation that balances heat rejection (43°C) and preserves the view.",
        'savingsEstimateEn': "15-story hotel: Save ~380,000 SAR/year | Residential tower: Save ~180,000 SAR/year",
        'recommendedFilmEn': "Transparent Thermal Film (Low-E) — High heat rejection with transparency that preserves the Haram view",
        'faqs': [
            {'questionEn': 'Does insulation affect the Haram view from hotels?', 'answerEn': 'No. Modern Low-E films have 70%+ transparency — blocking heat without altering the view. Ideal for Makkah hotels overlooking the Haram.'},
            {'questionEn': 'How much does insulating a hotel in Makkah save?', 'answerEn': '200-room hotel: Save 30,000+ SAR/month in summer. With high occupancy during Hajj and Umrah seasons, the return doubles.'},
            {'questionEn': 'Is the insulation compliant with Makkah Municipality requirements?', 'answerEn': 'Yes. All our films are compliant with the Saudi Building Code SBC 601 and the Holy Capital Municipality standards for hotel buildings.'}
        ]
    },
    'madinah': {
        'paragraphEn': "Madinah has a dry climate (20% humidity) and 42°C in summer. Hotels around the Prophet's Mosque and commercial complexes benefit the most from thermal insulation.",
        'savingsEstimateEn': "Hotel near the Haram: Save ~250,000 SAR/year | Commercial complex: Save ~120,000 SAR/year",
        'recommendedFilmEn': "Sputtered Multilayer — High performance in dry heat without the need for salt resistance",
        'faqs': [
            {'questionEn': 'Is building insulation in Madinah different from Jeddah?', 'answerEn': 'Yes. Madinah is dry (20% humidity) — no salt-resistant films needed. Focus on heat rejection only = 15-20% cheaper options.'},
            {'questionEn': 'How long does it take to insulate a hotel in Madinah?', 'answerEn': '100-room hotel: 3-5 working days. We work outside peak hours to minimize disturbance. No room evacuation needed.'},
            {'questionEn': 'Do you serve Madinah from Jeddah?', 'answerEn': 'Yes. Our specialized team travels to Madinah for large projects (500m²+). We provide a free thermal assessment + quotation within 48 hours.'}
        ]
    },
    'taif': {
        'paragraphEn': "Taif is the coolest city in the Hijaz (32°C in summer). Villas and tourist resorts benefit from insulation to reduce cooling in summer and heating in winter — dual-direction insulation.",
        'savingsEstimateEn': "350m² villa: Save ~5,500 SAR/year | Tourist resort: Save ~90,000 SAR/year",
        'recommendedFilmEn': "Dual-Reflective Film — Rejects heat in summer and retains warmth in winter",
        'faqs': [
            {'questionEn': 'Is insulation useful in Taif despite its cool weather?', 'answerEn': 'Very. Insulation works both ways — blocking summer heat and preventing winter warmth from escaping. Year-round savings.'},
            {'questionEn': 'Which film is suitable for Taif resorts?', 'answerEn': 'Dual-Reflective Film — Reflective from the outside (blocks sun) and transparent from the inside (maintains the natural view). Ideal for resorts.'},
            {'questionEn': 'Do you serve Taif?', 'answerEn': 'Yes. Taif is within our service area. The installation team arrives within one working day from Jeddah.'}
        ]
    },
    'tabuk': {
        'paragraphEn': "Tabuk has a desert climate (38°C in summer) and nearby NEOM projects. New government and residential buildings need insulation compliant with modern building standards.",
        'savingsEstimateEn': "Government building: Save ~85,000 SAR/year | Residential complex: Save ~45,000 SAR/year",
        'recommendedFilmEn': "Nano Ceramic — Balanced performance for dry desert climate",
        'faqs': [
            {'questionEn': 'Do you serve NEOM and Tabuk projects?', 'answerEn': 'Yes. We serve Tabuk and surrounding areas including NEOM projects. Specialized team for large projects.'},
            {'questionEn': 'How much does it cost to insulate a government building in Tabuk?', 'answerEn': 'Starts from 45 SAR/m² for Carbon film and 120 SAR/m² for Nano Ceramic. We provide free assessment and quotation.'},
            {'questionEn': 'Can the insulation withstand Tabuk sandstorms?', 'answerEn': 'Yes. Modern films are Scratch-Resistant. They are not affected by normal sand or dust.'}
        ]
    },
    'abha': {
        'paragraphEn': "Abha is the coolest city in the Kingdom (28°C in summer) with moderate humidity (45%). Tourist villas and mountain resorts benefit from dual-direction insulation.",
        'savingsEstimateEn': "Tourist villa: Save ~4,000 SAR/year | Resort: Save ~60,000 SAR/year",
        'recommendedFilmEn': "Dual Low-E Film — Protection from winter cold and summer heat",
        'faqs': [
            {'questionEn': 'Does Abha need thermal insulation?', 'answerEn': 'Yes. Despite the mild summer, winter is cold (5°C at night). Insulation retains warmth inside the building = massive heating savings.'},
            {'questionEn': 'Which film suits Abha mountain climate?', 'answerEn': 'Low-E Film — Reflects internal heat in winter and blocks sun in summer. Excellent performance in fluctuating climates.'},
            {'questionEn': 'Do you reach Abha from Jeddah?', 'answerEn': 'Yes. Our team serves Abha for 300m²+ projects. Free assessment and installation within 2-3 days.'}
        ]
    },
    'khobar': {
        'paragraphEn': "Khobar is an eastern coastal city with high humidity (65%). Sea-facing towers and commercial complexes on the Corniche need salt and moisture resistant films.",
        'savingsEstimateEn': "Sea-facing tower: Save ~320,000 SAR/year | Commercial complex: Save ~150,000 SAR/year",
        'recommendedFilmEn': "Salt-resistant Nano Ceramic — Like Dammam but with a focus on sea-facing facades",
        'faqs': [
            {'questionEn': 'Are insulation services available in Khobar?', 'answerEn': 'Yes. We serve Khobar, Dammam, and Dhahran. A specialized team in the Eastern Province for commercial and residential projects.'},
            {'questionEn': 'How much does insulating a sea-facing residential tower in Khobar save?', 'answerEn': '15-story sea-facing tower: Save ~26,000 SAR/month in summer. Cost recovery within 12-16 months.'},
            {'questionEn': 'Does the film protect from sun reflection on the sea?', 'answerEn': 'Yes. Anti-Glare films reduce sun reflection on the sea by 60%. Greater comfort for residents.'}
        ]
    },
    'jubail': {
        'paragraphEn': "Jubail is an industrial city with residential and industrial buildings. 60% humidity and proximity to industrial facilities require durable chemical-resistant films.",
        'savingsEstimateEn': "Industrial building: Save ~180,000 SAR/year | Residential complex: Save ~70,000 SAR/year",
        'recommendedFilmEn': "Durable Industrial Film (Safety + Thermal) — Thermal protection + shatter safety",
        'faqs': [
            {'questionEn': 'Can the films withstand the industrial environment in Jubail?', 'answerEn': 'Yes. We provide Safety Films with 200+ microns thickness — resistant to chemicals and high heat. Suitable for factories and facilities.'},
            {'questionEn': 'Does insulation reduce the risk of glass explosion in factories?', 'answerEn': 'Yes. Safety Film retains glass shards upon breaking — protecting workers from injuries. An OSHA requirement for industrial facilities.'},
            {'questionEn': 'How much does insulating a warehouse in Jubail cost?', 'answerEn': '5,000m² warehouse: 250,000-400,000 SAR depending on film type. ROI within 18-24 months with warehouse cooling savings.'}
        ]
    },
    'yanbu': {
        'paragraphEn': "Yanbu is a western industrial port with high humidity (70%). Residential and industrial buildings need protection from heat and marine salinity.",
        'savingsEstimateEn': "Residential building: Save ~50,000 SAR/year | Industrial facility: Save ~120,000 SAR/year",
        'recommendedFilmEn': "Salt-resistant Nano Ceramic + Safety layer",
        'faqs': [
            {'questionEn': 'Do you serve Yanbu?', 'answerEn': 'Yes. Yanbu is within our western service area. The team arrives within one working day.'},
            {'questionEn': 'Which film suits Yanbu humidity?', 'answerEn': 'Salt-resistant Nano Ceramic — withstands 70% humidity and sea spray. 10-15 year warranty.'},
            {'questionEn': 'How much does insulation save in Yanbu?', 'answerEn': 'Average residential building: Save 30-40% on summer electricity bills. Cost recovery within a year.'}
        ]
    },
    'najran': {
        'paragraphEn': "Najran has a mild desert climate (36°C) and low humidity (20%). Residential buildings benefit from economical low-cost insulation.",
        'savingsEstimateEn': "Villa: Save ~5,000 SAR/year | Residential building: Save ~25,000 SAR/year",
        'recommendedFilmEn': "Economical Carbon Film — 60% TSER rejection at an affordable price",
        'faqs': [
            {'questionEn': 'Is insulation economically viable in Najran?', 'answerEn': 'Yes. Despite the mild climate, the summer cooling bill is high. Insulating 10 windows for 3,000 SAR saves 5,000+ SAR/year.'},
            {'questionEn': 'Do you serve Najran?', 'answerEn': 'We serve Najran for 500m²+ projects. Free remote assessment + site visit for large projects.'},
            {'questionEn': 'Which film is cheaper for Najran?', 'answerEn': 'Carbon film — 45 SAR/m² with a 5-year warranty. Good performance in mild dry climates.'}
        ]
    },
    'jazan': {
        'paragraphEn': "Jazan is the most humid city in the Kingdom (75%) with moderate heat (35°C). Buildings need insulation focused on moisture and condensation resistance.",
        'savingsEstimateEn': "Commercial building: Save ~65,000 SAR/year | House: Save ~4,500 SAR/year",
        'recommendedFilmEn': "Anti-condensation Nano Ceramic — Reduces internal moisture problems",
        'faqs': [
            {'questionEn': 'Does insulation reduce condensation in Jazan buildings?', 'answerEn': 'Yes. Insulation film raises the internal glass surface temperature — reducing condensation by 40-50%. Solves mold and moisture issues.'},
            {'questionEn': 'Do you serve Jazan?', 'answerEn': 'Yes. We serve Jazan for commercial and government projects. A team specialized in high-humidity areas.'},
            {'questionEn': 'How much does insulating a house in Jazan cost?', 'answerEn': '8-window house: 2,500-4,000 SAR depending on film type. Annual savings: 4,500+ SAR.'}
        ]
    },
    'hail': {
        'paragraphEn': "Hail has a continental desert climate — hot in summer (37°C) and cold in winter. Dual insulation provides year-round savings.",
        'savingsEstimateEn': "Villa: Save ~5,500 SAR/year | Building: Save ~30,000 SAR/year",
        'recommendedFilmEn': "Low-E Film — Dual-direction insulation for continental climate",
        'faqs': [
            {'questionEn': 'Is insulation useful in Hail cold?', 'answerEn': 'Very. Low-E Film retains 25% extra heat inside the building in winter. Noticeable heating savings during cold Hail nights.'},
            {'questionEn': 'Do you serve Hail?', 'answerEn': 'We serve Hail for large projects (500m²+). Free assessment + quotation within 72 hours.'},
            {'questionEn': 'How much does insulation save annually in Hail?', 'answerEn': 'Average villa: 5,500 SAR/year (summer + winter). A continental climate means dual savings on cooling and heating.'}
        ]
    },
    'qassim': {
        'paragraphEn': "Qassim has severe heat (42°C) and very low humidity (15%). Agricultural and residential buildings need insulation focused on heat rejection.",
        'savingsEstimateEn': "Warehouse farm: Save ~40,000 SAR/year | Villa: Save ~7,000 SAR/year",
        'recommendedFilmEn': "Sputtered Multilayer — Highest heat rejection for dry desert climate",
        'faqs': [
            {'questionEn': 'Does insulation protect agricultural warehouses in Qassim?', 'answerEn': 'Yes. Insulating dates and crops warehouses maintains a stable temperature — reducing waste and saving warehouse cooling.'},
            {'questionEn': 'Do you serve Qassim?', 'answerEn': 'Yes. We serve Buraidah, Unaizah, and surrounding areas. Specialists in agricultural and commercial buildings.'},
            {'questionEn': 'Which film withstands Qassim heat?', 'answerEn': 'Sputtered Multilayer withstands 60°C+ without degradation. Designed for harsh desert environments. 15-year warranty.'}
        ]
    },
    'al-ahsa': {
        'paragraphEn': "Al-Ahsa has a hot climate and moderate humidity (40%). Heritage buildings and modern residential units need insulation solutions that preserve the architectural character.",
        'savingsEstimateEn': "Heritage building: Save ~20,000 SAR/year | Modern villa: Save ~6,000 SAR/year",
        'recommendedFilmEn': "Transparent Thermal Film — Preserves heritage building appearance with thermal protection",
        'faqs': [
            {'questionEn': 'Can heritage buildings be insulated in Al-Ahsa?', 'answerEn': 'Yes. 80%+ transparent films do not change the building appearance. Compliant with Heritage Commission requirements for historical buildings.'},
            {'questionEn': 'Do you serve Al-Ahsa?', 'answerEn': 'Yes. We serve Al-Ahsa and Hofuf. A team specialized in heritage and residential buildings.'},
            {'questionEn': 'How much does insulation save in Al-Ahsa?', 'answerEn': 'Modern villa: Save 25-35% on electricity bills. Heritage building: 20% savings while preserving original appearance.'}
        ]
    }
}

with open('src/data/cities-content.ts', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
"""export interface CityContent {
  paragraph: string;
  savingsEstimate: string;
  recommendedFilm: string;
  faqs: { question: string; answer: string }[];
}""",
"""export interface CityContent {
  paragraph: string;
  paragraphEn?: string;
  savingsEstimate: string;
  savingsEstimateEn?: string;
  recommendedFilm: string;
  recommendedFilmEn?: string;
  faqs: { question: string; answer: string; questionEn?: string; answerEn?: string }[];
}""")

lines = content.splitlines()
out_lines = []
in_city = False
current_city = None
faq_index = 0

for line in lines:
    stripped = line.strip()
    
    # Detect city start
    match = re.match(r"^'?([a-z-]+)'?:\s*\{", stripped)
    if match and stripped != "faqs: {":
        in_city = True
        current_city = match.group(1)
        faq_index = 0
        out_lines.append(line)
        continue
        
    if in_city and stripped.startswith("paragraph:"):
        out_lines.append(line)
        out_lines.append(f"    paragraphEn: `{cities_translations[current_city]['paragraphEn']}`,")
        continue
        
    if in_city and stripped.startswith("savingsEstimate:"):
        out_lines.append(line)
        out_lines.append(f"    savingsEstimateEn: `{cities_translations[current_city]['savingsEstimateEn']}`,")
        continue
        
    if in_city and stripped.startswith("recommendedFilm:"):
        out_lines.append(line)
        out_lines.append(f"    recommendedFilmEn: `{cities_translations[current_city]['recommendedFilmEn']}`,")
        continue
        
    if in_city and stripped.startswith("{ question:"):
        # it's a FAQ line
        # parse it or just append the EN versions since we track index
        out_lines.append(line.replace(" }", f", questionEn: `{cities_translations[current_city]['faqs'][faq_index]['questionEn']}`, answerEn: `{cities_translations[current_city]['faqs'][faq_index]['answerEn']}` }}"))
        faq_index += 1
        continue
        
    out_lines.append(line)

with open('src/data/cities-content.ts', 'w', encoding='utf-8') as f:
    f.write("\n".join(out_lines) + "\n")
