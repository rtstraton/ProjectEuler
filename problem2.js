console.log("This program will find the sum of the even valued integers in the sequence, up to 4 million");

var sequence = [1, 1, 2];
var sum = 0;

while (sequence[2] <= 4000000) {
    if (sequence[2] % 2 === 0) {
        sum += sequence[2];
    }
    sequence[2] = sequence[0] + sequence[1];
    sequence[0] = sequence[1];
    sequence[1] = sequence[2];
}

console.log("The answer is " + sum);
