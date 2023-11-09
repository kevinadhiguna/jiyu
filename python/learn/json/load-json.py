import json

sampleJson = '{ "studentId": "0xAeI", "name": "Jessica", "major": "Psychology" }'

# Parse the JSON
parsedJson = json.loads(sampleJson)

# Appears as a dictionary in Python
print("Name of the student (in the JSON) :", parsedJson["name"]) # Jessica

print("Parsed JSON :", parsedJson)
# Parsed JSON : {'studentId': '0xAeI', 'name': 'Jessica', 'major': 'Psychology'}
