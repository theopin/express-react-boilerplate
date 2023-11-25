import request from 'supertest'
import { StatusCode } from 'status-code-enum'

const baseEndpoint = 'http://localhost:8080/'

describe('GET /health', () => {
  test('returns status code 200 if it is able to redirect to the user health endpoint', async () => {
    const res: any = await request(baseEndpoint + 'user')
      .get('/user/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 200 if it is able to redirect to the auth health endpoint', async () => {
    const res: any = await request(baseEndpoint + 'auth')
      .get('/auth/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })

  test('returns status code 200 if it is able to redirect to the backend health endpoint', async () => {
    const res: any = await request(baseEndpoint + 'backend')
      .get('/backend/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
