// Desafio 25: Validações do Compilador
// Escreva uma função que recebe uma string, verifica se ela possui uma distribuição válida de parênresis, colchetes e chaves, e retorna true ou false baseada nessa verificação.
// A função deve ser capaz de funcionar com qualquer string independente do conteúdo que acompanha os parêntesis, colchetes e chaves.

function bracketCheck(str) {
    let brackets = str.match(/\(|\)|\[|\]|\{|\}/g).join('')

    while (brackets.match(/\(\)|\[\]|\{\}/)) {
        brackets = brackets.replace(/\(\)|\[\]|\{\}/, '')
        console.log(brackets)
    }

    return brackets.length === 0
}

console.log(bracketCheck('((((([(]))))))')) // flase
console.log(bracketCheck('{(){([]){[]}()()()()[]}(){(())}(())}')) // true
