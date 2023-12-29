import React from 'react'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { UserDetails } from '../entity/UserDetails'

export function Dashboard (): JSX.Element {
  return (
        <div>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className="sidebar border border-right col-md-2 col-lg-2 p-0 bg-body-tertiary">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                        <UserDetails />
                    </div>
                </div>
            </div>
        </div>
  )
}
