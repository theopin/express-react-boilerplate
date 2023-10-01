import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('PATCH /api/:id', () => {
  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/api/${TestSetup.defaultEntityId}`)
      .send({ password: '654321' })

    // check data @ res.body
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/api/${TestSetup.defaultEntityId}`)
      .send({ password: '654321' })

    console.log(res.body)

    // check data @ res.body
    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
