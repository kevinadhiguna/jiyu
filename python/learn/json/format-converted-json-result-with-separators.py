import json

dictionary = {
  "employeeId": "0xFgz",
  "name": "Taylor",
  "division": "accounting"
}

# Convert from Python dictionary to JSON
toJson = json.dumps(dictionary, indent = 4, separators=(". ", " = "))

print("Converted JSON :", toJson)

# === Output ===
# Converted JSON : {
#     "employeeId" = "0xFgz". 
#     "name" = "Taylor". 
#     "division" = "accounting"
# }
