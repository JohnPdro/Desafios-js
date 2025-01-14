// Desafio 27: Encontrando Conexões --- INCOMPLETO
// Escreva uma função que receba um objeto e retorne uma lista com os valores de todas as ocorrências da propriedade "_id" e "label" em propriedades "connection" e "connections" onde "connection" é um objeto contendo "_id" e "label" e "connections" é um array de "connection".

const results = []

function findConnections(obj) {
    Object.entries(obj).forEach(( [key, value] ) => {
        if (key === 'connection') {
            results.push([value._id, value.label])
        }

        if (key === 'connections') {
            value.forEach(connection => {
                results.push([connection._id, connection.label])
            })
        }

        if (Array.isArray(value)) {
            value.forEach(element => {
                findConnections(element)
            })
        } else if (Object.prototype.toString.call(value) === '[object Object]') {
            findConnections(value)
        }
    })
}

const data0 = require('./27/data-0.json')

findConnections(data0)

console.log(results)