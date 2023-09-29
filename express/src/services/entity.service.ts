// import db
import type Database from '../database/interface/database.interface'

class EntityService {
  async createNewEntity (database: Database, params: any): Promise<any> {
    // run db request
    console.log('Creating new Entity', params, database)
    const createResult = await database.createEntity(params)
    return createResult
  }

  async getEntityById (database: Database, id: string): Promise<any> {
    // run db request
    console.log('Fetching entity with id', id, database)
    const getOneResult = await database.getOneEntity(id)
    return getOneResult
  }

  async getAllEntities (database: Database, params: any): Promise<any> {
    // run db request
    console.log('Getting all Entities with params', params)
    const getAllResult = await database.getAllEntities(params)
    return getAllResult
  }

  async updateEntityById (database: Database, id: any, params: any): Promise<any> {
    // run db request
    console.log('Updating following Entity with params', id, params)
    const updateResult = await database.updateEntity(id, params)
    return updateResult
  }

  async deleteEntityById (database: Database, id: string): Promise<any> {
    // run db request
    console.log('Deleting entity with id', id)
    const deleteResult = await database.deleteEntity(id)
    return deleteResult
  }
}

export default EntityService
