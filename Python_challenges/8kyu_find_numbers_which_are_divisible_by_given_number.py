# Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
# Example(Input1, Input2 --> Output)

# [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]







def divisible_by(numbers, divisor):
    return [n for n in numbers if n % divisor == 0]






# 2nd solution
# def divisible_by(numbers, divisor):
#     result = []
#     for num in numbers:
#         if num % divisor == 0:
#             result.append(num)
#     return result