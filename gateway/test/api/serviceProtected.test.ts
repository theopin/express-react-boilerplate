import request from 'supertest'
import { StatusCode } from 'status-code-enum'
import { JwtConstants } from '../constants/jwt.constants'
import jwt from 'jsonwebtoken'

const baseEndpoint = 'http://localhost:8080'

const sampleAccessToken = jwt.sign({ username: 'tom' }, JwtConstants.access.secret, { expiresIn: JwtConstants.access.expiresIn })
console.log(sampleAccessToken)

describe('GET /backend', () => {
  test('returns status code 200 if it is able to redirect to the backend protected endpoint with valid access token', async () => {
    const res: any = await request(baseEndpoint + '/product')
      .get('/')
      .set('Authorization', `Bearer ${sampleAccessToken}`)

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns backend response with valid access token', async () => {
    const res: any = await request(baseEndpoint + '/product')
      .get('/')
      .set('Authorization', `Bearer ${sampleAccessToken}`)

    expect(res.body.status).toEqual(true)
  })

  test('returns status code 500 if it is able to throw error to the backend protected endpoint with invalid access token', async () => {
    const res: any = await request(baseEndpoint + '/product')
      .get('/')
      .set('Authorization', `Bearer ${'lol'}`)

    expect(res.statusCode).toEqual(StatusCode.ServerErrorInternal)
  })

  test('returns status code 500 if it is able to throw error to the backend protected endpoint without access token', async () => {
    const res: any = await request(baseEndpoint + '/product')
      .get('/')
      .set('Authorization', 'Bearer')

    expect(res.statusCode).toEqual(StatusCode.ServerErrorInternal)
  })
})
