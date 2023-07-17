import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            {/* <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink> */}
        </nav>
        <div>
            <h1>Hello example@mail.com</h1>
        </div>
        <div>
            <button>Login</button>
            <button>Register</button>
            <button>Exit</button>
        </div>
    </header>
  )
}
