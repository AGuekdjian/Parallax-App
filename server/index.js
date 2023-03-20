const connection = require('./database/connection')
const express = require('express')
const cors = require('cors')

console.log("API Node Iniciada!!!")

connection();

const app = express()
const port = 3900

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const ClientRoutes = require('./routes/client')

app.use('/api/client', ClientRoutes)

app.get("/ruta-prueba", (req, res) => {
    return res.status(200).json(
        {
            "id": 1,
            "nombre": "Anthony",
            "web": "anthonyguekdjian.vercel.app"
        }
    )
})

app.listen(port, () => {
    console.log("Server of node is run in port: ", port)
})