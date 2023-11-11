import axios from 'axios'

const BACKEND_ENDPOINT = process.env.REACT_APP_BACKEND_ENDPOINT

const instance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 5000
})

const postRequest = async (url: string, data = {}): Promise<any> => {
  return await instance.post(url, data)
}

const getRequest = async (url: string, params = {}): Promise<any> => {
  return await instance.get(url, { params })
}

const patchRequest = async (url: string, data = {}): Promise<any> => {
  return await instance.patch(url, data)
}

const deleteRequest = async (url: string, params = {}): Promise<any> => {
  return await instance.delete(url, { params })
}

export const RequestTypes = {
  postRequest,
  getRequest,
  patchRequest,
  deleteRequest
}
