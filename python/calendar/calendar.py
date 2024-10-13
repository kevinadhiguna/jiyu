import calendar

year = 2024
month = 10

# Or if input should be provided:
year = int(input("What year? (in number) :"))
month = int(input("What month? (in number) :"))

print(calendar.month(year, month))
