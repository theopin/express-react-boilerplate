// import db
import type Database from '../database/interface/database.interface'
import bcrypt from 'bcrypt'
import jwt, { type JwtPayload } from 'jsonwebtoken'

class AuthService {
  async createNewEntity (database: Database, params: any): Promise<any> {
    const createResult = await database.createEntity(params)
    return createResult
  }

  async getEntityById (database: Database, id: string): Promise<any> {
    const getOneResult = await database.getOneEntity(id)
    return getOneResult
  }

  async validatePassword (password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }

  createJwtToken (identifiers: any, tokenSecret: string, tokenExpiry: string): string {
    return jwt.sign(identifiers, tokenSecret, { expiresIn: tokenExpiry })
  }

  validateJwtToken (jwtToken: string, tokenSecret: string): string | JwtPayload {
    return jwt.verify(jwtToken, tokenSecret)
  }
}

export default AuthService
