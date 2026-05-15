import re

files_to_update = [
    'src/app/[locale]/blog/page.tsx',
    'src/app/[locale]/blog/[slug]/page.tsx'
]

for file_path in files_to_update:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # In blog/page.tsx it's `topic.titleAr`
    content = content.replace('topic.titleAr', '(isAr ? topic.titleAr : topic.titleEn)')
    # In blog/[slug]/page.tsx it's `topic.titleAr`
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
