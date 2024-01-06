import React from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { AuthApi } from '../../api/auth/AuthApi'
import { useNavigate } from 'react-router-dom'

export function LoginScreen ({ setFormLoginStatus }: { setFormLoginStatus: any }): JSX.Element {
  const navigate = useNavigate()

  async function handleLogin (event: any): Promise<void> {
    try {
      const formData = new FormData(event.target)
      const response = await AuthApi.authenticateUser(formData)

      localStorage.setItem('refreshToken', response.data.data.refreshToken)
      localStorage.setItem('accessToken', response.data.data.accessToken)

      navigate('/dashboard')
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
      <form onSubmit={(e) => { void handleLogin(e) }}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button type="submit" className="w-100 btn btn-lg btn-primary">Login</button>
        <hr className="my-4" />
        <button type="button" className="mx-auto d-block w-80 btn btn-lg btn-success" onClick={() => { switchToSignup(); navigate('/welcome') }} >Create New Account</button>
      </form>
    </div>
  )
}
