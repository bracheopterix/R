
const cardButton = document.getElementById("card-button");
console.log("I got the button - ", cardButton);

function test() {
    console.log("it worked");
}



function getRandomItem (){
    console.log("function is ok")
    const randomIndex = Math.round(Math.random()*array.length);
    const item = array[randomIndex];
    return item;
}
const array = [1, 'hello', 5, 8];
const array2 = [1, 'hello', 5, 8];
const result = getRandomItem(array);
const answer = getRandomItem(array2)
console.log(result,);