import json

dictionary = {
  "employeeId": "0xFgz",
  "name": "Taylor",
  "division": "accounting"
}

# Convert from Python dictionary to JSON
toJson = json.dumps(
  dictionary, 
  indent = 4, 
  separators=(". ", " = "), 
  sort_keys=True
)

print("Converted JSON :", toJson)

# === Output ===
# Converted JSON : {
#     "division" = "accounting". 
#     "employeeId" = "0xFgz". 
#     "name" = "Taylor"
# }
