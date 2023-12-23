import React, { useState } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { UserApi } from '../../api/user/UserApi'

export function SignupScreen ({ setFormLoginStatus }: { setFormLoginStatus: any }): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  async function handleSignup (): Promise<void> {
    try {
      const response = await UserApi.createNewUser({ username, password, email })

      ToastUtils.createSuccessToast('Signup successful: ' + response.data.status)
    } catch (error: any) {
      // Use a more clear way to check if there is an error message
      const errorMessage = error.message !== undefined ? error.message : 'Login failed'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  function switchToLogin (): void {
    setFormLoginStatus(true)
  }

  return (
    <div>
      <form >
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={(e) => { setUsername(e.target.value) }}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingEmail" placeholder="Password" value={email} onChange={(e) => { setEmail(e.target.value) }}
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="button" className="w-100 btn btn-lg btn-success" onClick={() => { void handleSignup() }} >Sign Up</button>
        <hr className="my-4" />
        <button type="button" className="mx-auto d-block w-80 btn btn-lg btn-primary" onClick={() => { switchToLogin() }} >Login Existing Account</button>
      </form>
    </div>
  )
}
