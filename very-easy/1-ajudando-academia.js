// Desafio 1: Ajudando a Academia
//Escreva uma função que recebe um número qualquer de números inteiros como argumentos e retorne a média artmética entre eles.

function calcMedia(...notas) {
    const sum = notas.reduce((accum, num) => accum + num, 0)

    return sum / notas.length
}

console.log(calcMedia(10, 9, 6, 8, 9, 1, 5, 7)) // 6.875
console.log(calcMedia(2, 5, 7, 1, -2)) // 2.6
console.log(calcMedia(10, 10, 10, 10, 9)) // 9.8
console.log(calcMedia(25, 75)) // 50