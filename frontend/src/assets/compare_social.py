
import re
import json

def parse_assets(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to extract faculties array content
    # Look for export const faculties = [ ... ];
    match = re.search(r'export const faculties\s*=\s*\[(.*?)\];', content, re.DOTALL)
    if not match:
        # Try without export
        match = re.search(r'const faculties\s*=\s*\[(.*?)\];', content, re.DOTALL)
    
    if not match:
        print(f"Could not find faculties array in {file_path}")
        return []
    
    array_content = match.group(1)
    
    # Split by objects {}
    # This is a bit naive if there are nested objects, but usually fine for this file
    # Better to use a parser for JS objects if possible, but regex might work for basic structure
    objs = []
    current_obj = ""
    brace_count = 0
    in_string = False
    quote_char = ""
    
    for char in array_content:
        if char in ["'", '"', "`"] and (not current_obj or current_obj[-1] != "\\"):
            if not in_string:
                in_string = True
                quote_char = char
            elif char == quote_char:
                in_string = False
        
        current_obj += char
        if not in_string:
            if char == "{":
                brace_count += 1
            elif char == "}":
                brace_count -= 1
                if brace_count == 0:
                    objs.append(current_obj.strip().strip(','))
                    current_obj = ""
    
    return objs

def extract_field(obj_str, field_name):
    # Extracts a field value from the object string
    # e.g. name: "Ms. Tanushree V M"
    pattern = rf'{field_name}\s*:\s*("(.*?)"|\'(.*?)\'|`(.*?)`)'
    match = re.search(pattern, obj_str, re.DOTALL)
    if match:
        return match.group(2) or match.group(3) or match.group(4)
    return None

def get_social_block(obj_str):
    match = re.search(r'social\s*:\s*\{(.*?)\}', obj_str, re.DOTALL)
    if match:
        return match.group(1).strip()
    return None

old_objs = parse_assets('assets_f7eec39.js')
new_objs = parse_assets('assets_current.js')

old_data = {}
for obj in old_objs:
    name = extract_field(obj, 'name')
    if name:
        social = get_social_block(obj)
        if social:
            old_data[name] = social

print(f"Collected social data for {len(old_data)} faculty members from old file.")

# Compare with new data
missing = []
for obj in new_objs:
    name = extract_field(obj, 'name')
    if name:
        current_social = get_social_block(obj)
        if name in old_data:
            if not current_social or current_social == "":
                missing.append(name)
            elif len(old_data[name]) > len(current_social) + 10: # Significantly more data in old
                missing.append(name)

print(f"Found {len(missing)} faculty members with missing or incomplete social data:")
for m in missing:
    print(f"- {m}")

# Output recovered data
for m in missing:
    print(f"\n--- {m} ---")
    print(old_data[m])
