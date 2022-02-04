function primeNumber(number) {
    let prime = [2, 3];
    for (i = 2; i <= number; i++) {
        if (i % 2 != 0 && i % 3 != 0) {
            prime.push(i)
        }
    }
    return prime;
}
console.log(primeNumber(20))