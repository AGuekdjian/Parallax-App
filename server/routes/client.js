const express = require("express")
const router = express.Router()
const ClientController = require('../controllers/client')

router.get('/pruebaClient', ClientController.pruebaClient)
router.post('/registerClient', ClientController.registerClient)

module.exports = router