import os
import re

def process_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. PriceReveal.tsx - already fixed using multi_replace_file_content earlier
# 2. CopyButton.tsx - already fixed using multi_replace_file_content earlier

# 3. VoiceSearchFAQ.tsx
process_file('src/components/sections/VoiceSearchFAQ.tsx', [
    ("export default function VoiceSearchFAQ() {", "export default function VoiceSearchFAQ({ isAr = true }: { isAr?: boolean }) {\n  const title = isAr ? 'أسئلة الناس في جدة عن التظليل' : 'People\\'s Questions about Tinting in Jeddah';\n  const subtitle = isAr ? 'أجوبة صريحة بلهجة جداوية — نفس الأسئلة اللي يسألونها العملاء كل يوم.' : 'Candid answers — the exact questions our clients ask every day.';\n  const overline = isAr ? '🎤 أسئلة بلهجتك' : '🎤 Local Questions';"),
    ("<span className={styles.overline}>🎤 أسئلة بلهجتك</span>", "<span className={styles.overline}>{overline}</span>"),
    ("<h2 className={styles.title}>أسئلة الناس في جدة عن التظليل</h2>", "<h2 className={styles.title}>{title}</h2>"),
    ("أجوبة صريحة بلهجة جداوية — نفس الأسئلة اللي يسألونها العملاء كل يوم.", "{subtitle}"),
    ("{faq.question}", "{isAr ? faq.question : (faq.questionEn || faq.question)}"),
    ("{faq.answer}", "{isAr ? faq.answer : (faq.answerEn || faq.answer)}")
])

# 4. CostCalculator.tsx
process_file('src/components/calculator/CostCalculator.tsx', [
    ("import { useState } from 'react';", "import { useState } from 'react';\nimport { useParams } from 'next/navigation';"),
    ("export default function CostCalculator() {", "export default function CostCalculator() {\n  const params = useParams();\n  const isAr = params.locale === 'ar';"),
    ("? `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س`", "? (isAr ? `عزل كور - التسعيرة المبدئية: من ${estimatedPrice.min} إلى ${estimatedPrice.max} ر.س` : `AzelCore - Estimate: ${estimatedPrice.min} - ${estimatedPrice.max} SAR`)"),
    ("`مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\\n` +", "(isAr ? `مرحباً عزل كور، استعملت الحاسبة في موقعكم وهذه تسعيرتي المبدئية:\\n` : `Hello AzelCore, I used the calculator and this is my estimate:\\n`) +"),
    ("`- السعر التقريبي: ${estimatedPrice.min} - ${estimatedPrice.max} ر.س\\n\\n` +", "`- ${isAr ? 'السعر التقريبي' : 'Approximate price'}: ${estimatedPrice.min} - ${estimatedPrice.max} ${isAr ? 'ر.س' : 'SAR'}\\n\\n` +"),
    ("`أريد حجز موعد لتأكيد السعر.`", "(isAr ? `أريد حجز موعد لتأكيد السعر.` : `I want to book an appointment to confirm the price.`)")
])

# 5. Footer.tsx
process_file('src/components/layout/Footer.tsx', [
    ("? 'تظليل وعزل حراري احترافي في جدة — وكيل جونسون و 3M المعتمد. نحمي سيارتك ومبناك من حرارة السعودية بأفضل الأفلام الأمريكية.'", "? 'تظليل وعزل حراري احترافي في جدة — وكيل جونسون و 3M المعتمد. نحمي سيارتك ومبناك من حرارة السعودية بأفضل الأفلام الأمريكية.'\n                : 'Professional thermal insulation and window tinting in Jeddah — Authorized Johnson & 3M Dealer. We protect your car and building from Saudi heat with the best American films.'")
])

# 6. OfficialPartnerBar.tsx
process_file('src/components/seo/OfficialPartnerBar.tsx', [
    ("interface OfficialPartnerBarProps {", "interface OfficialPartnerBarProps {\n  isAr?: boolean;"),
    ("title = 'مرجعياتنا والمعايير المعتمدة'", "title,\n  isAr = true"),
    ("const entitiesToDisplay", "const defaultTitle = isAr ? 'مرجعياتنا والمعايير المعتمدة' : 'Our References & Standards';\n  const finalTitle = title || defaultTitle;\n\n  const entitiesToDisplay"),
    ("aria-label=\"المرجعيات الحكومية والمعايير\"", "aria-label={isAr ? \"المرجعيات الحكومية والمعايير\" : \"Government and standard references\"}"),
    ("<h3>{title}</h3>", "<h3>{finalTitle}</h3>")
])

# 7. ServiceDisclaimer.tsx
process_file('src/components/seo/ServiceDisclaimer.tsx', [
    ("export default function ServiceDisclaimer({ title, content, type = 'warning' }: ServiceDisclaimerProps) {", "export default function ServiceDisclaimer({ title, content, type = 'warning', isAr = true }: ServiceDisclaimerProps & { isAr?: boolean }) {"),
    ("aria-label=\"تحذير سلامة\"", "aria-label={isAr ? \"تحذير سلامة\" : \"Safety warning\"}")
])

# 8. ServiceSummary.tsx
process_file('src/components/seo/ServiceSummary.tsx', [
    ("export default function ServiceSummary({ summary, label = 'خلاصة الخدمة' }: ServiceSummaryProps) {", "export default function ServiceSummary({ summary, label, isAr = true }: ServiceSummaryProps & { isAr?: boolean }) {\n  const finalLabel = label || (isAr ? 'خلاصة الخدمة' : 'Service Summary');"),
    ("aria-label=\"ملخص الخدمة\"", "aria-label={isAr ? \"ملخص الخدمة\" : \"Service Summary\"}"),
    ("<span>{label}</span>", "<span>{finalLabel}</span>")
])

# 9. AuthorProfile.tsx
process_file('src/components/seo/AuthorProfile.tsx', [
    ("export default function AuthorProfile({", "export default function AuthorProfile({\n  isAr = true,"),
    ("variant = 'default'", "variant = 'default'\n}: AuthorProfileProps & { isAr?: boolean }) {"),
    ("variant = 'default'\n}: AuthorProfileProps) {", "variant = 'default'\n}: AuthorProfileProps & { isAr?: boolean }) {"),
    ("aria-label=\"صندوق المراجعة الفنية\"", "aria-label={isAr ? \"صندوق المراجعة الفنية\" : \"Technical Review Box\"}"),
    ("<span className={styles.badgeText}>محتوى مراجَع فنياً</span>", "<span className={styles.badgeText}>{isAr ? 'محتوى مراجَع فنياً' : 'Technically Reviewed'}</span>"),
    ("<span className={styles.label}>✍️ إعداد:</span>", "<span className={styles.label}>✍️ {isAr ? 'إعداد:' : 'Author:'}</span>"),
    ("<span className={styles.value}>فريق تحرير عزل كور</span>", "<span className={styles.value}>{isAr ? 'فريق تحرير عزل كور' : 'AzelCore Editorial Team'}</span>"),
    ("<span className={styles.label}>🔍 المراجعة الفنية:</span>", "<span className={styles.label}>🔍 {isAr ? 'المراجعة الفنية:' : 'Technical Review:'}</span>"),
    ("آخر مراجعة:", "{isAr ? 'آخر مراجعة:' : 'Last reviewed:'}"),
    ("new Date(reviewDate).toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' })", "new Date(reviewDate).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })")
])

# 10. Certifications.tsx
process_file('src/components/seo/Certifications.tsx', [
    ("interface CertificationsProps {", "interface CertificationsProps {\n  isAr?: boolean;"),
    ("export default function Certifications({ sector }: CertificationsProps) {", "export default function Certifications({ sector, isAr = true }: CertificationsProps) {"),
    ("aria-label=\"شارات الاعتماد والتوثيق\"", "aria-label={isAr ? \"شارات الاعتماد والتوثيق\" : \"Certifications and accreditations\"}"),
    ("title={`جهة الاعتماد: ${b.grantedBy}`}", "title={isAr ? `جهة الاعتماد: ${b.grantedBy}` : `Accredited by: ${b.grantedByEn || b.grantedBy}`}")
])

print("UI components fixed.")
