// Desafio 10: Procedimento Recursivo II
// Escreva uma função que recebe um número e retorna o seu fatoria sem utilizar nenhuma estrutura de repetição. 
// O fatorial de um número é igual a multiplicação de todos os inteiros positivos menores ou iguais a ele. Ela deve ser capaz de retornar números inteiros corretos mesmo para valores altos.

function factorial(num) {
    const bigNum = BigInt(num)

    if (bigNum === 0n) {
        return 1n
    } else {
        return bigNum * factorial(bigNum - 1n)
    }
}

console.log(factorial(5)) // 120n
console.log(factorial(0)) // 1n