import dotenv from 'dotenv'

dotenv.config()

export const JwtConstants: any = {
  refresh: {
    secret: 'Hello',
    expiresIn: '30m'
  },
  access: {
    secret: 'Lol',
    expiresIn: '30m'
  }
}
