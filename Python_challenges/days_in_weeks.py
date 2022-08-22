# 🚨 Don't change the code below 👇
age = input("What is your current age? ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇


# Calculate how many days, weeks and months you would have left if you live until 90

life = 90

months_in_90_years = 1080
days_in_90_years = 32850
weeks_in_90_years = 4696

age_in_days = round(int(age) * 365)
age_in_weeks = round(int(age) * 52)
age_in_months = round(int(age) * 12)

print(f" you have { days_in_90_years - (age_in_days)} days, {weeks_in_90_years - age_in_weeks} weeks, and {months_in_90_years - age_in_months} months left to live, before you reach {life}.")
