import re

file_path = 'src/data/districts-content.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for i, line in enumerate(lines):
    if i > 0 and line == lines[i-1]:
        continue
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'(questionEn: `[^`]+`, answerEn: `[^`]+`), questionEn: `[^`]+`, answerEn: `[^`]+`', r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("districts-content.ts fixed")
