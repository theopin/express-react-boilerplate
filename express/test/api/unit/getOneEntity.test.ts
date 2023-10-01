import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('GET /api/:id', () => {
  test('returns status code 200 if it gets a given entity id', async () => {
    const res: any = await request(TestSetup.app)
      .get(`/api/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
