// Desafio 5: História Escondidada I
// Escreva uma função que recebe uma string e retorna a maior letra segundo a ordem alfabética em minúsculo. Assuma que a string não possui nenhumaletra com acento, número ou caractere especial, apenas letras e espaçoes.

function highestLetter(str) {
    const sortedArray = str.toLowerCase().split('').sort()
    return sortedArray[sortedArray.length - 1]
}

console.log(highestLetter('Lorem ipsum dolore sec avanti')) // 'v'
console.log(highestLetter('Hello')) // 'o'
console.log(highestLetter('May the force be with you')) // 'y'
console.log(highestLetter('Its over nine thousand')) // 'v'