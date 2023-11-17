import json

dictionary = {
  "employeeId": "0xFgz",
  "name": "Taylor",
  "division": "accounting"
}

# Convert from Python dictionary to JSON
toJson = json.dumps(dictionary)

print("Converted JSON :", toJson)
# Converted JSON : {"employeeId": "0xFgz", "name": "Taylor", "division": "accounting"}

# To-do :
#print("The division which the employee belongs to :", toJson["division"])
