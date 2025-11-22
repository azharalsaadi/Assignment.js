let num = 17;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + "prime number");
} else {
    console.log(num +  " not prime number");
}