console.log("This program finds the sum of all integers below 1000 which are divisible by 3 or 5");

var sum = 0;

for (i=1;i<1000;i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}

console.log(sum);