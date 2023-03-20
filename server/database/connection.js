const mongoose = require("mongoose")

const connection = async() => {
    try {
        await mongoose.connect("mongodb+srv://appparallax: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@parallax-app.a4vtaqg.mongodb.net/?retryWrites=true&w=majority")
        console.log("La base de datos ha sido conectada correctamente!!!")
    } catch (e) {
        console.log(e)
        throw new Error("No se ha podido conectar a la base de datos!")
    }
}

module.exports = connection