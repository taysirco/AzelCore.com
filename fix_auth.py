import os

filepath = 'src/components/seo/AuthorProfile.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("variant = 'full',\n}: AuthorProfileProps) {", "variant = 'full',\n}: AuthorProfileProps & { isAr?: boolean }) {")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("AuthorProfile fixed.")
