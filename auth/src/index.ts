import express, { type Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import AuthRouter from './routes/auth.route'

import type Database from './database/interface/database.interface'
import { createDatabaseObject } from './database/factory/databaseFactory'

dotenv.config()

const app: Express = express()
const port = process.env.PORT ?? 4002

const database: Database = createDatabaseObject(Number(process.env.DATABASE_TYPE), String(process.env.DATABASE_CONNECTION_URL))

database.connect()
  .catch((error) => {
    console.log(error)
  })
app.set('database', database)

app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', AuthRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
