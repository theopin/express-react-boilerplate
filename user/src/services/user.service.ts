import bcrypt from 'bcrypt'
import type Database from '../database/interface/database.interface'

const SALT_ROUNDS = 10

class UserService {
  async createNewUser (database: Database, params: any): Promise<any> {
    const hashedPassword = await bcrypt.hash(params.password, SALT_ROUNDS)
    params.password = hashedPassword
    const createResult = await database.createEntity(params)
    return createResult
  }

  async getUserById (database: Database, id: string): Promise<any> {
    const getOneResult = await database.getOneEntity(id)
    return getOneResult
  }

  async getAllUsers (database: Database, params: any): Promise<any> {
    const getAllResult = await database.getAllEntities(params)
    return getAllResult
  }

  async updateUserById (database: Database, id: any, params: any): Promise<any> {
    if (params.password !== null || params.password !== undefined) {
      const hashedPassword = await bcrypt.hash(params.password, SALT_ROUNDS)
      params.password = hashedPassword
    }
    const updateResult = await database.updateEntity(id, params)
    return updateResult
  }

  async deleteUserById (database: Database, id: string): Promise<any> {
    const deleteResult = await database.deleteEntity(id)
    return deleteResult
  }
}

export default UserService
