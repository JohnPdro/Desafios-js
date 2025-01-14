// Desafio 29: Labirintos Subterrâneos
// Escreva um programa capaz de receber uma matriz bidimensional composta de caminhos livres, bloqueados, a entrada e a saída do labirinto, e verifique se é possível chegar do início até o fim apenas utilizando movimentos horizontais e verticais e também qual é o caminho mais curto para isso.
// A representação dos valores será feita com espaços (" "), tralhas ("#"), um começo ("S") e um fim ("E"), mas fique à vontade para nomeá-las como preferir.

class Position {
    constructor(row, col, value) {
        this.label = `(${row}, ${col})`
        this.row = row
        this.col = col
        this.value = value
        this.neighbors = []
    }

    connect(position) {
        if (!this.isNeighbor(position)) {
            this.neighbors.push(position)
            position.neighbors.push(this)
        }
    }

    getNeighbors() {
        return this.neighbors
    }

    isNeighbor(position) {
        return !!this.neighbors.find(neighbor => neighbor.row === position.row && neighbor.col === position.col)
    }
}

class Maze {
    constructor(grid = [[]]) {
        this.grid = grid
        this.rows = grid.length
        this.cols = grid[0].length

        this.positions = []
        this.generateGraph()

        this.start = this.positions.find(pos => pos.value === 'S')
        this.end = this.positions.find(pos => pos.value === 'E')
    }

    generateGraph() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.positions.push(new Position(i, j, this.grid[i][j]))
            } 
        }

        this.connectNeighbors()
    }

    connectNeighbors() {
        const rowDirections = [-1, 1, 0, 0]
        const colDirections = [0, 0, -1, 1]

        this.positions.forEach(position => {

            for (let i = 0; i < 4; i++) {
                const rowIndexToMove = position.row + rowDirections[i]
                const colIndexToMove = position.col + colDirections[i]

                const isOutOfBounds = rowIndexToMove < 0 || rowIndexToMove >= this.rows || colIndexToMove < 0 || colIndexToMove >= this.cols

                if (!isOutOfBounds) {
                    const neighbor = this.positions.find(pos => pos.row === rowIndexToMove && pos.col === colIndexToMove)
                    position.connect(neighbor)
                }
            }
        })
    }

    breadthFirstSearch() {
        const queue = [this.start]
        const walkedPositions = {}

        walkedPositions[this.start.label] = null

        while (queue.length > 0) {
            const position = queue.shift()

            if (position.value === 'E') {
                console.log('Found the exit!')
                return this.reconstructPath(walkedPositions, position)
            }

            position.getNeighbors().forEach(neighbor => {
                if (neighbor.value !== '#' && !walkedPositions.hasOwnProperty(neighbor.label)) {
                    walkedPositions[neighbor.label] = position
                    queue.push(neighbor)
                }
            })
        }

        return 'No way out!'
    }

    reconstructPath(walkedPositions, end) {
        let currentPosition = end
        const shortestPath = []

        while (currentPosition !== null) {
            shortestPath.unshift(currentPosition.label)
            currentPosition = walkedPositions[currentPosition.label]
        }

        return shortestPath
    }
}

const labyrinth = [
    ['#', ' ', ' ', ' ', ' ', '#', ' '],
    [' ', 'S', ' ', ' ', '#', ' ', ' '],
    [' ', ' ', '#', ' ', ' ', '#', ' '],
    [' ', '#', ' ', ' ', ' ', '#', 'E'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['#', '#', ' ', ' ', '#', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
]

const labyrinth2 = [
    ['E', ' ', ' ', ' '],
    ['#', ' ', '#', ' '],
    [' ', ' ', ' ', ' '],
    [' ', '#', '#', ' '],
    [' ', ' ', '#', ' '],
    ['#', ' ', '#', ' '],
    [' ', ' ', '#', ' '],
    [' ', ' ', ' ', 'S'],
]

const labyrinth3 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'S', ' ', ' '],
    [' ', '#', '#', ' ', ' '],
    [' ', '#', 'E', '#', ' '],
    [' ', '#', ' ', '#', ' '],
    [' ', ' ', ' ', '#', ' '],
    [' ', ' ', ' ', ' ', ' '],
]

const labyrinth4 = [
    [' ', '#', '#', 'S', '#', '#', '#'],
    ['#', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', ' ', '#', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', '#', ' ', '#', ' ', ' ', '#'],
    ['#', '#', ' ', ' ', ' ', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', '#', '#'],
    ['#', ' ', ' ', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', ' ', ' ', '#'],
    ['#', '#', ' ', ' ', '#', ' ', '#'],
    ['#', '#', '#', '#', '#', 'E', '#'],
]

const maze1 = new Maze(labyrinth)
// console.log(maze1)
console.log(maze1.breadthFirstSearch()) // ['(1, 1)', '(1, 2)', '(1, 3)', '(2, 3)', '(3, 3)', '(4, 3)', '(4, 3)', '(4, 4)', '(4, 4)', '(4, 5)', '(4, 6)', '(3, 6)']

const maze2 = new Maze(labyrinth2)
// console.log(maze2)
console.log(maze2.breadthFirstSearch()) // ['(7, 3)', '(6, 3)', '(5, 3)', '(4, 3)', '(3, 3)', '(2, 3)', '(1, 3)', '(0, 3)', '(0, 2)', '(0, 1)', '(0, 0)']

const maze3 = new Maze(labyrinth3)
// console.log(maze3)
console.log(maze3.breadthFirstSearch()) // ['(1, 2)', '(1, 1)', '(1, 0)', '(2, 0)', '(3, 0)', '(4, 0)', '(5, 0)', '(5, 1)', '(5, 2)', '(4, 2)', '(3, 2)']


const maze4 = new Maze(labyrinth4)
// console.log(maze4)
console.log(maze4.breadthFirstSearch()) // ['(0, 3)', '(1, 3)', '(1, 2)', '(2, 2)', '(2, 1)', '(3, 1)', '(4, 1)', '(5, 1)', '(5, 2)', '(6, 2)', '(7, 2)', '(8, 2)', '(8, 1)', '(9, 1)', '(10, 1)', '(11, 1)', '(11, 2)', '(11, 3)', '(11, 4)', '(11, 5)', '(12, 5)', '(13, 5)']