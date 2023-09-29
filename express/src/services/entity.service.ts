// import db
import type Database from '../database/interface/database.interface'

class EntityService {
  async createNewEntity (database: Database, params: any): Promise<any> {
    // run db request
    console.log('Creating new Entity', params, database)
    return database.createEntity(params)
  }

  async getEntityById (database: Database, id: string): Promise<any> {
    // run db request
    console.log('Fetching entity with id', id, database)
    return {
      uuid: 1,
      name: 'GetOne'
    }
  }

  async getAllEntities (database: Database, params: any): Promise<any> {
    // run db request
    console.log('Getting all Entities with params', params)
    return {
      uuid: 1,
      name: 'GetAll'
    }
  }

  async updateEntityById (database: Database, id: any, params: any): Promise<any> {
    // run db request
    console.log('Updating following Entity with params', id, params)
    return {
      uuid: 1,
      name: 'Update'
    }
  }

  async deleteEntityById (database: Database, id: string): Promise<any> {
    // run db request
    console.log('Deleting entity with id', id)
    return {
      uuid: 1,
      name: 'Delete'
    }
  }
}

export default EntityService
