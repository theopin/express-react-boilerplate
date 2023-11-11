import { type Entity } from './model/Entity'
import { type EntityFilter } from './model/EntityFilter'
import { RequestTypes } from './requestTypes'

const getEntities = async (): Promise<any> => {
  return await RequestTypes.getRequest('/')
}

const getEntityById = async (entityId: number): Promise<any> => {
  return await RequestTypes.getRequest(`/${entityId}`)
}

const getEntitiesByFilter = async (filterParams: EntityFilter): Promise<any> => {
  return await RequestTypes.getRequest('/', {
    params: filterParams
  })
}

const createNewEntity = async (entityDetails: Entity): Promise<any> => {
  return await RequestTypes.postRequest('/', entityDetails)
}

const updateEntityById = async (id: string, updatedDetails: EntityFilter): Promise<any> => {
  return await RequestTypes.patchRequest(`/${id}`, updatedDetails)
}

const deleteEntityById = async (id: string): Promise<any> => {
  return await RequestTypes.deleteRequest(`/${id}`)
}

export const EntityRequestApi = {
  getEntities,
  getEntityById,
  getEntitiesByFilter,
  createNewEntity,
  updateEntityById,
  deleteEntityById
}
