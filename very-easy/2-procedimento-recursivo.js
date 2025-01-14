// Desafio 2: Procedimento Recursivo I
// Escreva uma função que recebe um número e retorna uma quantidade equivalente de "chunks" separados por um traço "-" sem utilizar nenhuma estrutura de repetição (while, dowhile, for, etc).

function exibeChunks(num) {
    if (!num) return

    if (num == 1) {
        return 'chunk'
    } else {
        return 'chunk-' + exibeChunks(num - 1)
    }
}

console.log(exibeChunks(4)) // "chunk-chunk-chunk-chunk" 
console.log(exibeChunks(1)) // "chunk"
console.log(exibeChunks(8)) // "chunk-chunk-chunk-chunk-chunk-chunk-chunk-chunk"
console.log(exibeChunks(2))// "chunk-chunk"
