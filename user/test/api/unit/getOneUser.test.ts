import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'
import { SampleUsers } from '../data/users.sample'

describe('GET /:id', () => {
  test('returns status code 200 if it gets a given user id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns an object containing the email of the user requested', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/${TestSetup.defaultEntityId}`)

    expect(res.body.data.email).toEqual(SampleUsers[0].email)
  })
})
