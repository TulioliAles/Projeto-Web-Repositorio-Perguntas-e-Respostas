const Sequelize = require('sequelize')

const connection = new Sequelize('guia_perguntas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection
