import { type Auth } from '../../models/user/Auth'
import { RequestTypes } from '../utils/RequestTypes'

const authenticateUser = async (entityDetails: Auth): Promise<any> => {
  return await RequestTypes.postRequest('/auth/login', entityDetails)
}

export const AuthApi = {
  authenticateUser
}
