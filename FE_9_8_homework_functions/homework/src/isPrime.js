function isPrime(input) {
    let prime = true;
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0) {
            prime = false;
            break;
        }
    }
    return prime && input > 1;
}

