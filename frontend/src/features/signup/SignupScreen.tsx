import React, { useState } from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { UserApi } from '../../api/user/UserApi'

export function SignupScreen (): JSX.Element {
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

  return (
    <div>
      <h2 className="mb-4">Signup</h2>
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

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={() => { void handleSignup() }}>
          Signup
        </button>
      </form>
    </div>
  )
}
