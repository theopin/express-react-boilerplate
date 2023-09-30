import request from 'supertest'
import dotenv from 'dotenv'

import { app } from '../index'

dotenv.config()
const port = process.env.TEST_PORT ?? 4010

// group test using describe
let server: any

beforeAll(() => {
  server = app.listen(port, () => {
    console.log(`[test]: Server is running at http://localhost:${port}`)
  })
})

describe('GET /api/health', () => {
  it('returns status code 200 if api is set up correctly', async () => {
    const res = await request(app)
      .get('/api/health')

    // toEqual recursively checks every field of an object or array.
    expect(res.statusCode).toEqual(200)
  })
})

afterAll((done) => {
  server.close(done)
})
