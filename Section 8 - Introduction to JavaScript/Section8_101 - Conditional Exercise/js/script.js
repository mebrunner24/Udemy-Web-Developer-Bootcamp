var age = Number(prompt("How old are you?"));

if(age<0){
    console.log("You're not born yet");
}

if(age===21){
    console.log("Happy Birthday!");
}

if(age % 2 !==0){
    console.log("Your age is odd");
}

if(age%Math.sqrt(age)===0){
    console.log("Your age is a perfect square");
}