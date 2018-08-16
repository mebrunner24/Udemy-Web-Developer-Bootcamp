var obj = {
    name: "Chuck",
    age: 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y){
        return x + y;
    }
}
var dogSpace = {};
var catSpace = {};

dogSpace.speak = function(){
    return "WOOF!";
}

catSpace.speak = function(){
    return "MEOW!";
}

var comments = {};
comments.data = ["good job!", "bye", "lame..."];
comments.print = function(){
    this.data.forEach(function(element){
        console.log(element);
    });
}