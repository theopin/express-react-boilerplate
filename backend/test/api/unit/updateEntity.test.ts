import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('PATCH /backend/:id', () => {
  test('returns status code 200 if it accepts a given entity with appropriate id and details', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/backend/${TestSetup.defaultEntityId}`)
      .send({ password: '654321' })

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns object with updated password if updated successfully', async () => {
    const res: any = await request(TestSetup.app)
      .patch(`/backend/${TestSetup.defaultEntityId}`)
      .send({ password: '654321' })

    expect(res.body.data.password).toEqual('654321')
  })
})
