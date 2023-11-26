import request from 'supertest'
import dotenv from 'dotenv'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'
import { JwtConstants } from '../../../src/constants/jwt.constants'
import jwt from 'jsonwebtoken'

dotenv.config()
const sampleValidRefreshToken = jwt.sign({ username: 'tom' }, JwtConstants.refresh.secret, { expiresIn: JwtConstants.refresh.expiresIn })
const sampleInvalidRefreshToken = 'lol'

describe('GET /auth/access', () => {
  test('returns status code 200 if valid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 400 if invalid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleInvalidRefreshToken}`)
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns status code 400 if no token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', 'Bearer')
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('can deconstruct an attribute from a returned accesstoken', async () => {
    const res: any = await request(TestSetup.app)
      .get('/auth/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    const deconstructedToken: any = jwt.verify(res.body.data.accessToken, JwtConstants.access.secret)
    expect(deconstructedToken.username).toEqual('tom')
  })
})
