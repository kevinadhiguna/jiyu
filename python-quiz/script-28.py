def convert_currency(amount, rate):
    return amount * rate

amount_in_usd = 10000
conversion_rate_to_eur = 0.85

amount_in_eur = convert_currency(amount_in_usd, conversion_rate_to_eur)

# print(f"${amount_in_usd} USD is equivalent to {amount_in_eur} EUR")   # 8500.0
print(f"{amount_in_usd} USD is equivalent to {amount_in_eur:.2f} EUR") # 8500.00

# Output:
# 10000 USD is equivalent to 8500.00 EUR
