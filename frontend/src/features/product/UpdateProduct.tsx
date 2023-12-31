import React, { useState, useEffect } from 'react'
import { ProductApi } from '../../api/product/ProductApi'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function UpdateProduct (): JSX.Element {
  const navigate = useNavigate()
  const { objectId } = useParams()
  const [productDetails, setProductDetails] = useState<any>({})

  async function fetchData (): Promise<void> {
    try {
      const result = await ProductApi.getProductById(objectId) // Todo: Change
      if (result.data.data === null) {
        throw new Error('Unable to fetch data for ' + objectId)
      }
      setProductDetails(result.data.data)
    } catch (error: any) {
      // Handle errors here
      const errorMessage = error.message !== undefined ? error.message : 'Failed to fetch product data'
      ToastUtils.createErrorToast(errorMessage)
      navigate('/error')
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  async function handleCreateNewProduct (event: any): Promise<void> {
    event.preventDefault()

    const formData = new FormData(event.target)
    const formObjectRequest: any = Object.fromEntries(formData)

    try {
      const response = await ProductApi.updateProductById(objectId, formObjectRequest)
      ToastUtils.createSuccessToast(`Updated Product ${objectId} - ${response.data.status}`)
      navigate('/products')
      window.location.reload()
    } catch (error: any) {
      const errorMessage = error.message !== undefined ? error.message : 'Failed to create product'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  if (productDetails.name === null && productDetails.price === null) {
    return (<div></div>)
  }

  return (
        <div className="p-4">
            <div className="d-flex justify-content-center">
                <div className='fw-bold'>Update Product</div>
            </div>

            <form className="row g-3" onSubmit={(e) => { void handleCreateNewProduct(e) }}>

                <div className='row g-3 d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" name="name" defaultValue={productDetails.name} required />
                    </div>
                    <div className='col-md-4'>
                    <label htmlFor="exampleDataList" className="form-label">Datalist example</label>
                        <input className="form-control" list="datalistOptions" placeholder="Type to search..."/>
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>
                </div>

                <div className='row  d-flex justify-content-evenly'>
                    <div className="row g-3 alert alert-success " role="alert">
                        <div className='fw-bold mt-0'>Item Details</div>
                        <div className='row mt-3 d-flex justify-content-evenly'>
                            <div className="col-md-4">
                                <label htmlFor="validationDefault01" className="form-label">Product Brand</label>
                                <input type="text" className="form-control" value="Volvo" disabled />
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="validationDefault02" className="form-label">Brand Level</label>
                                <input type="text" className="form-control" value="130" disabled />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row  d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault03" className="form-label">Price</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" name="price" defaultValue={productDetails.price} required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault04" className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="quantity" min="0" max="100" defaultValue={productDetails.quantity} required />
                    </div>
                </div>

                <div className="row g-3 d-flex justify-content-evenly">
                    <div className='col-md-10'>
                        <textarea className="form-control" placeholder="Description of Product" name="description" defaultValue={productDetails.description} ></textarea>
                    </div>
                </div>

                <div className='row g-3 d-flex justify-content-evenly'>
                        <div className="col-md-2">
                            <Link to={'/products'}>
                                <button type="button" className="btn btn-secondary" >Cancel Submission</button>
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-success" type="submit">Update Product</button>
                        </div>
                </div>
            </form>
        </div>
  )
}
