import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Buffer } from 'buffer'

import { WelcomeScreen } from '../welcome/WelcomeScreen'
import { ToastContainer } from '../../components/toasts/container/ToastContainer'
import { Dashboard } from '../dashboard/Dashboard'

export function MainRouter (): JSX.Element {
  const isRefreshTokenValid = (): boolean => {
    try {
      const refreshToken = localStorage.getItem('refreshToken')

      if (refreshToken === null || refreshToken === undefined) {
        return false
      }

      const decodedToken = decodeToken(refreshToken)

      // Refresh token has expired
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        return false
      }

      return true
    } catch (parsingError) {
      console.error('Error with refresh token:', parsingError)
      return false
    }
  }

  function decodeToken (jwtToken: string): any {
    const payloadBase64 = jwtToken.split('.')[1]
    console.log(payloadBase64)
    // Decode the base64-encoded payload
    const payloadJson = Buffer.from(payloadBase64, 'base64').toString('utf-8')

    return JSON.parse(payloadJson)
  }
  console.log(isRefreshTokenValid())

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path='/dashboard' element={isRefreshTokenValid() ? <Dashboard /> : <Navigate to="/welcome" />} />
          <Route path='/welcome' element={isRefreshTokenValid() ? <Navigate to="/dashboard" /> : <WelcomeScreen />}/>
          <Route path='/' element={<Navigate to={isRefreshTokenValid() ? '/home' : '/welcome'} />} />
        </Routes>
      </Router>
    </div>

  )
}
