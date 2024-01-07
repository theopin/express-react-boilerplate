import React, { useState, useEffect } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { ProductApi } from '../../api/product/ProductApi'
import { type Product } from '../../models/product/Product'
import { Link } from 'react-router-dom'

export function ProductDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Product[] | null>(null)
  const [sortOrder, setSortOrder] = useState('asc')
  // const [searchTerm, setSearchTerm] = useState('')

  async function fetchData (): Promise<void> {
    try {
      const result = await ProductApi.getProducts() // Todo: Change
      setUserDetails(result.data.data)
      ToastUtils.createSuccessToast('Fetched data successfully')
    } catch (error: any) {
      // Handle errors here
      const errorMessage = error.message !== undefined ? error.message : 'Failed to fetch data'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [sortOrder])

  if (userDetails === null || userDetails === undefined || userDetails.length === 0) {
    return (<div></div>)
  }

  return (
    <div className="p-4">

      <div className="d-flex justify-content-center">
        <div className='fw-bold'>Product List</div>
      </div>

      <div className="mt-6 d-flex flex-row-reverse">
        <Link to={'/products/new'}>
          <button type="button" className="btn btn-success" >+ Create New Product</button>
        </Link>
      </div>

      {/* <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      /> */}

      <div className="row mt-3 alert alert-secondary " role="alert">
        <div className='row mt-3 d-flex justify-content-start'>
          <div className="input-group md-4">
              <span className="input-group-text">&#x1F50D;</span>
              <input type="text" className="form-control" name="search" />
          </div>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" onClick={() => { setSortOrder('desc') }}>
              Name {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th scope="col" onClick={() => { setSortOrder('desc') }}>
              Quantity {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            userDetails.map((item: Product, index: number) => {
              return (
                <tr key={'UserView ' + index} id={'UserView ' + index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <Link to={`/products/${item._id}`}>
                      <button type="button" className="btn btn-primary">
                        Update
                      </button>
                    </Link>
                  </td>
                  <td><button type="button" className="btn btn-danger" >Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}
