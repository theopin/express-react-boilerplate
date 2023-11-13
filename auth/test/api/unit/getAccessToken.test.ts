import request from 'supertest'
import dotenv from 'dotenv'
import jwt, { type JwtPayload } from 'jsonwebtoken'
import { StatusCode } from 'status-code-enum'

import * as TestSetup from '../test.setup'
import { JwtConstants } from '../../../src/constants/jwt.constants'

dotenv.config()
console.log('test-secret', JwtConstants.refresh.secret)
const sampleValidRefreshToken = jwt.sign({ username: 'tom' }, JwtConstants.refresh.secret, { expiresIn: JwtConstants.refresh.expiresIn as string })
const sampleInvalidRefreshToken = 'lol'

describe('GET /access', () => {
  test('returns status code 200 if valid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 400 if invalid token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/access')
      .set('Authorization', `Bearer ${sampleInvalidRefreshToken}`)
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns status code 400 if no token is supplied', async () => {
    const res: any = await request(TestSetup.app)
      .get('/access')
      .set('Authorization', 'Bearer')
    expect(res.statusCode).toEqual(StatusCode.ClientErrorBadRequest)
  })

  test('returns an accesstoken with valid token', async () => {
    const res: any = await request(TestSetup.app)
      .get('/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    console.log(res.body.data)
    expect(res.body.data.accessToken).toBeDefined()
  })

  test('can deconstruct an attribute from a returned accesstoken', async () => {
    const res: any = await request(TestSetup.app)
      .get('/access')
      .set('Authorization', `Bearer ${sampleValidRefreshToken}`)

    const deconstructedToken = jwt.verify(res.body.data.accessToken, JwtConstants.access.secret) as JwtPayload
    expect(deconstructedToken.username).toEqual('tom')
  })
})
