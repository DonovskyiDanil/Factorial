function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n-1);
}
const n = 5;
const result = factorial(n);
console.log(`Факториал ${n} равен ${result}`);
