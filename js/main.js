

window.onload = function() {
    const randomBtn = document.getElementById('random-btn');
    const cardElement = document.querySelector('.card');
    const [pinta, numero] = randomElements();
    const numCard = document.createTextNode(numero);

    cardElement.appendChild(numCard);
    cardElement.classList.add(pinta);

}

function randomElements() {
    const arrayValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const arrayPinta = ['diamonds', 'hearts', 'spades', 'clubs'];
    
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomValue = arrayValue[Math.floor(Math.random() * arrayValue.length)];
    return [randomPinta, randomValue];
}