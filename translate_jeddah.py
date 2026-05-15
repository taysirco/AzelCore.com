import os

file_path = 'src/data/local-jeddah.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add recommendationEn and popularCarsEn to interface
if 'recommendationEn: string;' not in content:
    content = content.replace('recommendation: string;', 'recommendation: string;\n  recommendationEn: string;')
if 'popularCarsEn: string[];' not in content:
    content = content.replace('popularCars: string[];', 'popularCars: string[];\n  popularCarsEn: string[];')

# Define translations
translations = {
    '"نانو سيراميك + طبقة حماية ملحية — الرطوبة العالية تتطلب فيلم مقاوم للتآكل"': '"نانو سيراميك + طبقة حماية ملحية — الرطوبة العالية تتطلب فيلم مقاوم للتآكل",\n    recommendationEn: "Nano-Ceramic + Salt Protection Layer — High humidity requires corrosion-resistant film"',
    'popularCars: ["لكزس ES", "مرسيدس S-Class", "BMW 7 Series"]': 'popularCars: ["لكزس ES", "مرسيدس S-Class", "BMW 7 Series"],\n    popularCarsEn: ["Lexus ES", "Mercedes S-Class", "BMW 7 Series"]',
    
    '"فيلم 3M CR70 + تظليل 28% — الحرارة أعلى لكن الملوحة أقل"': '"فيلم 3M CR70 + تظليل 28% — الحرارة أعلى لكن الملوحة أقل",\n    recommendationEn: "3M CR70 Film + 28% Tint — Heat is higher but salinity is lower"',
    'popularCars: ["تويوتا كامري", "هيونداي أكسنت", "كيا K5"]': 'popularCars: ["تويوتا كامري", "هيونداي أكسنت", "كيا K5"],\n    popularCarsEn: ["Toyota Camry", "Hyundai Accent", "Kia K5"]',
    
    '"XPEL PRIME XR Plus — أعلى حجب IR مع وضوح تام للرؤية"': '"XPEL PRIME XR Plus — أعلى حجب IR مع وضوح تام للرؤية",\n    recommendationEn: "XPEL PRIME XR Plus — Highest IR rejection with absolute clarity"',
    'popularCars: ["رنج روفر", "بورشه كايين", "لكزس LX"]': 'popularCars: ["رنج روفر", "بورشه كايين", "لكزس LX"],\n    popularCarsEn: ["Range Rover", "Porsche Cayenne", "Lexus LX"]',
    
    '"Johnson Supreme IR — حماية قصوى للعوائل في الزحام"': '"Johnson Supreme IR — حماية قصوى للعوائل في الزحام",\n    recommendationEn: "Johnson Supreme IR — Maximum protection for families in traffic"',
    'popularCars: ["هوندا أكورد", "تويوتا لاندكروزر", "نيسان باترول"]': 'popularCars: ["هوندا أكورد", "تويوتا لاندكروزر", "نيسان باترول"],\n    popularCarsEn: ["Honda Accord", "Toyota Land Cruiser", "Nissan Patrol"]',
    
    '"تظليل كربوني متقدم — ميزانية ممتازة وحماية تدوم"': '"تظليل كربوني متقدم — ميزانية ممتازة وحماية تدوم",\n    recommendationEn: "Advanced Carbon Tint — Excellent budget and lasting protection"',
    'popularCars: ["هيونداي إلنترا", "تويوتا يارس", "نيسان صني"]': 'popularCars: ["هيونداي إلنترا", "تويوتا يارس", "نيسان صني"],\n    popularCarsEn: ["Hyundai Elantra", "Toyota Yaris", "Nissan Sunny"]',
    
    '"فيلم غير معدني 100% — لتجنب تداخل إشارات 5G للمحلات والشركات"': '"فيلم غير معدني 100% — لتجنب تداخل إشارات 5G للمحلات والشركات",\n    recommendationEn: "100% Non-Metallic Film — To avoid 5G signal interference for shops and businesses"',
    'popularCars: ["أودي A8", "لكزس LS", "جينيسيس G90"]': 'popularCars: ["أودي A8", "لكزس LS", "جينيسيس G90"],\n    popularCarsEn: ["Audi A8", "Lexus LS", "Genesis G90"]',
    
    '"طبقة حماية PPF أمامي + نانو سيراميك — حماية من حصى الطريق السريع"': '"طبقة حماية PPF أمامي + نانو سيراميك — حماية من حصى الطريق السريع",\n    recommendationEn: "Front PPF Protection Layer + Nano-Ceramic — Protection from highway gravel"',
    'popularCars: ["شيفروليه تاهو", "فورد إكسبيديشن", "جي إم سي يوكن"]': 'popularCars: ["شيفروليه تاهو", "فورد إكسبيديشن", "جي إم سي يوكن"],\n    popularCarsEn: ["Chevrolet Tahoe", "Ford Expedition", "GMC Yukon"]',
    
    '"تظليل بخصوصية 35% للخلف — للأمان والهدوء السكني"': '"تظليل بخصوصية 35% للخلف — للأمان والهدوء السكني",\n    recommendationEn: "Tint with 35% rear privacy — For security and residential peace"',
    'popularCars: ["تويوتا راف 4", "كيا سبورتاج", "مازدا CX-5"]': 'popularCars: ["تويوتا راف 4", "كيا سبورتاج", "مازدا CX-5"],\n    popularCarsEn: ["Toyota RAV4", "Kia Sportage", "Mazda CX-5"]',
    
    '"حماية اقتصادية بطبقة سيراميك خفيفة للمناطق الشعبية"': '"حماية اقتصادية بطبقة سيراميك خفيفة للمناطق الشعبية",\n    recommendationEn: "Economical protection with a light ceramic layer for populated areas"',
    'popularCars: ["تويوتا كورولا", "إيسوزو دي ماكس", "هيونداي H1"]': 'popularCars: ["تويوتا كورولا", "إيسوزو دي ماكس", "هيونداي H1"],\n    popularCarsEn: ["Toyota Corolla", "Isuzu D-Max", "Hyundai H1"]',
    
    '"أعلى درجة حماية من الأملاح البحرية — ضرورة مطلقة للسيارات الفارهة"': '"أعلى درجة حماية من الأملاح البحرية — ضرورة مطلقة للسيارات الفارهة",\n    recommendationEn: "Highest level of marine salt protection — An absolute necessity for luxury cars"',
    'popularCars: ["بنتلي بينتايجا", "مرسيدس G-Class", "رنج روفر اوتوبيوغرافي"]': 'popularCars: ["بنتلي بينتايجا", "مرسيدس G-Class", "رنج روفر اوتوبيوغرافي"],\n    popularCarsEn: ["Bentley Bentayga", "Mercedes G-Class", "Range Rover Autobiography"]'
}

for ar_str, eng_repl in translations.items():
    content = content.replace(ar_str, eng_repl)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
