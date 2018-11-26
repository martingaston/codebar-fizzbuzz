Array.from({ length: 100 }, (v, i) => (v = i + 1)).forEach(i =>
    console.log(`${(i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i}`)
);
