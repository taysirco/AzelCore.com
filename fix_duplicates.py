import re

file_path = 'src/data/blog-topics.ts'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace duplicate titleEn lines
# regex to find duplicate titleEn lines that are exactly the same
content = re.sub(r'(titleEn: ".*?",\n\s*)titleEn: ".*?",\n', r'\1', content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("blog-topics.ts fixed")
