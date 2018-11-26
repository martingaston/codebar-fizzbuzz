def fizzbuzz():
    return ["FizzBuzz" if not x % 15 else "Buzz" if not x % 5 else "Fizz" if not x % 3 else x for x in range(1, 101)]

if (__name__) == '__main__':
    for i in fizzbuzz():
        print(i)
