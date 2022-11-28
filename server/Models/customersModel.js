const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String, 
    city: String 
})

module.exports = mongoose.model("customer", CustomerSchema)