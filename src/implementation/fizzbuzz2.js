const isDivisible = (numerator, denominator) => numerator % denominator == 0;

for (i = 1; i <= 100; i++) {
    const fizz = isDivisible(i, 3);
    const buzz = isDivisible(i, 5);
    if (fizz && buzz) console.log("FizzBuzz");
    else if (fizz) console.log("Fizz");
    else if (buzz) console.log("Buzz");
    else console.log(i);
}
