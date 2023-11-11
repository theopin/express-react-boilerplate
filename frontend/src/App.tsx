import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { UserDetails } from './features/user/UserDetails'

export function App (): JSX.Element {
  return (
    <div>
      <div>Hello to Boilerplate</div>
      <UserDetails />
    </div>

  )
}
