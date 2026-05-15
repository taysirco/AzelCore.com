import os
import re

file_path = 'src/app/[locale]/(local-jeddah)/car-insulation-jeddah/[district]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the `isAr` undefined error
if "const isAr = locale === 'ar';" not in content:
    content = content.replace(
        "const { locale, district } = await params;",
        "const { locale, district } = await params;\n  const isAr = locale === 'ar';"
    )

# Now, translate hardcoded Arabic strings
replacements = {
    "`تظليل سيارات ${d.nameAr} جدة — نانو سيراميك`": "isAr ? `تظليل سيارات ${d.nameAr} جدة — نانو سيراميك` : `Car Tinting in ${d.nameEn} Jeddah — Nano Ceramic`",
    "`أفضل تظليل سيارات في ${d.nameAr} بجدة. رطوبة ${d.humidity}، أشعة UV ${d.uvIndex}. نوصي بـ ${d.recommendation.split('—')[0].trim()}. وكيل جونسون و 3M المعتمد.`": "isAr ? `أفضل تظليل سيارات في ${d.nameAr} بجدة. رطوبة ${d.humidity}، أشعة UV ${d.uvIndex}. نوصي بـ ${d.recommendation.split('—')[0].trim()}. وكيل جونسون و 3M المعتمد.` : `Best car tinting in ${d.nameEn} Jeddah. Humidity ${d.humidity}, UV ${d.uvIndex}. We recommend ${d.recommendationEn.split('—')[0].trim()}. Authorized Johnson & 3M Dealer.`",
    "`تظليل سيارات ${d.nameAr} — جدة`": "isAr ? `تظليل سيارات ${d.nameAr} — جدة` : `Car Tinting ${d.nameEn} — Jeddah`",
    "`حلول تظليل مخصصة لـ ${d.nameAr} حسب المناخ المحلي`": "isAr ? `حلول تظليل مخصصة لـ ${d.nameAr} حسب المناخ المحلي` : `Custom tinting solutions for ${d.nameEn} based on local climate`",
    "`عزل كور — تظليل سيارات ${d.nameAr}`": "isAr ? `عزل كور — تظليل سيارات ${d.nameAr}` : `AzelCore — Car Tinting in ${d.nameEn}`",
    "`تظليل سيارات احترافي في ${d.nameAr} بجدة. رطوبة ${d.humidity} و UV ${d.uvIndex} تتطلب ${d.recommendation.split('—')[0].trim()}.`": "isAr ? `تظليل سيارات احترافي في ${d.nameAr} بجدة. رطوبة ${d.humidity} و UV ${d.uvIndex} تتطلب ${d.recommendation.split('—')[0].trim()}.` : `Professional car tinting in ${d.nameEn} Jeddah. Humidity ${d.humidity} and UV ${d.uvIndex} require ${d.recommendationEn.split('—')[0].trim()}.`",
    "`${d.nameAr}، جدة`": "isAr ? `${d.nameAr}، جدة` : `${d.nameEn}, Jeddah`",
    "'جدة'": "isAr ? 'جدة' : 'Jeddah'",
    "`تظليل نانو سيراميك — ${d.nameAr}`": "isAr ? `تظليل نانو سيراميك — ${d.nameAr}` : `Nano Ceramic Tinting — ${d.nameEn}`",
    "'تظليل سيارات'": "isAr ? 'تظليل سيارات' : 'Car Tinting'",
    "d.recommendation": "isAr ? d.recommendation : d.recommendationEn",
    "name: 'الرئيسية'": "name: isAr ? 'الرئيسية' : 'Home'",
    "name: 'تظليل سيارات جدة'": "name: isAr ? 'تظليل سيارات جدة' : 'Car Tinting Jeddah'",
    "name: `تظليل ${d.nameAr}`": "name: isAr ? `تظليل ${d.nameAr}` : `Tinting ${d.nameEn}`",
    
    "`في ${d.nameAr} بجدة، الرطوبة تصل ${d.humidity} مع أشعة UV بمستوى ${d.uvIndex} وتآكل ملحي ${d.saltCorrosion}. نوصي بـ ${d.recommendation}. وكيل جونسون و 3M المعتمد — ضمان عمر السيارة.`": "isAr ? `في ${d.nameAr} بجدة، الرطوبة تصل ${d.humidity} مع أشعة UV بمستوى ${d.uvIndex} وتآكل ملحي ${d.saltCorrosion}. نوصي بـ ${d.recommendation}. وكيل جونسون و 3M المعتمد — ضمان عمر السيارة.` : `In ${d.nameEn} Jeddah, humidity reaches ${d.humidity} with UV levels of ${d.uvIndex} and salt corrosion ${d.saltCorrosion}. We recommend ${d.recommendationEn}. Authorized Johnson & 3M dealer — Lifetime warranty.`",
    "`تظليل سيارات في ${d.nameAr} جدة`": "isAr ? `تظليل سيارات في ${d.nameAr} جدة` : `Car Tinting in ${d.nameEn} Jeddah`",
    "الرئيسية</Link> / <Link href=\"/car-insulation-jeddah\">تظليل سيارات</Link> / <span>{d.nameAr}</span>": "{isAr ? 'الرئيسية' : 'Home'}</Link> / <Link href=\"/car-insulation-jeddah\">{isAr ? 'تظليل سيارات' : 'Car Tinting'}</Link> / <span>{isAr ? d.nameAr : d.nameEn}</span>",
    "تظليل سيارات في <span className={styles.blueGradient}>{d.nameAr}</span>": "{isAr ? 'تظليل سيارات في ' : 'Car Tinting in '}<span className={styles.blueGradient}>{isAr ? d.nameAr : d.nameEn}</span>",
    "حلول تظليل مخصصة لمناخ {d.nameAr} — رطوبة {d.humidity}، أشعة UV بمستوى {d.uvIndex}.": "{isAr ? `حلول تظليل مخصصة لمناخ ${d.nameAr} — رطوبة ${d.humidity}، أشعة UV بمستوى ${d.uvIndex}.` : `Custom tinting solutions for ${d.nameEn} climate — humidity ${d.humidity}, UV level ${d.uvIndex}.`}",
    "احجز موعد تظليل": "{isAr ? 'احجز موعد تظليل' : 'Book a Tinting Appointment'}",
    "{localContent.localParagraph}": "{isAr ? localContent.localParagraph : localContent.localParagraphEn}",
    "بيانات مناخية — {d.nameAr}": "{isAr ? `بيانات مناخية — ${d.nameAr}` : `Climate Data — ${d.nameEn}`}",
    "لماذا {d.nameAr} تحتاج تظليل متخصص؟": "{isAr ? `لماذا ${d.nameAr} تحتاج تظليل متخصص؟` : `Why does ${d.nameEn} need specialized tinting?`}",
    "بيانات مناخية حقيقية تحدد نوع الفيلم المثالي لحيّك.": "{isAr ? 'بيانات مناخية حقيقية تحدد نوع الفيلم المثالي لحيّك.' : 'Real climate data determines the perfect film for your neighborhood.'}",
    "درجة الحرارة": "{isAr ? 'درجة الحرارة' : 'Temperature'}",
    "متوسط {d.avgTemp} — {d.zone} جدة. حرارة المقصورة تتجاوز 72°م بدون تظليل.": "{isAr ? `متوسط ${d.avgTemp} — ${d.zone} جدة. حرارة المقصورة تتجاوز 72°م بدون تظليل.` : `Average ${d.avgTemp} — ${d.zone} Jeddah. Cabin heat exceeds 72°C without tint.`}",
    "الرطوبة": "{isAr ? 'الرطوبة' : 'Humidity'}",
    "{Number(d.humidity.replace('%', '')) > 70 ? 'رطوبة عالية تتطلب فيلم مقاوم للتآكل والتقشر' : 'رطوبة معتدلة — معظم الأفلام مناسبة'}": "{Number(d.humidity.replace('%', '')) > 70 ? (isAr ? 'رطوبة عالية تتطلب فيلم مقاوم للتآكل والتقشر' : 'High humidity requires corrosion-resistant film') : (isAr ? 'رطوبة معتدلة — معظم الأفلام مناسبة' : 'Moderate humidity — most films are suitable')}",
    "الأشعة فوق البنفسجية": "{isAr ? 'الأشعة فوق البنفسجية' : 'UV Rays'}",
    "مستوى UV: {d.uvIndex}. تسبب تشقق الجلد الداخلي وبهتان لون السيارة.": "{isAr ? `مستوى UV: ${d.uvIndex}. تسبب تشقق الجلد الداخلي وبهتان لون السيارة.` : `UV Index: ${d.uvIndex}. Causes interior leather cracking and car paint fading.`}",
    "التآكل الملحي": "{isAr ? 'التآكل الملحي' : 'Salt Corrosion'}",
    "مستوى {d.saltCorrosion} — المسافة من البحر: {d.distanceFromSea}. {d.saltCorrosion === 'عالي' ? 'يجب استخدام فيلم مقاوم للملوحة.' : 'تآكل محدود — خيارات أوسع.'}": "{isAr ? `مستوى ${d.saltCorrosion} — المسافة من البحر: ${d.distanceFromSea}. ${d.saltCorrosion === 'عالي' ? 'يجب استخدام فيلم مقاوم للملوحة.' : 'تآكل محدود — خيارات أوسع.'}` : `Level ${d.saltCorrosion} — Distance from sea: ${d.distanceFromSea}. ${d.saltCorrosion === 'عالي' ? 'Must use salt-resistant film.' : 'Limited corrosion — wider options.'}`}",
    "المستوى الاقتصادي": "{isAr ? 'المستوى الاقتصادي' : 'Economic Level'}",
    "{d.economicLevel} — السيارات الشائعة: {d.popularCars.join('، ')}.": "{isAr ? `${d.economicLevel} — السيارات الشائعة: ${d.popularCars.join('، ')}.` : `${d.economicLevel} — Popular cars: ${d.popularCarsEn.join(', ')}.`}",
    "التوصية": "{isAr ? 'التوصية' : 'Recommendation'}",
    "<strong>{d.recommendation}</strong>": "<strong>{isAr ? d.recommendation : d.recommendationEn}</strong>",
    "💡 نصيحة الخبير": "💡 {isAr ? 'نصيحة الخبير' : 'Expert Tip'}",
    "{localContent.expertTip}": "{isAr ? localContent.expertTip : localContent.expertTipEn}",
    "أسئلة سكان {d.nameAr}": "{isAr ? `أسئلة سكان ${d.nameAr}` : `Questions from ${d.nameEn} Residents`}",
    "أسئلة شائعة عن التظليل في {d.nameAr}": "{isAr ? `أسئلة شائعة عن التظليل في ${d.nameAr}` : `Frequently Asked Questions about Tinting in ${d.nameEn}`}",
    "ساكن في <span className={styles.blueGradient}>{d.nameAr}</span>؟": "{isAr ? 'ساكن في ' : 'Living in '}<span className={styles.blueGradient}>{isAr ? d.nameAr : d.nameEn}</span>؟",
    "احصل على استشارة مجانية + عرض سعر مخصص لمناخ حيّك": "{isAr ? 'احصل على استشارة مجانية + عرض سعر مخصص لمناخ حيّك' : 'Get a free consultation + a custom quote for your neighborhood\\'s climate'}",
    "تواصل عبر واتساب": "{isAr ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}",
    "خبراء العزل وتظليل السيارات بجدة": "isAr ? 'خبراء العزل وتظليل السيارات بجدة' : 'Car Tinting & Insulation Experts in Jeddah'",
    "`نضمن لك في ${d.nameAr} تركيب تظليل نانو سيراميك أصلي يتناسب مع الرطوبة والحرارة العالية، مع التزامنا التام بنظام المرور السعودي ونسبة 30%.`": "isAr ? `نضمن لك في ${d.nameAr} تركيب تظليل نانو سيراميك أصلي يتناسب مع الرطوبة والحرارة العالية، مع التزامنا التام بنظام المرور السعودي ونسبة 30%.` : `We guarantee in ${d.nameEn} the installation of original nano-ceramic tinting suited for high humidity and heat, fully complying with Saudi traffic laws and the 30% limit.`",
    "items={jeddahDistricts.map(x => ({ id: x.id, nameAr: x.nameAr }))}": "items={jeddahDistricts.map(x => ({ id: x.id, nameAr: isAr ? x.nameAr : x.nameEn }))}",
    "أحياء جدة الأخرى": "isAr ? 'أحياء جدة الأخرى' : 'Other Jeddah Neighborhoods'"
}

for k, v in replacements.items():
    content = content.replace(k, v)

# Fix open graph dynamic image text (requires english text)
content = content.replace(
    "encodeURIComponent(`تظليل سيارات ${d.nameAr}`)",
    "encodeURIComponent(isAr ? `تظليل سيارات ${d.nameAr}` : `Car Tinting ${d.nameEn}`)"
)
content = content.replace(
    "encodeURIComponent(`حماية من رطوبة ${d.humidity} وأشعة UV ${d.uvIndex}`)",
    "encodeURIComponent(isAr ? `حماية من رطوبة ${d.humidity} وأشعة UV ${d.uvIndex}` : `Protection from ${d.humidity} humidity and UV ${d.uvIndex}`)"
)

# And fix the `isAr` access inside `generateMetadata` and `buildDistrictSchema`
if "function buildDistrictSchema(d: typeof jeddahDistricts[0])" in content:
    content = content.replace(
        "function buildDistrictSchema(d: typeof jeddahDistricts[0])",
        "function buildDistrictSchema(d: typeof jeddahDistricts[0], isAr: boolean)"
    )
    content = content.replace("buildDistrictSchema(d)", "buildDistrictSchema(d, isAr)")

if "const { locale, district } = await params;" in content:
    content = content.replace(
        "const { locale, district } = await params;\n  const d = jeddahDistricts.find(x => x.id === district);\n  if (!d) return {};\n",
        "const { locale, district } = await params;\n  const d = jeddahDistricts.find(x => x.id === district);\n  if (!d) return {};\n  const isAr = locale === 'ar';\n"
    )

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("page.tsx translated")
