// Program Fibonacci (Recursive)

function fibonacci(number) {
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(0))  // 0
console.log(fibonacci(2))  // 1
console.log(fibonacci(9))  // 34
console.log(fibonacci(10)) // 55
console.log(fibonacci(12)) // 144