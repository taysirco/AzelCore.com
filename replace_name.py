import os

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content.replace("'Ahmed Salem'", "OWNER_NAME_EN")
            new_content = new_content.replace('"Ahmed Salem"', "OWNER_NAME_EN")
            new_content = new_content.replace("'AzelCore Expert'", "OWNER_NAME_EN")
            new_content = new_content.replace('"AzelCore Expert"', "OWNER_NAME_EN")
            
            if new_content != content:
                # add import if needed
                if "OWNER_NAME_EN" in new_content and "OWNER_NAME_EN" not in content and "import " in new_content:
                    if "OWNER_NAME" in new_content and "OWNER_NAME_EN" not in new_content.split("import ")[1]:
                        new_content = new_content.replace("OWNER_NAME,", "OWNER_NAME, OWNER_NAME_EN,")
                        new_content = new_content.replace("OWNER_NAME }", "OWNER_NAME, OWNER_NAME_EN }")
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
