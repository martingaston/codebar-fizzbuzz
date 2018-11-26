const isDivisible = (numerator, denominator) => numerator % denominator == 0;

const fizzbuzz = (start, stop, values) => {
    for (i = start; i <= stop; i++) {
        let answer = "";
        values.forEach(multiple => {
            [text, divisor] = multiple;
            if (isDivisible(i, divisor)) answer += text;
        });
        console.log(`${answer || i}`);
    }
};

const classic = [["Fizz", 3], ["Buzz", 5]];
const newHotness = [["Flim", 3], ["Flam", 5], ["Floozle", 7]];

fizzbuzz(1, 200, newHotness);
