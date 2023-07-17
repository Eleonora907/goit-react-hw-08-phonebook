import { NavBar } from 'components/navBar/navBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
