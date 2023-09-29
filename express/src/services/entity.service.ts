// import db

class EntityService {
  async createNewEntity (params: any): Promise<any> {
    // run db request
    console.log('Creating new Entity', params)
    return {
      uuid: 1,
      name: 'Create'
    }
  }

  async getEntityById (id: string): Promise<any> {
    // run db request
    console.log('Fetching entity with id', id)
    return {
      uuid: 1,
      name: 'GetOne'
    }
  }

  async getAllEntities (params: any): Promise<any> {
    // run db request
    console.log('Getting all Entities with params', params)
    return {
      uuid: 1,
      name: 'GetAll'
    }
  }

  async updateEntityById (id: any, params: any): Promise<any> {
    // run db request
    console.log('Updating following Entity with params', id, params)
    return {
      uuid: 1,
      name: 'Update'
    }
  }

  async deleteEntityById (id: string): Promise<any> {
    // run db request
    console.log('Deleting entity with id', id)
    return {
      uuid: 1,
      name: 'Delete'
    }
  }
}

export default EntityService
