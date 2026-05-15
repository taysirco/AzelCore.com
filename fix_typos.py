import re

file_path = 'src/app/[locale]/(local-jeddah)/car-insulation-jeddah/[district]/page.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("isAr ? d.recommendation : d.recommendationEn.split", "d.recommendation.split")
content = content.replace("isAr ? d.recommendation : d.recommendationEnEn.split", "d.recommendationEn.split")

# Check for any other isAr ? d.recommendation : d.recommendationEnEn
content = content.replace("d.recommendationEnEn", "d.recommendationEn")
content = content.replace("{isAr ? d.recommendation : d.recommendation.split", "{d.recommendation.split")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("page.tsx fixed")
