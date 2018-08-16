//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
// alert(guess);

//check if guess is right
if(guess === secretNumber) {
    alert("You got it right!");
}

//otherwise you got it wrong
// else{
//     alert("You got it wrong");
// }

//otherwise check if higher
else if(guess > secretNumber){
    alert("Too high, guess again");
}

//otherwise check if lower
else{
    alert("Too low, guess again");
}