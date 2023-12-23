import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { MainRouter } from './features/router/MainRouter'

export function App (): JSX.Element {
  return (
    <div className='pe-5 ps-5'>
      <MainRouter />
    </div>

  )
}
