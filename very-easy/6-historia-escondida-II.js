// Desafio 6: História Escondida II
// Escreva uma função que recebe uma string e retorna cada palavra da string invertifa e em letras minúsculas, porém com as palavras na mesma ordem.
// Assuma que a string não possui nenhuma letra com acento, número ou caractere especial, apenas letras e espaços.

function invertedWord(word) {
    return word.split('').reverse().join('')
}

function reverseString(str) {
    return str.toLowerCase().split(' ').map(invertedWord).join(' ')
}

console.log(reverseString('Lorem ipsum dolore sec avanti')) // 'merol muspi erolod ces itnava'
console.log(reverseString('This is an apple')) // 'siht si na elppa'