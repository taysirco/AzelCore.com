import re

files_and_replacements = [
    {
        'file': 'src/app/[locale]/johnson-authorized-dealer/page.tsx',
        'replacements': [
            (
                "title: isAr ? 'وكيل جونسون المعتمد في جدة — Johnson Window Films' : 'وكيل جونسون المعتمد في جدة — Johnson Window Films | AzelCore',",
                "title: isAr ? 'وكيل جونسون المعتمد في جدة — Johnson Window Films' : 'Authorized Johnson Dealer in Jeddah — Johnson Window Films | AzelCore',"
            ),
            (
                "description: isAr ? 'عزل كور الوكيل الرسمي لأفلام جونسون الأمريكية في جدة. Supreme IR يحجب 97% من الأشعة تحت الحمراء. 5 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.' : 'عزل كور الوكيل الرسمي لأفلام جونسون الأمريكية في جدة. Supreme IR يحجب 97% من الأشعة تحت الحمراء. 5 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.',",
                "description: isAr ? 'عزل كور الوكيل الرسمي لأفلام جونسون الأمريكية في جدة. Supreme IR يحجب 97% من الأشعة تحت الحمراء. 5 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.' : 'AzelCore is the official authorized dealer for American Johnson Films in Jeddah. Supreme IR blocks 97% of IR. 5 product lines with lifetime warranty. Book now.',"
            )
        ]
    },
    {
        'file': 'src/app/[locale]/3m-authorized-dealer/page.tsx',
        'replacements': [
            (
                "title: isAr ? 'وكيل 3M المعتمد في جدة — 3M Window Films' : 'وكيل 3M المعتمد في جدة — 3M Window Films | AzelCore',",
                "title: isAr ? 'وكيل 3M المعتمد في جدة — 3M Window Films' : 'Authorized 3M Dealer in Jeddah — 3M Window Films | AzelCore',"
            ),
            (
                "description: isAr ? 'عزل كور الوكيل الرسمي لأفلام 3M الأمريكية في جدة. Crystalline يحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV. 4 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.' : 'عزل كور الوكيل الرسمي لأفلام 3M الأمريكية في جدة. Crystalline يحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV. 4 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.',",
                "description: isAr ? 'عزل كور الوكيل الرسمي لأفلام 3M الأمريكية في جدة. Crystalline يحجب 97% من الأشعة تحت الحمراء مع 99.9% حجب UV. 4 خطوط إنتاج — ضمان عمر السيارة. احجز الآن.' : 'AzelCore is the official authorized dealer for American 3M Films in Jeddah. Crystalline blocks 97% of IR with 99.9% UV block. 4 product lines with lifetime warranty. Book now.',"
            )
        ]
    },
    {
        'file': 'src/app/[locale]/(national-ksa)/building-glass-insulation/page.tsx',
        'replacements': [
            (
                "title: isAr ? 'عزل واجهات زجاج المباني في جدة — وفّر 40% من فاتورة الكهرباء' : 'عزل واجهات زجاج المباني في جدة — وفّر 40% من فاتورة الكهرباء | AzelCore',",
                "title: isAr ? 'عزل واجهات زجاج المباني في جدة — وفّر 40% من فاتورة الكهرباء' : 'Building Glass Insulation in Jeddah — Save 40% on Electricity | AzelCore',"
            ),
            (
                "description: isAr ? 'عزل حراري احترافي لواجهات المباني والفلل في جدة. أفلام نانو سيراميك تحجب 97% حرارة وتوفر 40% من تكاليف التكييف. ضمان 15 سنة.' : 'عزل حراري احترافي لواجهات المباني والفلل في جدة. أفلام نانو سيراميك تحجب 97% حرارة وتوفر 40% من تكاليف التكييف. ضمان 15 سنة.',",
                "description: isAr ? 'عزل حراري احترافي لواجهات المباني والفلل في جدة. أفلام نانو سيراميك تحجب 97% حرارة وتوفر 40% من تكاليف التكييف. ضمان 15 سنة.' : 'Professional thermal insulation for building facades and villas in Jeddah. Nano-ceramic films block 97% of heat and save 40% on AC costs. 15-year warranty.',"
            )
        ]
    }
]

for info in files_and_replacements:
    try:
        with open(info['file'], 'r', encoding='utf-8') as f:
            content = f.read()
            
        for old, new in info['replacements']:
            content = content.replace(old, new)
            
        with open(info['file'], 'w', encoding='utf-8') as f:
            f.write(content)
    except FileNotFoundError:
        pass
