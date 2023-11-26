import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('POST /user/', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/user/')
      .send({ email: 'test@testing.com', username: 'tom', password: 'jerry' })

    expect(res.statusCode).toEqual(StatusCode.SuccessCreated)
  })

  test('returns a data of a user object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/user/')
      .send({ email: 'test@testing.com', username: 'tom', password: 'jerry' })

    expect(res.body.data._id).toBeDefined()
  })

  test('returns a data of a user object', async () => {
    const res: any = await request(TestSetup.app)
      .post('/user/')
      .send({ email: 'test@testing.com', username: 'tom', password: 'jerry' })

    expect(res.body.data.password).not.toEqual('jerry')
  })
})
