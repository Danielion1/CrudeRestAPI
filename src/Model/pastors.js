const mongoose = require('mongoose')
const validator = require('validator')

const pastorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique:[true, "email already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("this email is not valid")
            }
        }
    },
    branch:{
        type: String,
        required: true
    },
    gatheringattendance:{
        type:Number,
        required:true
    },
    impartationattendace:{
        type: Number,
        required: true
    },
    state:{
        type: String,
        required: true
    },

})

const pastor = new mongoose.model('pastor', pastorSchema);
module.exports = pastor;