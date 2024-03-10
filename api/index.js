import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGOURI).then(() =>{console.log(`Connected to MongoDB`)}).catch((e) =>{
    console.log(e )
})

app.listen(5000, () =>{
    console.log(`Server is running on PORT 5000`)
})


app.get('/' , (req, res) =>{
res.json({
    message : "Hello World"
})
})

import userRoutes from './routes/user.routes.js'
import authroutes from './routes/auth.routes.js'

app.use("/api/user", userRoutes)
app.use("/api/auth", authroutes)

app.use((error, req, res, next) =>{
const statusCode = error.statusCode || 500;
const message = error.message || "Internal Server Error"
return res.status(statusCode).json({
    success: true,
    message,
    statusCode
})
})