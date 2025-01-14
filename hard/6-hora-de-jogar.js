// Desafio 28: Hora de Jogar
// Escreva uma classe que calcula e mantém informações sobre exploradores, como seus nível e habilidades. Ela precisará obedecer aos seguintes requisitos:

// Sobre o nível:
// Um explorador começa no nível 1 e pode evoluir até o nível 99.
// O explorador não deve subir de nível após o nível 99, mas pode acumular pontos de experiência.
// Para subir de nível o explorador deve acumular 100 pontos + 10 pontos * o seu nível atual para cada nível (ex.: Nv. 1: 110 pts, Nv.2: 120 pts, Nv. 3: 130 pts, etc).
// Para aumentar o seu nível um explorador deve ganhar pontos de experiência através da ação de explorar.
// Os pontos de experiência devem se manter acumulados mesmo após subir de nível.
// Classificação dos Exploradores
// Para classificar os exploradores em seis diferentes patentes: "Novato", "Explorador", "Veterano", "Elite", "Mestre" e "Lenda" (ou qualquer outra nomenclatura preferida). A classificação deve seguir esta ordem:
// 1-9: Novato
// 10-29: Explorador
// 30-49: Veterano
// 50-79: Elite
// 80-98: Mestre
// 99: Lenda

// Requisitos de Exploração
// Para a ação de explorar, é necessário seguir as seguintes condições:
// A ação de explorar requer um planeta a ser explorado.
// O planeta a ser explorado deve ter um ID, um nome, um nível de hostilidade (variando de pacífico, neutro a hostil) e um tipo de terreno (ex.: deserto, floresta, montanhoso, subaquático, etc.).
// Um explorador morto não pode explorar.
// Deve ser possível saber todos os planetas que um explorador explorou com sucesso.

// Sobre o resultado:
// A ação de explorar pode ser bem sucedida ou falhar. Para determinar o resultado vai ser preciso simular um "rolar de dados", sorteando dois números aleatórios entre 1 e 6, com resultados entre 2 e 12.
// Resultados entre 5 e 12 garantem sucesso em planetas pacíficos.
// Resultados entre 7 e 12 garantem sucesso em planetas neutros.
// Resultados entre 9 e 12 garantem sucesso em planetas hostis.
// Resultado 2 (dois números 1) em planetas hostis o explorador morre (mas não deve ser excluído).
// Após 3 resultados 12 (dois números 6) em planetas de um mesmo terreno o explorador se torna um especialista naquele terreno e recebe um bônus de +1 no resultado dos dados.
// Esse bônus impede que ele morra em caso de falha crítica e aumenta as chances de sucesso.
// Só é possível acumular esse bônus uma vez.

// Sobre os pontos de experiência
// Em caso de sucesso na ação de explorar o Explorer deve receber pontos de experiência de acordo com o seguinte:
// 15 pts - Planeta pacífico
// 25 pts - Planeta neutro
// 50 pts - Planeta hostil
// Em caso de falha na ação de explorar o Explorer deve receber pontos de experiência de acordo com o seguinte:
// 0 pts - Planeta pacífico
// 0 pts - Planeta neutro
// 10 pts - Planeta hostil

class Explorer {
    constructor(name) {
        this.name = name
        this.level = 1
        this.experience = 0
        this.expToNextLevel = 110
        this.knownPlanets = []
        this.terrainExpertise = {}
        this.alive = true
    }

    get rank() {
        if (this.level < 10) return 'Newbie'
        if (this.level < 30) return 'Explorer'
        if (this.level < 50) return 'Veteran'
        if (this.level < 80) return 'Elite'
        if (this.level < 99) return 'Master'
        return 'Legend'
    }

    static explorationHandler = {
        pacific: (diceResult) => diceResult >= 5 ? 15 : 0,
        neutral: (diceResult) => diceResult >= 7 ? 25 : 0,
        hostile: (diceResult) => diceResult >= 9 ? 50 : 10,
    }

    gainExperience(pts) {
        this.experience += pts

        if (this.level === 99) {
            return
        }

        if (pts < this.expToNextLevel) {
            this.expToNextLevel -= pts
            return
        }

        this.level++

        const newExpToNextLevel = 100 + (10 * this.level) - (pts - this.expToNextLevel)

        this.expToNextLevel = this.level !== 99 ? newExpToNextLevel : 0

        console.log(`Level up! You're now level ${this.level}. Experience to next level: ${this.expToNextLevel}`)
    }

    explore(planet) {
        if (!this.alive) {
            console.log('You are dead.')
            return
        }

        const { id, hostility, terrain } = planet

        const dice1 = Math.floor(1 + Math.random() * 6)
        const dice2 = Math.floor(1 + Math.random() * 6)

        const bonus = this.terrainExpertise[terrain] > 2 ? 1 : 0
        const dices = dice1 + dice2 + bonus

        console.log(`Rolled ${dice1} and ${dice2} ${bonus ? '+1 bonus' : ''}`)

        if (dices === 12) {
            this.terrainExpertise[terrain] == this.terrainExpertise[terrain] + 1 || 1
        }

        if (dices === 2 && hostility === 'hostile') {
            console.log('You died.')
            this.alive = false
            return
        }

        const handler = Explorer.explorationHandler[hostility]
        const obtainExp = handler(dices)

        this.gainExperience(obtainExp)

        if (obtainExp > 10) {
            const planetAlreadyExplored = this.knownPlanets.find(planet => planet.id === id)

            if (!planetAlreadyExplored) {
                this.knownPlanets.push(planet)
            }
            
            console.log(`Success! Earned ${obtainExp} pts.`)
        } else {
            console.log(`Failure! Earned ${obtainExp} pts.`)
        }
    }
}

const john = new Explorer('John')

const tatooine = { id: 1, name: 'tatooine', hostility: 'hostile', terrain: 'desert'}
const yavin = { id: 1, name: 'yavin', hostility: 'pacific', terrain: 'forest'}
const hoth = { id: 1, name: 'hoth', hostility: 'neutral', terrain: 'snow'}
const endor = { id: 1, name: 'endor', hostility: 'neutral', terrain: 'forest'}

setInterval(() => {
    john.explore(tatooine)
    john.explore(yavin)
    john.explore(hoth)
    john.explore(endor)

    console.log(john)
}, 1000 * 5)