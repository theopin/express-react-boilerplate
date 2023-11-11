import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { UserDetails } from './features/user/UserDetails'
import { ToastContainer } from './components/toasts/container/ToastContainer'

export function App (): JSX.Element {
  return (
    <div>
      <div>Hello to Boilerplate</div>
      <UserDetails />
      <ToastContainer />
    </div>

  )
}
