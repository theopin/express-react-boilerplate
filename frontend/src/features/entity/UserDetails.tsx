import React, { useState, useEffect } from 'react'
import { type Entity } from '../../models/user/Entity'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { EntityApi } from '../../api/entity/EntityApi'

export function UserDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Entity | null>(null)

  async function fetchData (): Promise<void> {
    try {
      console.log(localStorage.getItem('accessToken'))
      const result = await EntityApi.getEntities() // Todo: Change
      console.log(JSON.stringify(result))
      setUserDetails(result.data.data[0])
      ToastUtils.createSuccessToast('Hello')
    } catch (error: any) {
      // Handle errors here
      const errorMessage = error.message !== undefined ? error.message : 'Login failed'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  useEffect(() => {
    void fetchData()
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
