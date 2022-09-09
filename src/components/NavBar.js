import React from 'react'
import NavItem from './NavItem'

function NavBar() {
  return (
    <nav className='w-full shadow-xl flex justify-center items-center gap-4'>
      <NavItem to='/'><span className='text-red-500'>Hot</span> or <span className='text-blue-500'>Not</span></NavItem>
      <NavItem to='/rankings'>Rankings</NavItem>
      {/* <NavItem to='/insert'>Insert</NavItem> */}
    </nav>
  )
}

export default NavBar