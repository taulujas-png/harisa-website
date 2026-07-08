import re
try:
    with open('harisa ornament.svg', 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'id="path21".*?d="([^"]+)"', content, re.DOTALL)
    if match:
        print(match.group(1))
    else:
        print("Not found")
except Exception as e:
    print(f"Error: {e}")
