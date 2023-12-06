price = 11000

message1 = "The price is {} dollars"
message2 = "The price is {:.2f} dollars" # <- A number with 2 decimals

print(message1.format(price)) # The price is 11000 dollars
print(message2.format(price)) # The price is 11000.00 dollars
