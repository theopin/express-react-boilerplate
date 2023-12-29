import React, { useState, useEffect } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { EntityApi } from '../../api/entity/EntityApi'
import { type Entity } from '../../models/user/Entity'

export function UserDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Entity[] | null>(null)
  const [sortOrder, setSortOrder] = useState('asc')
  const [searchTerm, setSearchTerm] = useState('')

  async function fetchData (): Promise<void> {
    try {
      console.log(localStorage.getItem('accessToken'))
      const result = await EntityApi.getEntities() // Todo: Change
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
              Username {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
            <th scope="col" onClick={() => { setSortOrder('desc') }}>
              Email {sortOrder === 'asc' ? '▲' : '▼'}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            userDetails.map((item: Entity, index: number) => {
              return (
                <tr key={'UserView ' + index} id={'UserView ' + index}>
                  <td>{index}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>

  )
}
