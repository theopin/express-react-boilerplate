import express, { type Express } from 'express'

import EntityRouter from '../src/routes/entity.route'
import { entitySchema, entityModelName } from '../src/models/entity.model'

import type Database from '../src/database/interface/database.interface'
import MongoDb from '../src/database/mongodb/mongodb'

export const app: Express = express()

const database: Database = new MongoDb(entitySchema, entityModelName)

database.connect()
  .catch((error) => {
    console.log(error)
  })
app.set('database', database)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', EntityRouter)
