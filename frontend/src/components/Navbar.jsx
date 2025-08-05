import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
    const[visible,setVisible] = useState(false);
    const {setShowSearch , getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium '>

        <Link to='/'>
            <img src={assets.logo4} className='w-36' alt="" />
        </Link>
        
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p className='hover:bg-[#115e595a] p-2 rounded-[25px] transition duration-250 '>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#115e59] hidden  '/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p className='hover:bg-[#115e595a] p-2 rounded-[25px] transition duration-250 '>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#115e59] hidden '/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p className='hover:bg-[#115e595a] p-2 rounded-[25px] transition duration-250 '>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#115e59] hidden '/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                <p className='hover:bg-[#115e595a] p-2 rounded-[25px] transition duration-250 '>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-[#115e59] hidden '/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6 '>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:scale-125 transition duration-500 ' alt="" />

            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer hover:scale-125 transition duration-500 ' alt="" /></Link>
                <div className="group-hover:block hidden absolute right-0 pt-4 ">
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-[#115e599a] rounded '>
                        <p className='cursor-pointer hover:text-black '>My Profile</p>
                        <p className='cursor-pointer hover:text-black '>Orders</p>
                        <p className='cursor-pointer hover:text-black '>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative' >
                <img src={assets.cart_icon} className='w-5 min-w-5 hover:scale-125 transition duration-500 ' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()} </p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden ' alt="" />
        </div>
        
        {/* Phone screen */}
        <div className={`fixed top-0 right-0 max-h-[500px] bg-[#f7fcfb] shadow-lg overflow-hidden transition-all duration-800 ease-in-out ${visible ? 'w-9/10 opacity-100' : 'w-0 opacity-0'} sm:hidden z-50 rounded-bl-[25px] `}>
            <div className='flex flex-col text-gray-700'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer mt-4 ml-4 border-b-2 border-gray-300 '>
                    <img src={assets.cross_icon} className='h-5 ' alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer ' to='/' >HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer ' to='/collection' >COLLECTION</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer ' to='/about' >ABOUT</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer ' to='/contact' >CONTACT</NavLink>
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
