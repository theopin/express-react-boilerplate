import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { LoginScreen } from './features/login/LoginScreen'
import { ToastContainer } from './components/toasts/container/ToastContainer'
import { SignupScreen } from './features/signup/SignupScreen'
import { UserDetails } from './features/entity/UserDetails'

export function App (): JSX.Element {
  return (
    <div>
      <div>Hello to Boilerplate</div>
      <LoginScreen />
      <SignupScreen />
      <UserDetails />
      <ToastContainer />
    </div>

  )
}
