import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Buffer } from 'buffer'

import { WelcomeScreen } from '../welcome/WelcomeScreen'
import { ToastContainer } from '../../components/toasts/container/ToastContainer'
import { Dashboard } from '../dashboard/Dashboard'
import { ProductDetails } from '../product/ProductDetails'
import { UpdateProduct } from '../product/UpdateProduct'
import { CreateProduct } from '../product/CreateProduct'
import { ErrorScreen } from '../error/ErrorScreen'

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
    // Decode the base64-encoded payload
    const payloadJson = Buffer.from(payloadBase64, 'base64').toString('utf-8')

    return JSON.parse(payloadJson)
  }

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/error" element={<Dashboard interiorData={<ErrorScreen/>}/> } />
          <Route path='/dashboard' element={isRefreshTokenValid() ? <Dashboard interiorData={<div></div>}/> : <Navigate to="/welcome" />} />
          <Route path="/products/new" element={ <Dashboard interiorData={<CreateProduct />}/> } />
          <Route path="/products/:objectId" element={<Dashboard interiorData={<UpdateProduct />}/> } />
          <Route path='/products' element={isRefreshTokenValid() ? <Dashboard interiorData={<ProductDetails />} /> : <Navigate to="/welcome" />} />
          <Route path='/welcome' element={isRefreshTokenValid() ? <Navigate to="/dashboard" /> : <WelcomeScreen />}/>
          <Route path='/' element={<Navigate to={isRefreshTokenValid() ? '/dashboard' : '/welcome'} />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </Router>
    </div>

  )
}
