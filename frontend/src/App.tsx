import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { MainRouter } from './features/router/MainRouter'

export function App (): JSX.Element {
  return (
    <div className='mt-2 mr-2 ml-2'>
      <MainRouter />
    </div>

  )
}
