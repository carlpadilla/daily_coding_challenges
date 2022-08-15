# 🚨 Don't change the code below 👇
height = input("enter your height in Inches: ")
weight = input("enter your weight in Pounds: ")
# 🚨 Don't change the code above 👆

# Write your code below this line 👇


bmi = int(weight) / (int(height) * int(height)) * 703

print(f"Your BMI is {round(bmi,2)}")
