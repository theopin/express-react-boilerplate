import request from 'supertest'
import mongoose from 'mongoose'
import { StatusCode } from 'status-code-enum'

import { app } from '../../index'

const port = 4010

const Entities = [
  {
    email: 'test@test.com',
    username: 'shawn',
    password: '123456'
  },
  {
    email: 'test@test1.com',
    username: 'john123',
    password: '211322'
  }
]

let defaultEntityId: string = ''
let server: any
let ModelObject: any

beforeAll(() => {
  ModelObject = mongoose.models.Entity

  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

beforeEach(async () => {
  const collection = new ModelObject(Entities[0])

  const saveResult = await collection.save()
  defaultEntityId = saveResult._id
})

afterEach(async () => {
  await ModelObject.deleteMany({})
  await server.close()
})

afterAll(async () => {
  await mongoose.disconnect()
  await server.close()
})
describe('PATCH /api/:id', () => {
  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(app)
      .patch(`/api/${defaultEntityId}`)
      .send({ password: '654321' })

    // check data @ res.body
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
