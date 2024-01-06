import React from 'react'
import { ToastUtils } from '../../components/toasts/utils/ToastUtils'
import { UserApi } from '../../api/user/UserApi'

export function SignupScreen ({ setFormLoginStatus }: { setFormLoginStatus: any }): JSX.Element {
  async function handleSignup (event: any): Promise<void> {
    try {
      event.preventDefault()
      const formData = new FormData(event.target)
      const response = await UserApi.createNewUser(formData)

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
      <form onSubmit={(e) => { void handleSignup(e) }}>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" name="username"
          />
          <label htmlFor="floatingInput">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input type="email" className="form-control" id="floatingEmail" placeholder="Email" name="email"
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>

        <div className="form-floating mb-3">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="w-100 btn btn-lg btn-success" >Sign Up</button>
        <hr className="my-4" />
        <button type="button" className="mx-auto d-block w-80 btn btn-lg btn-primary" onClick={() => { switchToLogin() }} >Login Existing Account</button>
      </form>
    </div>
  )
}
