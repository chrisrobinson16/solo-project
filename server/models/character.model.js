const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!!!"],
        minLength:[2,"Name must be atleast two characters!!!"]
    },
    skill:{
        type:String,
        required:[true,"Skill is required"],
        minLength:[2,"Skill must be atleast two characters!!!"]
    }


},{timestamps:true})

const Character = mongoose.model('Character',CharacterSchema)

module.exports = Character