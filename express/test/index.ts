import express, { type Express } from 'express'
import dotenv from 'dotenv'

import EntityRouter from '../src/routes/entity.route'
// import EntityRouter from './routes/entity.route'

// import type Database from './database/interface/database.interface'
// import MongoDb from './database/mongodb/mongodb'

dotenv.config()

export const app: Express = express()
const port = process.env.TEST_PORT ?? 4010

// const database: Database = new MongoDb({ num: 'number' }, 'Tank')

// database.connect()
//   .catch((error) => {
//     console.log(error)
//   })
// app.set('database', database)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', EntityRouter)

