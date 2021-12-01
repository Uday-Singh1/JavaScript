console.log("Script is geladen");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetinFruitLa(fruit){
    console.log('fruit');

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML =fruit;
    nieuwElement.className ='rood'
    fruitvak.appendChild(nieuwElement);
}

    function zetinGroenteLa(groente){
    console.log('groente');
}