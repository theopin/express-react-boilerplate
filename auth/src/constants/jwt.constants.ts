import dotenv from 'dotenv'

dotenv.config()

export const JwtConstants: any = {
  refresh: {
    secret: 'Hello',
    expiresIn: '1h'
  },
  access: {
    secret: 'Lol',
    expiresIn: '1h'
  }
}
