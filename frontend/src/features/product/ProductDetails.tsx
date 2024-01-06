import React, { useState, useEffect } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { ProductApi } from '../../api/product/ProductApi'
import { type Product } from '../../models/product/Product'
import { CreateProduct } from './CreateProduct'

export function ProductDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Product[] | null>(null)
  const [sortOrder, setSortOrder] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  async function fetchData (): Promise<void> {
    try {
      console.log(localStorage.getItem('accessToken'))
      const result = await ProductApi.getProducts() // Todo: Change
      setUserDetails(result.data.data)
      ToastUtils.createSuccessToast('Hello')
    } catch (error: any) {
      // Handle errors here
      const errorMessage = error.message !== undefined ? error.message : 'Login failed'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [sortOrder, searchTerm])

  if (userDetails === null || userDetails === undefined || userDetails.length === 0) {
    return (<div></div>)
  }

  console.log(userDetails)

  return (
    <div>
      <CreateProduct />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
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
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}
