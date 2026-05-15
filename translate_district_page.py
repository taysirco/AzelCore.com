import re

with open('src/app/[locale]/(local-jeddah)/car-insulation-jeddah/[district]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('{content.localParagraph}', '{isAr ? content.localParagraph : content.localParagraphEn}')
content = content.replace('{content.expertTip}', '{isAr ? content.expertTip : content.expertTipEn}')
content = content.replace('question: faq.question,', 'question: isAr ? faq.question : faq.questionEn,')
content = content.replace('answer: faq.answer', 'answer: isAr ? faq.answer : faq.answerEn')
content = content.replace('{faq.question}', '{isAr ? faq.question : faq.questionEn}')
content = content.replace('{faq.answer}', '{isAr ? faq.answer : faq.answerEn}')

with open('src/app/[locale]/(local-jeddah)/car-insulation-jeddah/[district]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
