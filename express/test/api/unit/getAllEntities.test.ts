import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('GET /api/', () => {
  test('returns status code 200 if can fetch a list of existing entities', async () => {
    console.log(TestSetup.defaultEntityId)

    const res: any = await request(TestSetup.app)
      .get('/api/')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
