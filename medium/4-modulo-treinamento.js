// Desafio 18: Módulo de Treinamento
// Escreva uma Classe Equation que seja capaz de lidar com uma equação até o segundo grau.
// Os objetos podem ser instanciados com valores padrõres para a = 0, b = 0 e c = 0.
// Ela deve ter um método para retornar suas raízes na forma de um array vazio, deum ou de dois elementos.
// O método também deve descrever os passos para a resolução da equação.
// Se a, b e c forem todos iguais a 0 ela não deve calcular as raízes e deve retornar uma mensagem de erro.

class Equation {
    constructor(a = 0, b = 0, c = 0) {
        this.a = a
        this.b = b
        this.c = c
    }

    getRoots() {
        if (this.a === 0 && this.b === 0 && this.c === 0) {
            return 'Erro! Nenhum parâmetro informado.'
        }

        if (this.a === 0 && this.b === 0) {
            console.log('1. Parâmetros insulficientes. \nNenhuma raiz.')
            return []
        }

        if (this.a === 0) {
            console.log(`1. ${this.b}x + ${this.c} = 0`)
            console.log(`2. ${this.b}x = ${this.c * -1}`)
            console.log(`3. x = ${this.c * - 1} / ${this.b}`)
            console.log(`4. x = ${(this.c * - 1) / this.b}`)

            return [(this.c * - 1) / this.b]
        }

        const delta = this.b ** 2 - (4 * this.a * this.c)
        console.log(`1. DELTA = ${this.b}² - 4 * ${this.a} * ${this.c}`)
        console.log(`2. DELTA = ${delta}`)

        if (delta < 0) {
            console.log(`DELTA < 0\nNenhuma raiz.`)

            return []
        }

        console.log(`3. x = ( - (${this.b}) + RAIZ${delta}) / 2 * ${this.a}`)
        console.log(`4. x = ( - (${this.b}) - RAIZ${delta}) / 2 * ${this.a}`)
        console.log(`5. x = ${this.b * - 1} + RAIZ${delta} / ${this.a * 2}`)
        console.log(`6. x = ${this.b * - 1} - RAIZ${delta} / ${this.a * 2}`)

        const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a)
        const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a)

        if(Number.isInteger(Math.sqrt(delta))) {
            console.log(`7. x = ${this.b * - 1} + ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`8. x = ${this.b * - 1} - ${Math.sqrt(delta)} / ${this.a * 2}`)
            console.log(`9. x = ${x1}`)
            console.log(`10. x = ${x2}`)
        }

        return x1 === x2 ? [ x1 ] : [ x1, x2 ]

    }
}

const eq1 = new Equation(0, 2, 6)
const eq2 = new Equation()
const eq3 = new Equation(0, 0, 5)
const eq4 = new Equation(1, -4, -5)

console.log(eq1.getRoots()) // 1. 2x + 6 = 0
// 2. 2x = -6 
// 3. x = -6 / 2 
// 4. x = -3 
// [-3] 
console.log(eq2.getRoots()) // Erro! Nenhum parâmetro informado
console.log(eq3.getRoots()) // 1. Parâmetros insuficientes
// Nenhuma raiz real
// []
console.log(eq4.getRoots()) // 1. DELTA = -4² - 4 * 1 * -5
// 2. DELTA = 36
// 3. x¹ = (-(-4) + RAIZ36) / 2 * 1
// 4. x² = (-(-4) + RAIZ36) / 2 * 1
// 5. x¹ = 4 + RAIZ36 / 2
// 6. x² = 4 - RAIZ36 / 2
// 7. x¹ = 4 + 6 / 2
// 8. x² = 4 - 6 / 2
// 9. x¹ = 5
// 10. x² = -1
// [5, -1]