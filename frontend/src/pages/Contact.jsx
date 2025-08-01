import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import {motion} from 'framer-motion'

const Contact = () => {

  return (
    <div>
      
      <motion.div initial={{ y:-30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}} viewport={{ once: true }} className='text-center text-2xl pt-10 mt-[-30px] '>
        <Title text1={'CONTACT'} text2={'US'} />
      </motion.div>

      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-10 '>
        <motion.img initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} src={assets.contact_img} className='w-full md:max-w-[480px] mt-[-20px] border border-[#115e59] p-5' alt="" />
        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className='flex flex-col justify-center items-start gap-6' >
          <p className='font-semibold text-xl text-[#115e59e5] '>Our Store</p>
          <p className='text-[#115e5999] '>Main street, <br />China Bazaar, <br />Colombo 10, <br /> Sri Lanka </p>
          <p className='text-[#115e5999] '>Tel: +94-21-222-1017 <br /> Mail: rebelmart@ac.lk</p>
          <p className='font-semibold text-xl text-[#115e59e5] '>Careers at RebelMart</p>
          <p className='text-[#115e5999] '>Learn more about our teams and job openings.</p>
          <button className='border-[1.5px] border-[#115e59] px-8 py-4 text-sm text-[#115e59] rounded-lg hover:bg-[#115e59] hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </motion.div>
      </div>
      
      <motion.div initial={{ y: 100, opacity: 0 }}  whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} >
       <NewsletterBox /> 
      </motion.div>
    </div>
  )
}

export default Contact
