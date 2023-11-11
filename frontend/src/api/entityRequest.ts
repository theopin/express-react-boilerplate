import { Entity } from "./model/Entity"
import { EntityFilter } from "./model/EntityFilter"
import { RequestTypes } from "./requestTypes"

const getEntities = (): Promise<any> => {
    return RequestTypes.getRequest('/')
}

const getEntityById = (entityId: number): Promise<any> =>{
    return RequestTypes.getRequest(`/${entityId}`)
}

const getEntitiesByFilter = (filterParams: EntityFilter): Promise<any> => {
    return RequestTypes.getRequest('/', {
        params: filterParams
    })
}

const createNewEntity = (entityDetails: Entity): Promise<any> => {
    return RequestTypes.postRequest('/', entityDetails)
}

const updateEntityById = (id: string, updatedDetails: EntityFilter): Promise<any> => {
    return RequestTypes.patchRequest(`/${id}`, updatedDetails)
}

const deleteEntityById = (id: string): Promise<any> => {
    return RequestTypes.deleteRequest(`/${id}`)
}

export const EntityRequestApi = {
    getEntities,
    getEntityById,
    getEntitiesByFilter,
    createNewEntity,
    updateEntityById,
    deleteEntityById,
}
