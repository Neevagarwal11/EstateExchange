import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js' 


dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{     //.env used for encryption as it will be ignored by git
    console.log('Connected to MongoDB');
}) 
.catch((err)=>{
    console.log(err)
})


const app = express()

app.listen(3000,()=>{
    console.log("Server running on 3000")
})


app.use('/user' , userRouter)