import { app } from '../index'
import { SampleEntities } from './data/entities.sample'

import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const port = 4102

let defaultEntityId: string = ''
let server: any
let ModelObject: any

const beforeAllFunction = beforeAll(() => {
  ModelObject = mongoose.models.Entity

  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

const beforeEachFunction = beforeEach(async () => {
  const copiedEntities = JSON.parse(JSON.stringify(SampleEntities))

  for (const element of copiedEntities) {
    element.password = await bcrypt.hash(element.password, 10)
  }

  const modelInstances = copiedEntities.map((data: any) => new ModelObject(data))

  const saveResult = await ModelObject.insertMany(modelInstances)
  defaultEntityId = saveResult[0]._id
})

const afterEachFunction = afterEach(async () => {
  await ModelObject.deleteMany({})
})

const afterAllFunction = afterAll(async () => {
  await mongoose.disconnect()
  await server.close()
})

export { app, defaultEntityId, beforeAllFunction, beforeEachFunction, afterEachFunction, afterAllFunction }
