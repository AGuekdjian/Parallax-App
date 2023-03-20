// Importacion de el modelo de cliente de la base de datos
const Client = require('../models/client')

// Ruta de prueba
const pruebaClient = (req, res) => {
    return res.status(200).send({
        message: "Prueba de ruta cliente"
    })
}

// Registro de clientes
const registerClient = (req, res) => {
    return res.status(200).send({
        message: "Prueba de registro cliente"
    })
}

module.exports = {
    pruebaClient,
    registerClient
}