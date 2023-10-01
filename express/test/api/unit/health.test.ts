import request from 'supertest'
import { StatusCode } from 'status-code-enum'

import { app } from '../../index'
import mongoose from 'mongoose'

const port = 4010

let server: any

beforeAll(() => {
  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

afterAll(async () => {
  await mongoose.disconnect()
  await server.close()
})

describe('GET /api/health', () => {
  test('returns status code 200 if api is set up correctly', async () => {
    const res: any = await request(app)
      .get('/api/health')

    expect(res.statusCode).toEqual(StatusCode.SuccessOK)
  })
})
