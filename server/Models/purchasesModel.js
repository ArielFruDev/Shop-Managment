const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema({
    customerID: String,
    productID: String, 
    date: String 
})

module.exports = mongoose.model("Purchase", PurchaseSchema)