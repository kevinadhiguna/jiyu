import datetime

dateObj = datetime.datetime(2014, 3, 15)

print("date object:", dateObj) # 2014-03-15 00:00:00

print("Day:", dateObj.strftime("%A")) # Saturday
print("Day (shortened):", dateObj.strftime("%a")) # Sat

print("Month:", dateObj.strftime("%B")) # March
print("Month (shortened):", dateObj.strftime("%b")) # Mar

# More strftime legal format codes at https://www.w3schools.com/python/python_datetime.asp
