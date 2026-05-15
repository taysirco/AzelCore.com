import re

file_path = 'src/data/cities-content.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace duplicated 'questionEn: ..., answerEn: ...' on the same line
# E.g., questionEn: `...`, answerEn: `...`, questionEn: `...`, answerEn: `...`

content = re.sub(r'(questionEn: `[^`]+`, answerEn: `[^`]+`), questionEn: `[^`]+`, answerEn: `[^`]+`', r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("cities-content.ts duplicate fixed")
