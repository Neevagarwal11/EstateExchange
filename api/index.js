import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/userRoute.js' 
import authRouter from './routes/authRoute.js'

const app = express()
app.use(express.json())
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>{     //.env used for encryption as it will be ignored by git
    console.log('Connected to MongoDB');
}) 
.catch((err)=>{
    console.log(err)
})



app.listen(3000,()=>{
    console.log("Server running on 3000")
})


app.use('/user' , userRouter)
app.use('/auth' , authRouter)