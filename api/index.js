import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGOURI).then(() =>{console.log(`Connected to MongoDB`)}).catch((e) =>{
    console.log(e )
})

app.listen(5000, () =>{
    console.log(`Server is running on PORT 5000`)
})