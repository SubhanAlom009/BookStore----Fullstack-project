import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import apiRouter from './route/Book.route.js'
import userRoute from './route/User.route.js'
import cors from 'cors'


const app = express();
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 8000


try {
    await mongoose.connect(`${process.env.MONGODB_URI}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("MongoDB connected")
} catch (error) {
    console.log("MongoDB connection error",error)
}


// routes
app.use('/api/books',apiRouter)
app.use('/user',userRoute)


app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})