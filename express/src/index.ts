import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import EntityRouter from './routes/entity.route'
import type Database from './database/interface/database.interface'
import MongoDb from './database/mongodb/mongodb'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 4000
const database: Database = new MongoDb({ num: 'number' }, 'Tank')

database.connect()

app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', EntityRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
