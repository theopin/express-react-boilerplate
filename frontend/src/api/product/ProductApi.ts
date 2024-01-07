import { type ProductFilter } from '../../models/product/ProductFilter'
import { RequestTypes } from '../utils/RequestTypes'

const createNewProduct = async (entityDetails: any): Promise<any> => {
  return await RequestTypes.postRequest('/product/', entityDetails)
}

const getProducts = async (): Promise<any> => {
  return await RequestTypes.getRequest('/product/')
}

const getProductById = async (entityId: any): Promise<any> => {
  return await RequestTypes.getRequest(`/product/${entityId}`)
}

const getProductsByFilter = async (filterParams: ProductFilter): Promise<any> => {
  return await RequestTypes.getRequest('/product/', {
    params: filterParams
  })
}

const updateProductById = async (id: any, updatedDetails: any): Promise<any> => {
  return await RequestTypes.patchRequest(`/product/${id}`, updatedDetails)
}

const deleteProductById = async (id: any): Promise<any> => {
  return await RequestTypes.deleteRequest(`/product/${id}`)
}

export const ProductApi = {
  createNewProduct,
  getProducts,
  getProductById,
  getProductsByFilter,
  updateProductById,
  deleteProductById
}
