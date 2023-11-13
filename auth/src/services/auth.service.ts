// import db
import type Database from '../database/interface/database.interface'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class AuthService {
  async createNewEntity (database: Database, params: any): Promise<any> {
    const createResult = await database.createEntity(params)
    return createResult
  }

  async getEntityByUsername (database: Database, username: string): Promise<any> {
    const getOneResult = await database.getOneEntityByUsername(username)
    return getOneResult
  }

  async validatePassword (password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword)
  }

  createJwtToken (identifiers: any, tokenSecret: string, tokenExpiry: string): string {
    return jwt.sign(identifiers, tokenSecret, { expiresIn: tokenExpiry })
  }

  validateJwtToken (jwtToken: string, tokenSecret: string): any {
    return jwt.verify(jwtToken, tokenSecret)
  }
}

export default AuthService
