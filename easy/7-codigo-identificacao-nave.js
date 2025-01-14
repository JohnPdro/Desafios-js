// Desafio 13: Código de Identificação de Nave
// Escreva uma função que recebe um número e verifica se ele é um código de identificção válido segunfo as regras de criação do dígito verificador. A criação do dígito verificador funciona da seguinte forma:
// 1. Some os dígitos das posições pares (ímpares se estiver contando a partir de 1)
// 2. Multiplique esse resultado por 3
// 3. Some os dígitos das posições ímpares (pares se estiver contando a partir de 1) do número original e então some esse resultado ao resultado do passo anterior
// 4. Encontre o resto da divisão do resultado do passo anterior por 10
// 5. Se o resto da divisão for 0, o dígito verificador é 0 do contrário o dígito verificador é 10 - resto

function generateDigit(arr) {
    const step1 = arr.reduce((accum, current, index) => {
        return index === 0 || index % 2 === 0 ? accum + current : accum
    }, 0)

    const step2 = step1 * 3

    const step3 = step2 + arr.reduce((accum, current, index) => {
        return index % 2 !== 0 ? accum + current : accum
    }, 0)

    return step3 % 10 !== 0 ? 10 - step3 % 10 : 0
}

function verifyCode(code) {
    const numberArray = code.toString().split('').map(Number)

    const numberArrayWithtoutDigit = numberArray.slice(0, -1)

    const correctDigit = generateDigit(numberArrayWithtoutDigit)

    return correctDigit === numberArray[numberArray.length - 1]
}

console.log(verifyCode(547020743789)) // true
console.log(verifyCode(301354030349)) // false