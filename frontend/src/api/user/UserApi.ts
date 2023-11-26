import { type User } from '../../models/user/User'
import { type UserFilter } from '../../models/user/UserFilter'
import { RequestTypes } from '../utils/RequestTypes'

const createNewUser = async (entityDetails: User): Promise<any> => {
  return await RequestTypes.postRequest('/user/', entityDetails)
}

const getUsers = async (): Promise<any> => {
  return await RequestTypes.getRequest('/user/')
}

const getUserById = async (entityId: number): Promise<any> => {
  return await RequestTypes.getRequest(`/user/${entityId}`)
}

const getUsersByFilter = async (filterParams: UserFilter): Promise<any> => {
  return await RequestTypes.getRequest('/user/', {
    params: filterParams
  })
}

const updateUserById = async (id: string, updatedDetails: UserFilter): Promise<any> => {
  return await RequestTypes.patchRequest(`/user/${id}`, updatedDetails)
}

const deleteUserById = async (id: string): Promise<any> => {
  return await RequestTypes.deleteRequest(`/user/${id}`)
}

export const UserApi = {
  createNewUser,
  getUsers,
  getUserById,
  getUsersByFilter,
  updateUserById,
  deleteUserById
}
