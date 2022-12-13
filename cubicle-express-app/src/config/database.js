const mongoose = require("mongoose")

function initDatabase(connectionString) {
    mongoose.set('strictQuery', false)
    return mongoose.connect(connectionString)
}


module.exports = initDatabase


