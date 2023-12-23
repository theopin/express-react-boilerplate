import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer } from './components/toasts/container/ToastContainer'
import { UserDetails } from './features/entity/UserDetails'
import { WelcomeScreen } from './features/welcome/WelcomeScreen'

export function App (): JSX.Element {
  return (
    <div>
      <div className="container mt-2">
        <WelcomeScreen />
        <UserDetails />
      </div>
      <ToastContainer />
    </div>

  )
}
