import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('POST /', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/')
      .send({ email: 'test@testing.com', username: 'tom', password: 'jerry' })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a created object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/')
      .send({ email: 'test@testing.com', username: 'tom', password: 'jerry' })

    expect(res.body.data._id).toBeDefined()
  })
})
