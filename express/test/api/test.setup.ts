import { app } from '../index'
import { SampleEntities } from './entities.sample'

import mongoose from 'mongoose'
const port = 4010

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
  const collection = new ModelObject(SampleEntities[0])

  const saveResult = await collection.save()
  defaultEntityId = saveResult._id
})

const afterEachFunction = afterEach(async () => {
  await ModelObject.deleteMany({})
})

const afterAllFunction = afterAll(async () => {
  await mongoose.disconnect()
  await server.close()
})

export { app, defaultEntityId, beforeAllFunction, beforeEachFunction, afterEachFunction, afterAllFunction }
