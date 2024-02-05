def fizzbuzz(n):
    result = []

    # 'n+1' beacuse an array starts from 0
    for x in range(1, n+1):
        if x % 3 == 0 & x % 5 ==0:
            result.append("Fizz Buzz")
        elif x % 3 == 0:
            result.append("Fizz")
        elif x % 5 == 0:
            result.append("Buzz")
        else:
            result.append(x)
    
    return result

def main():
    number = 30
    print(f'Result of Fizzbuzz {number}:', fizzbuzz(number))

main()
