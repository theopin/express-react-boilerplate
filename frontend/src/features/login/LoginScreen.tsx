import React, { useState } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { AuthApi } from '../../api/auth/AuthApi'

export function LoginScreen (): JSX.Element {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin (): Promise<void> {
    try {
      const response = await AuthApi.authenticateUser({ username, password })

      localStorage.setItem('refreshToken', response.data.data.refreshToken)
      localStorage.setItem('refreshToken', response.data.data.accessToken)

      ToastUtils.createSuccessToast('Login successful: ' + response.data.status)
    } catch (error: any) {
    // Use a more clear way to check if there is an error message
      const errorMessage = error.data.message !== undefined ? error.data.message : 'Login failed'
      ToastUtils.createErrorToast(errorMessage)
    }
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Username:</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => { void handleLogin() }}>
          Login
        </button>
      </form>
    </div>
  )
}
