import re
import sys

with open(r'd:\CSE-GMU-main\frontend\src\pages\StudentIP.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# I want to find the line numbers too.
# I'll use finditer.
pattern = re.compile(r'<(div|motion\.div|section)\b(.*?)|</(div|motion\.div|section)>', re.DOTALL)
stack = []

for match in pattern.finditer(content):
    line_num = content[:match.start()].count('\n') + 1
    groups = match.groups()
    if groups[0]: # Open tag
        tag = groups[0]
        attr_part = groups[1]
        if attr_part.strip().endswith('/'): # Self-closing
            continue
        stack.append((tag, line_num))
    elif groups[2]: # Close tag
        tag = groups[2]
        if not stack:
            print(f"Extra close tag at line {line_num}: </{tag}>")
        else:
            last, start_line = stack.pop()
            if last != tag:
                print(f"Mismatch: <{last}> at line {start_line} closed by </{tag}> at line {line_num}")
                # We could potentially find where the mismatch started.


if stack:
    print("Unclosed tags:")
    for tag, line in stack:
        print(f"  <{tag}> at line {line}")
