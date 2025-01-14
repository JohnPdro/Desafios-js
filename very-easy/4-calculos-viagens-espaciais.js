// Desafio 4: Cálculos de Viagens Espaciais I
// Escreva uma função que recebe um número intero qualquer, eleve ao quadrado cada um de seus algarismos e depois concatene o resultado retornando um único número inteiro.

function square(num) {
    const digitsArray = num.toString().split('')
    const squaredArray = digitsArray.map(digit => Number(digit) ** 2).join('')

    return squaredArray
}

console.log(square(3514)) // 925116
console.log(square(94571)) // 811625494
console.log(square(24)) // 416
console.log(square(745821698)) // 4916256441368164