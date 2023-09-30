import request from 'supertest'
import mongoose from 'mongoose'
import { StatusCode } from 'status-code-enum'

import { app } from '../index'

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
})

afterAll(async () => {
  await mongoose.disconnect()
  server.close()
})

describe('GET /api/health', () => {
  it('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(app)
      .get('/api/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})

describe('POST /api/', () => {
  it('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(app)
      .post('/api/')
      .send(Entities[1])

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })
})

describe('GET /api/', () => {
  it('returns status code 200 if can fetch a list of existing entities', async () => {
    const res: any = await request(app)
      .get('/api/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})

describe('GET /api/:id', () => {
  it('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(app)
      .get(`/api/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})

describe('PATCH /api/:id', () => {
  it('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(app)
      .patch(`/api/${defaultEntityId}`)
      .send({ password: '654321' })

    // check data @ res.body
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})

describe('DELETE /api/:id', () => {
  it('returns status code 200 if it deletes a given entity id', async () => {
    const res: any = await request(app)
      .delete(`/api/${defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
