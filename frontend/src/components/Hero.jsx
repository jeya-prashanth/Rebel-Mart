import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = ({ scrollToLatest, scrollToBestSeller }) => {
  const handleScrollToLatest = () => {
    scrollToLatest.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBestSeller = () => {
    scrollToBestSeller.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className='flex flex-col sm:flex-row border-2 border-[#115e59] hover:shadow-2xl hover:scale-105 transition duration-300 rounded-[25px] p-3 mt-[25px] '>
        {/* Hero-Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
        <div className='text-[#115e59] '>
            <Link to='/'><div className='flex items-center gap-2 cursor-pointer ' onClick={handleScrollToBestSeller} >
                <p className='w-19 md:w-45 h-[2px] bg-[#115e59] '></p>
                <p className='font-medium text-sm md:text-base text-[#115e59] '>OUR BEST SELLERS</p>
            </div></Link>
            <Link to='/'><h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed cursor-pointer text-[#115e59] ' onClick={handleScrollToLatest}>Latest Arrivals</h1></Link>
            <Link to='/collection'><div className='flex items-center gap-2 cursor-pointer '>
                <p className='font-semibold text-sm md:text-base text-[#115e59] '>SHOP NOW</p>
                <p className='w-31 md:w-59 h-[2px] bg-[#115e59] '></p>
            </div></Link>
        </div>
      </div>
      {/* Hero-Right side */}
      <img src={assets.hero1} className='w-full sm:w-1/2 rounded-[25px] shadow-md ' alt="" />

    </div>
  )
}

export default Hero
