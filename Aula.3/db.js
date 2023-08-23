const Sequelize = require('sequelize')
const sequelize = new Sequelize('bazante', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function (){
    console.log("conectado com sucesso!")
}).catch(function (erro){
    console.log("Puts, não consegui conectar por causa desse erro aqui, " +erro)
})

module.exports = sequelize;