// Desafio 16: Código Romano II
// Escreva uma função que recebe uma string e um número e retorne o resultado da aplicação da Cifra de Cesarpara descriptografar o seu conteúdo, ou seja, que retroceda cada letra pelo número passado seguindo a ordem alfabética.

function decipher(str, key) {
    const charsArray = str.split('')
    const normaizedKey = key % 26

    const codesArray = charsArray.map(char => {
        const currentCode = char.charCodeAt(0)

        if (currentCode >= 65 && currentCode <= 90 && currentCode - normaizedKey < 65) {
            return currentCode + 26
        }

        if (currentCode >= 96 && currentCode <= 122 && currentCode - normaizedKey < 96) {
            return currentCode + 26
        }

        return currentCode
    })

    return codesArray.map(code => String.fromCharCode(code - normaizedKey)).join('')
}

console.log(decipher('Vguvg', 2)) // 'Teste'
console.log(decipher('Amozmlw', 8)) // 'Segredo'