// Desafio 14: Licença de Voo
// Escreva uma classe que contenha um método para gerar uma licença de voo e os seguintes atributos: Nome, Sobrenome, Data de Nascimento, Licença de Voo(que deve iniciar sempre como false)
// Além disso a classe deve possuir um método para criar uma licença caso a pessoa ainda não possua uma. A licença deve ser uma string seguindo o seguinte padrão:
// Os primeiros cinco caracteres do sobrenome em letras maiúscuas(completado com 9's caso possua menos de cinco)
// O 6° caractere é um traço (-)
// O 7° caractere é o algarismo da década (penúltimo) do ano de nascimento
// O 8° e 9° caracteres são o mês de nascimento
// O 10° caractere é o algarismo do ano (último) do ano de nascimento
// O 11° caractere é um ponto (.)
// O 12° caractere é a primeira letra do primeiro nome (minúscula)

class Pilot {
    constructor(firstName, lastName, birthday) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthday = new Date(birthday)
        this.flyingLicense = false
    }

    generateFlyingLicense() {
        let license = ''

        for (let i = 0; i < 5; i++) {
            license += this.lastName[i] ? this.lastName[i].toUpperCase() : '9'
        }

        license += '-'
        license += this.birthday.getFullYear().toString()[2]
        license += this.getBirthdayFullMonth()
        license += this.birthday.getFullYear().toString()[3]
        license += '.'
        license += this.firstName[0].toLowerCase()

        this.flyingLicense = license
    }

    getBirthdayFullMonth() {
        if (this.birthday.getMonth() < 9) {
            return `0${this.birthday.getMonth() + 1}`
        } else {
            return `${this.birthday.getMonth() + 1}`
        }
    }
}

const pilot1 = new Pilot('John', 'Doe', '05-25-1977')
const pilot2 = new Pilot('Hal', 'Jordan', '09-02-1995')

pilot1.generateFlyingLicense()
pilot2.generateFlyingLicense()

console.log(pilot1) // Pilot { 
// fitstName: 'John',
// lastName: 'Doe'
// birthday: 1977-05-25T03:00:00.000Z
// flyingLicense: 'DOE99-7057.j'
//}
console.log(pilot2) // Pilot { 
// fitstName: 'Hal',
// lastName: 'Jordan'
// birthday: 1995-09-02T03:00:00.000Z
// flyingLicense: 'JORDA-9095.h'
//}