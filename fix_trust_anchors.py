import re

with open("src/data/trust-anchors.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Add nameEn to GovernmentEntity
content = content.replace(
    "name: string;\n  abbreviation: string;",
    "name: string;\n  nameEn?: string;\n  abbreviation: string;"
)

# Add nameEn to entities
content = content.replace(
    "name: 'الهيئة السعودية للمواصفات والمقاييس',",
    "name: 'الهيئة السعودية للمواصفات والمقاييس',\n    nameEn: 'Saudi Standards, Metrology and Quality Org (SASO)',"
)
content = content.replace(
    "name: 'اللجنة الوطنية لكود البناء السعودي',",
    "name: 'اللجنة الوطنية لكود البناء السعودي',\n    nameEn: 'Saudi Building Code National Committee (SBC)',"
)
content = content.replace(
    "name: 'المركز السعودي لكفاءة الطاقة',",
    "name: 'المركز السعودي لكفاءة الطاقة',\n    nameEn: 'Saudi Energy Efficiency Center (SEEC)',"
)
content = content.replace(
    "name: 'الهيئة السعودية للمهندسين',",
    "name: 'الهيئة السعودية للمهندسين',\n    nameEn: 'Saudi Council of Engineers (SCE)',"
)
content = content.replace(
    "name: 'المرور السعودي',",
    "name: 'المرور السعودي',\n    nameEn: 'Saudi General Traffic Department',"
)
content = content.replace(
    "name: 'وزارة البلديات — منصة بلدي',",
    "name: 'وزارة البلديات — منصة بلدي',\n    nameEn: 'Ministry of Municipalities - Balady',"
)
content = content.replace(
    "name: 'المديرية العامة للدفاع المدني',",
    "name: 'المديرية العامة للدفاع المدني',\n    nameEn: 'General Directorate of Civil Defense',"
)

with open("src/data/trust-anchors.ts", "w", encoding="utf-8") as f:
    f.write(content)

