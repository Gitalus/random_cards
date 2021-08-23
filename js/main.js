

window.onload = function() {
    const cardElement = document.querySelector('.card');
    const [pinta, numero] = randomElements();
    const numCard = document.createTextNode(numero);

    cardElement.appendChild(numCard);

}

function randomElements() {
    const arrayPinta = ['♦', '♥', '♠', '♣'];
    const randomPinta = arrayPinta[Math.floor(Math.random() * arrayPinta.length)]
    const randomNum = Math.floor(Math.random() * 12);
    const parsedNum = String(randomNum);
    return [randomPinta, randomNum];
}