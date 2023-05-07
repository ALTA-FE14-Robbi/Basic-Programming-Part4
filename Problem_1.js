// Program Prima ke X (Tanpa Recursive)

function primeX(number) {
    let count = 0;
    let temp = 2;

    while (count < number) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
        number++;
    }
    return number - 1;
}

console.log(primeX(1))  // 2
console.log(primeX(5))  // 11
console.log(primeX(10)) // 29
console.log(primeX(15)) // 47
console.log(primeX(20)) // 71