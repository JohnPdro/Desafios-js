// Desafio 21: Sistema de Localização 
// Escreva uma classe que seja capaz de armazenar 3 coordenadas, determinar o setor em que seencontram suas coordenadas e sua distância em relação à estação espacial(coordenada[0, 0, 0]).
// Distribuição dos setores:
// Alfa:[+++]
// Beta:[++-]
// Gama:[+-+]
// Delta:[+--]
// Épsilon:[-++]
// Zeta:[-+-]
// Sigma:[--+]
// Ômega:[---]

class Location {
    constructor(x, y, z) {
        this.coordinates = [x, y, z]
    }

    static sectors = {
        '+++': 'Alfa',
        '++-': 'Beta',
        '+-+': 'Gama',
        '+--': 'Delta',
        '-++': 'Épsilon',
        '-+-': 'Zeta',
        '--+': 'Sigma',
        '---': 'ômega',
    }

    getSector() {
        const signs = this.coordinates.map(coord => coord >= 0 ? '+' : '-').join('')
        return Location.sectors[signs]
    }

    getDistance() {
        return Math.sqrt(this.coordinates.reduce((accum, coord) => accum + (coord ** 2), 0))
    }
}

const point1 = new Location(37, 42, 15)
const point2 = new Location(144, 49, 0)
const point3 = new Location(-37, 0, 0)
const point4 = new Location(-19, -80, -32)

console.log(point1.getSector(), `\nDistance: ${point1.getDistance()} units`) // Saída setor: Alfa, Saída distância: 57.94825277780168
console.log(point2.getSector(), `\nDistance: ${point2.getDistance()} units`) // Saída setor: Alfa, Saída distância: 152.10851389715174
console.log(point3.getSector(), `\nDistance: ${point3.getDistance()} units`) // Saída setor: Épsilon, Saída distância: 37
console.log(point4.getSector(), `\nDistance: ${point4.getDistance()} units`) // Saída setor: Delta, Saída distância: 88.23264701911646
