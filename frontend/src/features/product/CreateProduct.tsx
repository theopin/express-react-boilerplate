import React from 'react'
import { ProductApi } from '../../api/product/ProductApi'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'

export function CreateProduct (): JSX.Element {
  async function handleCreateNewProduct (event: any): Promise<void> {
    event.preventDefault()

    const formData = new FormData(event.target)
    const formObjectRequest: any = Object.fromEntries(formData)
    console.log(formData)
    console.log(formObjectRequest)

    try {
      const response = await ProductApi.createNewProduct(formObjectRequest)
      ToastUtils.createSuccessToast('Able to create new Product ' + response.data.status)
    } catch (error: any) {
      const errorMessage = error.message !== undefined ? error.message : 'Failed to create product'
      ToastUtils.createErrorToast(errorMessage)
    }
  }
  return (
        <div>
            <form className="row g-3" onSubmit={(e) => { void handleCreateNewProduct(e) }}>
                <div className='row d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <div className='fw-bold'>Create New Product</div>
                    </div>
                </div>

                <div className='row g-3 d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input type="text" className="form-control" name="name" value="Mark" required />
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

                <div className='row  d-flex justify-content-evenly'>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault03" className="form-label">Price</label>
                        <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input type="text" className="form-control" name="price" required />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="validationDefault04" className="form-label">Quantity</label>
                        <input type="number" className="form-control" name="quantity" min="0" max="100" required />
                    </div>
                </div>

                <div className="row g-3 d-flex justify-content-evenly">
                    <div className='col-md-10'>
                        <textarea className="form-control" placeholder="Description of Product" name="description" ></textarea>
                    </div>
                </div>

                <div className='row g-3 d-flex justify-content-evenly'>
                        <div className="col-md-2">
                        <button className="btn btn-danger" >Cancel Submission</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-success" type="submit">Create Product</button>
                        </div>
                </div>
            </form>
        </div>
  )
}
