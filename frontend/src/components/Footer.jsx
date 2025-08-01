import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='mt-[-90px] '>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>

            <div>
                <img src={assets.logo4} className='w-32 mb-5 ' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>
                Rebel Mart is your go to destination for fashionable clothing for men, women, and kids. Whether you're looking for everyday wear, trendy outfits, or special occasion styles, we offer a wide variety of choices to fit every taste and budget. From affordable picks to premium collections, Rebel Mart ensures quality, comfort, and style for the whole family all under one roof.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 '>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li className='cursor-pointer hover:text-black '>Home</li>
                    <li className='cursor-pointer hover:text-black '>About Us</li>
                    <li className='cursor-pointer hover:text-black '>Delivery</li>
                    <li className='cursor-pointer hover:text-black '>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5 '>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600 '>
                    <li className='cursor-pointer hover:text-black '>+94-21-222-1017</li>
                    <li className='cursor-pointer hover:text-black '>rebelmart@ac.lk</li>
                </ul>
            </div>

        </div>

        <div className='mt-[-20px] '>
            <hr />
            <p className='py-5 text-sm text-center '>&copy; Copyright 2025 @Rebelmart.com Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
