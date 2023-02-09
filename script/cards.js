const cardVerb = document.getElementById("card-verb");
const cardMeaning = document.getElementById("card-meaning");
console.log(cardVerb, cardMeaning);

const data = [
    {verb: 1, meaning: 'hello'},
    {verb: 2, meaning: 'herro'},
    {verb: 5, meaning: '6'},
    {verb: 8, meaning: '9'},
];


function cardChange() {
    console.log("it worked");
    const foo = getRandomPair();
    const verb22 = foo.verb;
    const meaning22 = foo.meaning;
    console.log(verb22, meaning22);
    cardVerb.innerHTML = verb22;
    cardMeaning.innerHTML = meaning22;
}

function getRandomPair() {
    const randomIndex = Math.round(Math.random() * (data.length - 1));
    return data[randomIndex];
}
