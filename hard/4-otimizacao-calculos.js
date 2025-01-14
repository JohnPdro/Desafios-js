// Desafio 26: Otimização de Cálculos
// Escreva uma função que recebe um número e retorna o valor exato da sequência de Fibonacci na posição desse número
// Ela deve ser capaz de funcionar em números grandes como 10000 e retornar números inteiros corretos.

let fibonacciCache = {}

function fibonacci(num) {
    const big = BigInt(num)

    if (typeof fibonacciCache[big] === 'bigint') {
        return fibonacciCache[big]
    }

    let result = 0n

    if (big === 0n) {
        result = 0n
    } else if (big === 1n) {
        result = 1n
    } else if (big >= 2n) {
        result = fibonacci(big - 1n) + fibonacci(big - 2n)
    }

    fibonacciCache[big] = result
    
    return result
}

for (let i = 0; i < 1; i++) {
    console.log(i, fibonacci(i))
}

console.log(fibonacci(0)) // 0n
console.log(fibonacci(2n)) // 1n
console.log(fibonacci(7)) // 13n