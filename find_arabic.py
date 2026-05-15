import os
import re

def find_arabic_hardcoded():
    arabic_pattern = re.compile(r'[\u0600-\u06FF]')
    allowed_patterns = re.compile(r'(isAr|locale|En|ar)')
    
    directories = ['src/app', 'src/components']
    
    for dir_path in directories:
        for root, _, files in os.walk(dir_path):
            for file in files:
                if file.endswith('.tsx') or file.endswith('.ts'):
                    filepath = os.path.join(root, file)
                    with open(filepath, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                    
                    has_hardcoded = False
                    for i, line in enumerate(lines):
                        if arabic_pattern.search(line):
                            # If it contains Arabic but no locale handling keywords, or if it doesn't have an En counterpart
                            # A simple heuristic: if it doesn't have 'isAr' or '?'
                            if 'isAr' not in line and 'locale' not in line and 'En' not in line:
                                print(f"{filepath}:{i+1}: {line.strip()}")

find_arabic_hardcoded()
