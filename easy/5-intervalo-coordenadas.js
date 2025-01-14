// Desafio 11: Intervalo de Coordenadas
// Escreva uma função que receba um par ordenado (x, y) e retorne um array de pares (x, y) onde cada um deles possui x e y menor ou igual ao par recebido em ordem crescente.
// Os pares devem ser ordenados de forma que o primeiro aumente o valor de y e depois o valor de x.
// Apenas o quadrante onde x e y são positivos deve ser considerado.

function smallerPairs(pair) {
    const result = []

    for (let i = 0; i <= pair[0]; i++) {
        for (let j = 0; j <= pair[1]; j++) {
            result.push([i, j])
        }
    }

    return result
}

console.log(smallerPairs([2, 7])) // [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7]]
console.log(smallerPairs([-3, -3])) // []