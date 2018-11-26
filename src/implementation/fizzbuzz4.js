const fizzbuzz = (start, stop, values) => {
    const arr = [];
    for (let i = start; i <= stop; i++) {
        let answer = "";
        values.forEach(multiple => {
            const [text, predicate] = multiple;
            if (predicate(i)) answer += text;
        });
        arr.push(answer || i);
    }
    return arr;
};

fizzbuzz(1, 100, [
    ["Fizz", i => i % 3 == 0],
    ["Buzz", i => i % 5 == 0]
]).forEach(i => console.log(i));
