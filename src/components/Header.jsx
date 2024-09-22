import React, { useContext } from 'react'
import Search from "../assets/images/search.svg"
import New from "../assets/images/new.svg"
import Photo from "../assets/images/photo.svg"
import { Context } from '../context/Context'


function Header() {
    const {path} = useContext(Context)
  return (
        <div className='flex items-center justify-between mb-[54px]'>
            <h2 className='font-bold text-[24px] text-[#252733] leading-[30px]'>{path}</h2>

        <div className='flex'>
        <div className='flex items-center space-x-6'>
            <img className='cursor-pointer' src={Search} alt="Search" width={16} height={16}/>
            <img className='cursor-pointer' src={New} alt="Search" width={16} height={16}/>
        </div>

        <div className='search-line'></div>

        <div className='flex items-center gap-[14px]'>
            <strong className='font-semibold leading-[20px] text-[14px] text-[#252733]'>Jones Ferdinand</strong>
            <img className='cursor-pointer' src={Photo} alt="Phote" width={44} height={44}/>
        </div>
        </div>    
        </div>
  )
}

export default Header
