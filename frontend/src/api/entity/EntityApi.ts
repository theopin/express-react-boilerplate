import { type Entity } from '../../models/user/Entity'
import { type EntityFilter } from '../../models/user/EntityFilter'
import { RequestTypes } from '../utils/RequestTypes'

const createNewEntity = async (entityDetails: Entity): Promise<any> => {
  return await RequestTypes.postRequest('/backend/', entityDetails)
}

const getEntities = async (): Promise<any> => {
  return await RequestTypes.getRequest('/backend/')
}

const getEntityById = async (entityId: number): Promise<any> => {
  return await RequestTypes.getRequest(`/backend/${entityId}`)
}

const getEntitiesByFilter = async (filterParams: EntityFilter): Promise<any> => {
  return await RequestTypes.getRequest('/backend/', {
    params: filterParams
  })
}

const updateEntityById = async (id: string, updatedDetails: EntityFilter): Promise<any> => {
  return await RequestTypes.patchRequest(`/backend/${id}`, updatedDetails)
}

const deleteEntityById = async (id: string): Promise<any> => {
  return await RequestTypes.deleteRequest(`/backend/${id}`)
}

export const EntityApi = {
  createNewEntity,
  getEntities,
  getEntityById,
  getEntitiesByFilter,
  updateEntityById,
  deleteEntityById
}
