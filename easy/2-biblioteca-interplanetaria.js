// Desafio 8: Biblioteca Interplanetária
// Escreva uma função que recebe uma string contendo um nome completo e retorna uma string com todos os nomes, exceto o último, abreviados e o último nome em letras maiúsculas antes das abreviações separado por vírgula.

function quotation(fullName) {
    const names = fullName.split(' ')
    let initials = ''

    for (let i = 0; i < names.length - 1; i++) {
        initials += ` ${names[i][0].toUpperCase()}.`
    }

    return `${names[names.length - 1].toUpperCase()},${initials}`
}
console.log(quotation('John Ronald Reuel Tolkien')) // TOLKIEN,J.R.R.
console.log(quotation('christopher james paolini')) // PAOLINI,C.J.