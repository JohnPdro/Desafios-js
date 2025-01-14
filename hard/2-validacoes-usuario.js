// Desafio 24: Verificação de Usuário
// Escreva uma função que recebe uma string e verifica se ela atende aos seguintes requisitos:
// Deve conter entre 4 e 32 caracteres.
// Deve conter apenas letras (sem acentos), números ou _
// Deve começar com uma letra
// Não pode terminar com _
// Deve conter pelo menos um de cada tipo de caractere (letra, número e underscore)
// Deve ser único
// Obs.: Para isso você pode utilizar qualquer meio que achar válido para simularum banco de dados, como um array contendo vários nomes fictícios para comparação, por exemplo.
// Caso atenda, retorne true, caso não atenda retorne false.

const database = ['erick_14', 'pam_ls2', 'VICTOR_99A']

function validateUser(username) {
    if (username.length < 4 || username.length > 32) {
        console.log('Tamanho inválido')
        return false
    }

    if (username.match(/\W|^[0-9]|^_|_$/)) {
        console.log('Caracteres inválidos')
        return false
    }

    if (! (username.match(/[A-Za-z]/) && username.match(/[0-9]/) && username.match(/_/)) ) {
        console.log('É necessário um de cada tipo de caractere')
        return false
    }

    const usernameAlreadyExists = database.indexOf(username) !== -1

    if (usernameAlreadyExists) {
        console.log('Nome de usuário já existe')
        return false
    }

    return true
}

console.log(validateUser('52alfred')) // false
console.log(validateUser('erick_14')) // false
console.log(validateUser('josh_g15')) // true
console.log(validateUser('hugo123_')) // false 
console.log(validateUser('k_9')) // false