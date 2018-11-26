const fs = require("fs");
const { Readable } = require("stream");

class Fizzbuzz {
    constructor(start, stop, values) {
        this.current = start;
        this.stop = stop;
        this.values = values;
    }

    next() {
        if (this.current > this.stop) return null;
        let current = this.current++;
        let answer = "";
        this.values.forEach(multiple => {
            const [text, predicate] = multiple;
            if (predicate(current)) answer += text;
        });
        return (answer || "" + current) + "\n";
    }
}

const fizzbuzz = new Fizzbuzz(1, 100000000, [
    ["Fizz", i => i % 3 == 0],
    ["Buzz", i => i % 5 == 0]
]);

const file = fs.createWriteStream("fizzbuzz.txt");
const stream = new Readable({
    read() {
        this.push(fizzbuzz.next());
    }
});

stream.pipe(file);
