def reverse_number(number):
    original_number = number  # Store the original number
    reverse = 0  # This will hold the reversed number

    # Loop through each digit of the number
    while number > 0:
        digit = number % 10  # Get the last digit
        reverse = reverse * 10 + digit  # Add it to the reversed number
        number //= 10  # Remove the last digit from the number

    # Print the original and reversed numbers
    print(f"Original Number: {original_number}")
    print(f"Reversed Number: {reverse}")

# Example Usage
number = 3456
reverse_number(number)
