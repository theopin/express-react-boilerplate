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

const createNewEntity = (user: Entity): Promise<any> => {
    return RequestTypes.postRequest('/', { body: user })
}

const updateEntity = (articleId: number, user: Entity): Promise<any> => {
    return RequestTypes.patchRequest(`//${articleId}`, { body: user })
}

const deleteEntityById = (articleId: number): Promise<any> => {
    return RequestTypes.deleteRequest(`/${articleId}`)
}

export const EntityRequestApi = {
    getEntities,
    getEntityById,
    getEntitiesByFilter,
    createNewEntity,
    updateEntity,
    deleteEntityById,
}
