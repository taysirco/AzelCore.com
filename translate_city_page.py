import re

file_path = 'src/app/[locale]/(national-ksa)/building-glass-insulation/[city]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define `isAr` in the function components
if "const { locale, city } = await params;" in content:
    content = content.replace(
        "const { locale, city } = await params;",
        "const { locale, city } = await params;\n  const isAr = locale === 'ar';"
    )

if "function buildCitySchema(c: typeof ksaCities[0], content: any)" in content:
    content = content.replace(
        "function buildCitySchema(c: typeof ksaCities[0], content: any)",
        "function buildCitySchema(c: typeof ksaCities[0], content: any, isAr: boolean)"
    )

content = content.replace("buildCitySchema(cityObj, content)", "buildCitySchema(cityObj, content, isAr)")

# Check if there's an error with duplicate `isAr` definition if I run it twice. The if statement prevents it if I replace the exact line, but since I am adding it I'll just write it correctly.
# And let's translate hardcoded strings:
replacements = {
    "`عزل زجاج مباني ${c.nameAr} — توفير الكهرباء`": "isAr ? `عزل زجاج مباني ${c.nameAr} — توفير الكهرباء` : `Building Glass Insulation in ${c.nameEn} — Energy Savings`",
    "`عزل واجهات زجاجية في ${c.nameAr}. رطوبة ${c.humidity}، حرارة ${c.avgTemp}. توفير حتى 45% من الكهرباء. ${content.recommendedFilm.split('—')[0].trim()}`": "isAr ? `عزل واجهات زجاجية في ${c.nameAr}. رطوبة ${c.humidity}، حرارة ${c.avgTemp}. توفير حتى 45% من الكهرباء. ${content.recommendedFilm.split('—')[0].trim()}` : `Glass facade insulation in ${c.nameEn}. Humidity ${c.humidity}, Heat ${c.avgTemp}. Save up to 45% on electricity. ${content.recommendedFilmEn.split('—')[0].trim()}`",
    "`عزل واجهات مباني ${c.nameAr}`": "isAr ? `عزل واجهات مباني ${c.nameAr}` : `Building Facade Insulation in ${c.nameEn}`",
    "`حلول عزل مباني مخصصة لـ ${c.nameAr}`": "isAr ? `حلول عزل مباني مخصصة لـ ${c.nameAr}` : `Custom building insulation solutions for ${c.nameEn}`",
    "encodeURIComponent(`عزل زجاج مباني ${c.nameAr}`)": "encodeURIComponent(isAr ? `عزل زجاج مباني ${c.nameAr}` : `Building Glass Insulation ${c.nameEn}`)",
    "encodeURIComponent(`توفير 45% كهرباء — ${c.avgTemp}`)": "encodeURIComponent(isAr ? `توفير 45% كهرباء — ${c.avgTemp}` : `Save 45% Electricity — ${c.avgTemp}`)",
    "`عزل كور — فرع ${c.nameAr}`": "isAr ? `عزل كور — فرع ${c.nameAr}` : `AzelCore — ${c.nameEn} Branch`",
    "`عزل حراري احترافي لزجاج المباني والواجهات في ${c.nameAr}.`": "isAr ? `عزل حراري احترافي لزجاج المباني والواجهات في ${c.nameAr}.` : `Professional thermal insulation for building glass and facades in ${c.nameEn}.`",
    "`${c.nameAr}، السعودية`": "isAr ? `${c.nameAr}، السعودية` : `${c.nameEn}, Saudi Arabia`",
    "`عزل حراري — ${c.nameAr}`": "isAr ? `عزل حراري — ${c.nameAr}` : `Thermal Insulation — ${c.nameEn}`",
    "'عزل زجاج المباني'": "isAr ? 'عزل زجاج المباني' : 'Building Glass Insulation'",
    "name: 'الرئيسية'": "name: isAr ? 'الرئيسية' : 'Home'",
    "name: 'عزل المباني'": "name: isAr ? 'عزل المباني' : 'Building Insulation'",
    "name: `عزل مباني ${cityObj.nameAr}`": "name: isAr ? `عزل مباني ${cityObj.nameAr}` : `Building Insulation in ${cityObj.nameEn}`",
    "الرئيسية</Link> / <Link href=\"/building-glass-insulation\">عزل المباني</Link> / <span>{cityObj.nameAr}</span>": "{isAr ? 'الرئيسية' : 'Home'}</Link> / <Link href=\"/building-glass-insulation\">{isAr ? 'عزل المباني' : 'Building Insulation'}</Link> / <span>{isAr ? cityObj.nameAr : cityObj.nameEn}</span>",
    "عزل زجاج المباني في <span className={styles.greenGradient}>{cityObj.nameAr}</span>": "{isAr ? 'عزل زجاج المباني في ' : 'Building Glass Insulation in '}<span className={styles.greenGradient}>{isAr ? cityObj.nameAr : cityObj.nameEn}</span>",
    "حلول متوافقة مع مناخ {cityObj.nameAr} (رطوبة {cityObj.humidity}، حرارة تصل {cityObj.avgTemp})": "{isAr ? `حلول متوافقة مع مناخ ${cityObj.nameAr} (رطوبة ${cityObj.humidity}، حرارة تصل ${cityObj.avgTemp})` : `Solutions compatible with ${cityObj.nameEn} climate (Humidity ${cityObj.humidity}, Heat up to ${cityObj.avgTemp})`}",
    "حجز معاينة في {cityObj.nameAr}": "{isAr ? `حجز معاينة في ${cityObj.nameAr}` : `Book an inspection in ${cityObj.nameEn}`}",
    "خبراء العزل في {cityObj.nameAr}": "{isAr ? `خبراء العزل في ${cityObj.nameAr}` : `Insulation Experts in ${cityObj.nameEn}`}",
    "لماذا العزل الحراري ضروري في {cityObj.nameAr}؟": "{isAr ? `لماذا العزل الحراري ضروري في ${cityObj.nameAr}؟` : `Why is thermal insulation essential in ${cityObj.nameEn}?`}",
    "التحدي:": "{isAr ? 'التحدي:' : 'The Challenge:'}",
    "العائد المتوقع:": "{isAr ? 'العائد المتوقع:' : 'Expected Return:'}",
    "الفيلم الموصى به:": "{isAr ? 'الفيلم الموصى به:' : 'Recommended Film:'}",
    "أسئلة ملاك المباني في {cityObj.nameAr}": "{isAr ? `أسئلة ملاك المباني في ${cityObj.nameAr}` : `Questions from Building Owners in ${cityObj.nameEn}`}",
    "أسئلة شائعة حول عزل المباني في {cityObj.nameAr}": "{isAr ? `أسئلة شائعة حول عزل المباني في ${cityObj.nameAr}` : `FAQs about Building Insulation in ${cityObj.nameEn}`}",
    "عندك مبنى في <span className={styles.greenGradient}>{cityObj.nameAr}</span>؟": "{isAr ? 'عندك مبنى في ' : 'Do you own a building in '}<span className={styles.greenGradient}>{isAr ? cityObj.nameAr : cityObj.nameEn}</span>؟",
    "احصل على فحص مجاني للواجهات + دراسة جدوى لتوفير الكهرباء": "{isAr ? 'احصل على فحص مجاني للواجهات + دراسة جدوى لتوفير الكهرباء' : 'Get a free facade inspection + an electricity savings feasibility study'}",
    "احجز فحص مجاني": "{isAr ? 'احجز فحص مجاني' : 'Book a Free Inspection'}",
    "اتصل الآن:": "{isAr ? 'اتصل الآن:' : 'Call Now:'}",
    "isAr ? content.recommendedFilm : content.recommendedFilmEn": "isAr ? content.recommendedFilm : content.recommendedFilmEn",
    "{content.recommendedFilm}": "{isAr ? content.recommendedFilm : content.recommendedFilmEn}",
    "cities-content" : "cities-content" # just to end the array nicely
}

for k, v in replacements.items():
    content = content.replace(k, v)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("city page translated")
