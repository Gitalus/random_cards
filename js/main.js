

window.onload = function() {
    const cardElement = document.querySelector('.card');
    const [pinta, numero] = randomElements();
    const numCard = document.createTextNode(numero);
    console.log(pinta);

    cardElement.appendChild(numCard);
    cardElement.classList.add(pinta);

}

function randomElements() {
    const arrayPinta = ['diamonds', 'hearts', 'spades', 'clubs'];
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomNum = Math.floor(Math.random() * 12);
    const parsedNum = String(randomNum);
    return [randomPinta, parsedNum];
}