import React from 'react'
import { NavLink } from 'react-router-dom'

function NavItem({children, to}) {
  return (
    <NavLink to={to}>
      <div className='p-4 text-xl hover:bg-black hover:text-white transition-colors'>
        {children}
      </div>
    </NavLink>
  )
}

export default NavItem