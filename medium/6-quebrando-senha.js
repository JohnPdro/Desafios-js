// Desafio 20: Quebrando a Senha
// Escreva uma função que receba um array de opções e retorne um array bidimensional de todas as senhas possíveis utilizando todos os elementos passados. Faça isso utilizando recursão.

function possiblePasswords(arr) {
    if (arr.length === 0) {
        return [[]]
    }

    const removedChar = arr[0]
    const partialChars = arr.slice(1)

    const partialPossiblities = possiblePasswords(partialChars)

    const allPossibilities = []

    partialPossiblities.forEach(partialPossibility => {
        for (let i = 0; i <= partialPossibility.length; i++) {
            const completePosiibility = [...partialPossibility.slice(0, i), removedChar, ...partialPossibility.slice(i)]
            allPossibilities.push(completePosiibility)
        }
    })

    return allPossibilities
}

console.log(possiblePasswords(["X", "5", "-", "#"])) // [ 
// ['X', 's', '-', '#'], ['s', 'X', '-', '#'], 
// ['s', '-', 'X', '#'], ['s', '-', '#', 'X'], 
// ['X', '-', 's', '#'], ['-', 'X', 's', '#'], 
// ['-', 's', 'X', '#'], ['-', 's', '#', 'X'], 
// ['X', '-', '#', 's'], ['-', 'X', '#', 's'], 
// ['-', '#', 'X', 's'], ['-', '#', 's', 'X'], 
// ['X', 's', '#', '-'], ['s', 'X', '#', '-'], 
// ['s', '#', 'X', '-'], ['s', '#', '-', 'X'], 
// ['X', '#', 's', '-'], ['#', 'X', 's', '-'], 
// ['#', 's', 'X', '-'], ['#', 's', '-', 'X'], 
// ['X', '#', '-', 's'], ['#', 'X', '-', 's'], 
// ['#', '-', 'X', 's'], ['#', '-', 's', 'X'] 
// ]
console.log(possiblePasswords(["1", "2", "3"])) // [['1', '2', '3'], ['2', '1', '3'], ['2', '3', '1'], ['1', '3', '2'], ['3', '1', '2'], ['3', '2', '1']]