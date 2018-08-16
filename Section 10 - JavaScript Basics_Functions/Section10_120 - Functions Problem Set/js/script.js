//write a function isEven() which takes a single numeric argument and returns true if the number is even and false otherwise
// function isEven(number) {
//     if (number % 2 !==0) {
//         return false;
//     }
//     return true;
// }

function isEven(number) {
    return number % 2 === 0;
}

//write a function factorial() which takes a single numeric argument and returns the factorial of that number
function factorial(number) {
    if (number < 0) {
        return -1;
    } else if (number === 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
}

//write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version
function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}

