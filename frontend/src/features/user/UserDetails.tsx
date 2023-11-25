import React, { useState, useEffect } from 'react'
import { EntityRequestApi } from '../../api/entity/EntityRequestApi'
import { type Entity } from '../../models/user/Entity'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'

export function UserDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Entity | null>(null)

  async function fetchData (): Promise<void> {
    try {
      const result = await EntityRequestApi.getEntities() // Todo: Change

      setUserDetails(result.data.data[0])
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error)
      ToastUtils.createSuccessToast('Hello')
    }
  }

  useEffect(() => {
    void fetchData()
    ToastUtils.createErrorToast('Hello')
  }, [])

  if (userDetails === null || userDetails === undefined) {
    return (<div>Error! User Not found</div>)
  }

  return (
    <div>
      <div>Username: {userDetails.username}</div>
      <div>Email: {userDetails.email}</div>
    </div>
  )
}
