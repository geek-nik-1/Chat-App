import express from 'express'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js"

const app = express()
import {connectDB} from './lib/db.js'

dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)


app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
    connectDB()
})