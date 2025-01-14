// Desafio 7: Organizando Resultados
// Escreva uma função que recebe um array bidimensional de inteiros e retorna um único array contendo todos números em ordem ascendente.

function flatAndSort(arr) {
    const numbers = []

    arr.forEach(list => {
        numbers.push(...list)
    })

    return numbers.sort((a, b) => a - b)
}

console.log(flatAndSort([ [1, 5, 3], [6, 19, 11], [47, 128, 5], [1, 93, 57, 42, 103] ])) // [1, 1, 3, 5, 5, 6, 11, 19, 42, 47, 57, 93, 103, 128]
console.log(flatAndSort([ [1, 3], [4, 8], [7, 5], [2, 6] ])) // [1, 2, 3, 4, 5, 6, 7, 8]