const mongoose = require("mongoose");
const Schema = mongoose.Schema



const problemSchema = new Schema({

    type:{
        type:String
    },
    city:{
        type:String
    },
    adres:{
        type:String
    },
    problem:{
        type:String
    },
    image:{
        type:String
    },
})

const Problem = mongoose.model('Problem', problemSchema )

module.exports = Problem