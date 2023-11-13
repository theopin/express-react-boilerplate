import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import * as TestSetup from '../test.setup'
import { JwtConstants } from '../../../src/constants/jwt.constants'
import jwt from 'jsonwebtoken'

describe('POST /login', () => {
  test('returns status code 201 if it accepts a given entity with appropriate details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '123456' })

    expect(res.statusCode).toEqual(StatusCode.SuccessAccepted)
  })

  test('returns status code 400 if it accepts a given entity with invalid details', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '654321' })

    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns a defined refresh token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '123456' })

    expect(res.body.data.refreshToken).toBeDefined()
  })

  test('returns a defined access token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '123456' })

    expect(res.body.data.accessToken).toBeDefined()
  })

  test('returns a deconstructable refresh token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '123456' })

    const tokenData = jwt.verify(res.body.data.refreshToken, JwtConstants.refresh.secret)

    expect(tokenData).toBeDefined()
  })

  test('returns a deconstructable access token', async () => {
    const res: any = await request(TestSetup.app)
      .post('/login')
      .send({ username: 'shawn', password: '123456' })

    const tokenData = jwt.verify(res.body.data.accessToken, JwtConstants.access.secret)

    expect(tokenData).toBeDefined()
  })
})
