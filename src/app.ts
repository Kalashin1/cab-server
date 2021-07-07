import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import router from './Router/router'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT, () => console.log(`App is running on ${process.env.PORT}. Visit http://localhost:${process.env.PORT}`))