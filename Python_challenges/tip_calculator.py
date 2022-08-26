# If the bill was $150.00, split between 5 people, with 12% tip.

# Each person should pay (150.00 / 5) * 1.12 = 33.6
# Format the result to 2 decimal places = 33.60

# Tip: There are 2 ways to round a number. You might have to do some Googling to solve this.💪

# Write your code below this line 👇

print('Welcome to the tip calculator!')

bill = input('How much was the bill? ')

percentage = input(
    "How much percentage tip would you like to leave? 10, 12, or 15? ")

guest = input('How many people will be splitting the bill? ')

bill_in_int = float(bill)

percentage_in_int = int(percentage)

guest_in_int = int(guest)

tip = (percentage_in_int / 100) * bill_in_int

print(round((tip + bill_in_int) / guest_in_int))


# can be refactored and made cleaner.
