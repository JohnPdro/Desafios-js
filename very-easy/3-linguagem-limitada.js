// Desafio 3: Linguagem Limitada
// Escreva uma função que recebe um array e retorne um novo array com todas as posições invertidas do original sem alterá-lo. Não utilize os métodos do objeto global Array do javascript (reverse, map, forEach, etc)
function reverse(arr) {
    const reversedArray = []

    for (let i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - 1 - i]
    }

    return reversedArray
}

console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7])) // [7, 5, 1, 9, 8, 6, 9, 0]
console.log(reverse(['Oh', 'Hi', 'Mark'])) // ['Mark', 'Hi', 'Oh']
console.log(reverse([false, true, true, true])) // [true, true, true, false]
console.log(reverse(["It's", "not", true, 0])) // [0, true, 'not', "It's"]