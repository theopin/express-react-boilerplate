import dotenv from 'dotenv'

dotenv.config()

export const JwtConstants: any = {
  refresh: {
    secret: 'Hello',
    expiresIn: 1800 // 1/2 hour
  },
  access: {
    secret: 'Lol',
    expiresIn: 900 // 15 min
  }
}
