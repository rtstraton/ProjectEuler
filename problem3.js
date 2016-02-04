factors = [];

d = 2;
n = 600851475143;

while (n > 2) {
    while (n % d == 0) {
        factors.push(d);
        n /= d;
    }
    d += 1;
}

var largest_prime_factor = Math.max.apply(Math, factors);

console.log("There are " + factors.length + " factors of 600851475143. The largest prime factor of 600851475143 is " + largest_prime_factor + ".");