// Desafio 19: Cálculos de Viagens Espaciais II
// Escreva uma função que recebe um número e retorna a sua persistência multiplicativa, que é a quantidade de vezes que é necessário multiplicar os seus algarismos para se chegar em um número de um único algarismo.
function multiplicativePersistance(num) {
    if (num < 10) {
        return 0
    }

    const digits = num.toString().split('')

    const product = digits.reduce((accum, current) => accum * current, 1)

    console.log(`Multiplicando: ${digits}`)

    return 1 + multiplicativePersistance(product)
}

console.log(multiplicativePersistance(539)) // 3
console.log(multiplicativePersistance(999)) // 4
console.log(multiplicativePersistance(7)) // 0