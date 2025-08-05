import React from 'react'
import { assets } from '../assets/assets'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5 '>
      <img src={assets.logo_2} className='w-36' alt="" />
      {/* w-[max-(10%,80px)] */}
      <button className='bg-[#115e59] text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm hover:scale-110 transtition-all duration-300 '>LOGOUT</button>
    </div>
  )
}

export default NavBar
