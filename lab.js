
console.log('Part 1');
for (let i=1; i<=100; i++) {
    // console.log(i);
 if (i%3 === 0 && i%5 === 0) {
    console.log('Fizz Buzz');
} else if (i%3 === 0) {
    console.log('Fizz');
} else if (i%5 === 0) {
    console.log('Buzz');
} else {
    console.log(i);
}
}

console.log('Part 2');
let n = 50
while (n >= 2) {
    if (n === 2 || n === 3 || n === 5 || n === 7 || n === 11 || n === 13 || n === 17 || n === 19 || n === 23 || n === 29 || n === 31 || n === 37 || n === 41 || n === 43 || n === 47 || n === 53) {
        console.log(n);
    }   n--;
}

console.log('Part 2 Continued')
n = 5;
let nextNum = n+1
while (true) {
let isPrime = true;
for (let i = 2; i < nextNum; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(n);
    break;
}
n++;
}


console.log('Part 3')