import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLink({item}) {
  return (
    <NavLink className={"py-[18px] relative flex items-center text-[#A4A6B3] space-x-6 pl-[32px]"} to={item.path}>
       {item.icon}
       <span className='font-normal text-[16px] leading-5'>{item.title}</span>
    </NavLink>
  )
}

export default NavbarLink