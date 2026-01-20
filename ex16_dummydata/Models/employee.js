const mongoose = require("mongoose")

const empschema = new mongoose.Schema({
    name :String,
    salary : Number,
    language :String,
    city:String,
    ismanager: Boolean

})

const empmodel = mongoose.model("Employee",empschema)

module.exports = empmodel