import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        // required:true,
        unique:true,
    },
    email:{
        type:String,
        // required:true,
        unique:true,
    },
    password:{
        type:String,
        // required:true,
    },

}, {timestamps:true})   // timestaps is used to record the time of the info entry which can be used to sort the info according to the time.

const User = mongoose.model('User' , userSchema)

export default User;