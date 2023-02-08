var Losos_answer = document.getElementById("losos-answer");
var Losos_button = document.getElementById("losos-button");
console.log(Losos_button);

var Losos = Math.random();
Losos = Math.round(Losos*10);
console.log(Losos);
// var Losos_to_string = Losos.toString;
// console.log(Losos_to_string);


function Losos_function (){
    Losos_answer.innerHTML = Losos;
};