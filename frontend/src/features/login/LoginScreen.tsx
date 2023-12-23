import React, { useState } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { AuthApi } from '../../api/auth/AuthApi'

export function LoginScreen ({ setFormLoginStatus }: { setFormLoginStatus: any }): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin (): Promise<void> {
    try {
      const response = await AuthApi.authenticateUser({ username, password })

      localStorage.setItem('refreshToken', response.data.data.refreshToken)
      localStorage.setItem('accessToken', response.data.data.accessToken)

      ToastUtils.createSuccessToast('Login successful: ' + response.data.status)
    } catch (error: any) {
      // Use a more clear way to check if there is an error message
      const errorMessage = error.message !== undefined ? error.message : 'Login failed'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  function switchToSignup (): void {
    setFormLoginStatus(false)
  }

  return (
    <div >
      <form >
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={username} onChange={(e) => { setUsername(e.target.value) }}
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button type="button" className="w-100 btn btn-lg btn-primary" onClick={() => { void handleLogin() }} >Login</button>
        <hr className="my-4" />
        <button type="button" className="mx-auto d-block w-80 btn btn-lg btn-success" onClick={() => { switchToSignup() }} >Create New Account</button>
      </form>
    </div>
  )
}
