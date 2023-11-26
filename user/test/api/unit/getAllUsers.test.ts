import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'
import { SampleUsers } from '../data/users.sample'

describe('GET /user/', () => {
  test('returns status code 200 if can fetch a list of existing user', async () => {
    const res: any = await request(TestSetup.app)
      .get('/user/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns the entire list of user present in the collection', async () => {
    const res: any = await request(TestSetup.app)
      .get('/user/')

    expect(res.body.data.length).toEqual(SampleUsers.length)
  })
})
