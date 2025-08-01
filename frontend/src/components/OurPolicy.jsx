import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const OurPolicy = () => {
  return (
    <div className='flex flex-col mt-[-40px] sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 '>
      {/* <motion.div  className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl hover:bg-[#f1f5f9]  hover:scale-105 transition duration-300 '>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>Easy Exchange Policy</p>
        <p className='text-gray-400 '>We offer hassle free exchange policy</p>
      </motion.div>
      <motion.div className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl hover:bg-[#f1f5f9] hover:scale-105 transition duration-300 '>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>7 Days Return Policy</p>
        <p className='text-gray-400 '>We provide <strong>7 days free</strong> return policy</p>
      </motion.div>
      <motion.div className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl hover:bg-[#f1f5f9] hover:scale-105 transition duration-300 '>
        <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>Best Customer Support</p>
        <p className='text-gray-400 '>We provide <strong>24/7</strong> customer support</p>
      </motion.div> */}


      <motion.div initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl '>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>Easy Exchange Policy</p>
        <p className='text-gray-400 '>We offer hassle free exchange policy</p>
      </motion.div>
      <motion.div initial={{y:80, opacity:0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl '>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>7 Days Return Policy</p>
        <p className='text-gray-400 '>We provide <strong>7 days free</strong> return policy</p>
      </motion.div>
      <motion.div initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='bg-[#f7fcfb] border p-5 rounded-[25px] shadow-xl '>
        <img src={assets.support_img} className='w-12 m-auto mb-5 ' alt="" />
        <p className='font-semibold '>Best Customer Support</p>
        <p className='text-gray-400 '>We provide <strong>24/7</strong> customer support</p>
      </motion.div>
    </div>
  )
}

export default OurPolicy
