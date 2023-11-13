import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'

describe('DELETE /:id', () => {
  test('returns status code 200 if it deletes a given user id', async () => {
    const res: any = await request(TestSetup.app)
      .delete(`/${TestSetup.defaultEntityId}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 500 if it deletes a non-existent user id', async () => {
    const nonExistentId = '4d245ddwdwwdw'
    const res: any = await request(TestSetup.app)
      .delete(`/${nonExistentId}`)

    expect(res.statusCode).toEqual(StatusCode.ServerErrorInternal)
  })

  test('throws error message if it deletes a non-existent user id', async () => {
    const nonExistentId = '4d245ddwdwwdw'
    const res: any = await request(TestSetup.app)
      .delete(`/${nonExistentId}`)
    expect(res.body.status).toEqual(false)
  })
})
