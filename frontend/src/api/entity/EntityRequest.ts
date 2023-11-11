import { type Entity } from '../../models/user/Entity'
import { type EntityFilter } from '../../models/user/EntityFilter'
import { RequestTypes } from '../utils/RequestTypes'

const createNewEntity = async (entityDetails: Entity): Promise<any> => {
  return await RequestTypes.postRequest('/', entityDetails)
}

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

const updateEntityById = async (id: string, updatedDetails: EntityFilter): Promise<any> => {
  return await RequestTypes.patchRequest(`/${id}`, updatedDetails)
}

const deleteEntityById = async (id: string): Promise<any> => {
  return await RequestTypes.deleteRequest(`/${id}`)
}

export const EntityRequestApi = {
  createNewEntity,
  getEntities,
  getEntityById,
  getEntitiesByFilter,
  updateEntityById,
  deleteEntityById
}
