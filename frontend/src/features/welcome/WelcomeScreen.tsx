import React, { useState } from 'react'
import { LoginScreen } from '../login/LoginScreen'
import { SignupScreen } from '../signup/SignupScreen'

export function WelcomeScreen (): JSX.Element {
  const [isFormLogin, setFormLoginStatus] = useState(true)

  return (
        <div >
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">Welcome to Boilerplate</h1>
              <p className="col-lg-10 fs-4">An avenue for you to implement your imaginations and realize your dreams.</p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
                {isFormLogin && <LoginScreen setFormLoginStatus={setFormLoginStatus}/>}
                {!isFormLogin && <SignupScreen />}
            </div>
          </div>
        </div>
  )
}
