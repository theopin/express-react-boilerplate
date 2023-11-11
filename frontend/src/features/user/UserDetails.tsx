import React, { useState, useEffect } from 'react'
import { EntityRequestApi } from '../../api/entity/EntityRequest'
import { type Entity } from '../../models/user/Entity'
import { SuccessToast } from '../../components/toasts/success/SuccessToast'

export function UserDetails (): JSX.Element {
  const [userDetails, setUserDetails] = useState<Entity | null>(null)

  async function fetchData (): Promise<void> {
    try {
      const result = await EntityRequestApi.getEntities() // Todo: Change

      setUserDetails(result.data.data[0])
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  if (userDetails === null || userDetails === undefined) {
    return (<div>Error! User Not found</div>)
  }

  return (
    <div>newFunction
      <div>Username: {userDetails.username}</div>
      <div>Email: {userDetails.email}</div>
      <button type="button" className="btn btn-primary" id="liveToastBtn" onClick={SuccessToast.showLiveToast}>Show live toast</button>
      <SuccessToast.Toast />
    </div>
  )
}
