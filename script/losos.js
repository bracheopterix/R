const lososAnswer = document.getElementById("losos-answer");
const lososButton = document.getElementById("losos-button");

const losos = Math.round(Math.random()*10);
console.log(losos);


function lososFunction (){
    lososAnswer.innerHTML = losos;
};