const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true})

UserSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password,10)
        console.log('Hash Password:',hashedPassword)
        next()
    }catch{
        console.log('Error in save',error)
    }
})

UserSchema.virtual('confirmPassword')
.get(()=>this._confirmPassword)
.set(value=>this._confirmPassword = value)

UserSchema.pre('vallidate',function(next){
    if(this.password !==  this.confirmPassword){
        this.invalidate('confirmPassword','Password must match confirmPassword')
    }
    next()
})


module.exports = mongoose.model('User', UserSchema)