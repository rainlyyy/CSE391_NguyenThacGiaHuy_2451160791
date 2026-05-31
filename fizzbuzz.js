// Version 1: Classic
console.log("=== V1: Classic FizzBuzz ===");
for (let i = 1; i <= 15; i++) { // Rút gọn in đến 15 để test
    let out = "";
    if (i % 3 === 0) out += "Fizz";
    if (i % 5 === 0) out += "Buzz";
    console.log(out || i);
}

// Version 2: Custom
function customFizzBuzz(limit, rules) {
    console.log(`\n=== V2: Custom FizzBuzz (1 to ${limit}) ===`);
    for (let i = 1; i <= limit; i++) {
        let output = "";
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        console.log(output || i);
    }
}

// Test
customFizzBuzz(35, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);