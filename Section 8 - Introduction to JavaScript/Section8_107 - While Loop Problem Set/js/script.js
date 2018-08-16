//print all numbers between -10 and 19
console.log("print all numbers between -10 and 19")
var countOne = -10;

while (countOne <= 19) {
    console.log(countOne);
    countOne++;
}

//print all even numbers between 10 and 40
console.log("print all even numbers between 10 and 40")

var countTwo = 10;

// while (countTwo <= 40) {
//     console.log(countTwo);
//     countTwo+=2;
// }

while (countTwo <= 40) {
    if (countTwo % 2 === 0) {
        console.log(countTwo);
    }
    countTwo += 1;
}
//print all odd numbers between 300 and 333
console.log("print all odd numbers between 300 and 333")

var countThree = 300;

while (countThree <= 333) {
    if (countThree % 2 !== 0) {
        console.log(countThree);
    }
    countThree++;
}
//print all numbers divisible by 5 & 3 between 5 and 50
console.log("print all numbers divisible by 5 & 3 between 5 and 50")

var countFour = 5;

while (countFour <= 50) {
    if (countFour % 3 === 0 && countFour % 5 === 0) {
        console.log(countFour);
    }
    countFour++;
}