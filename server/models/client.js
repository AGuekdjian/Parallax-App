const {Schema, model} = require("mongoose")

const ClientSchema = Schema({
    client: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    family: {
        type: String,
    },
    article: {
        type: String,
        required: true
    },
    contractName: {
        type: String,
    },
    quantity: {
        type: Number,
        required: true
    },
    currencyType: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number
    },
    comments: {
        type: String
    },
    companyName: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = model("Client", ClientSchema, "clients")