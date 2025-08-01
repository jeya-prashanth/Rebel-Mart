import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { motion } from 'framer-motion'

const About = () => {

  return (
    <div>

      <motion.div initial={{ y:-30, opacity:0}} whileInView={{y:0, opacity:1}} transition={{duration:0.5}} viewport={{once:true }} className='text-center text-2xl pt-10 mt-[-30px] '>
        <Title text1={'ABOUT'} text2={'US'} />
      </motion.div>

      <motion.div className='my-10 flex flex-col md:flex-row gap-16 '>
        <motion.img initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{once:true }} src={assets.about_img} className='w-full md:max-w-[480px] mt-[-20px] border border-[#115e59] p-5 ' alt="" />
        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{once:true }} className='flex flex-col justify-center gap-6 md:w-2/4 text-[#115e5999] '>
          <p>RebelMart is your one-stop fashion destination offering trendy and comfortable clothing for men, women, and kids. Whether you're shopping on a budget or looking to splurge, we have something for everyone. From everyday essentials to stylish statement pieces, RebelMart combines quality, variety, and affordability to help you express your unique style. Dress bold, live free — only at RebelMart.</p>
          <p>At RebelMart, fashion meets freedom. We bring you a wide range of stylish apparel for men, women, and kids at prices that fit every pocket. Whether you're dressing up for a special day or keeping it casual, our diverse collection ensures you stand out in every crowd. Affordable, versatile, and always on-trend — RebelMart is where your wardrobe gets a bold upgrade.</p>
          <b className='text-[#115e59e5] '>Our Mission</b>
          <p>Our mission at RebelMart is to provide high-quality, stylish clothing for men, women, and kids at affordable prices. We strive to offer a seamless shopping experience with diverse options that empower our customers to express their unique style confidently every day.</p>
        </motion.div>
      </motion.div>

      <motion.div initial={{ x:-30, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration:0.5}} viewport={{once:true }} className='text-2xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </motion.div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-sm '>
        <motion.div initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='group shadow-xl border bg-[#f7fcfb] px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 rounded-[25px] '>
          <b className='font-semibold '>Quality Assurance</b>
          <p className='text-gray-400 '>Stylish, affordable dresses for men, women, and kids with excellent customer service.</p>
        </motion.div>
        <motion.div initial={{y:80, opacity:0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='group shadow-xl border bg-[#f7fcfb] px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 rounded-[25px] '>
          <b className='font-semibold '>Convenience</b>
          <p className='text-gray-400 '>Diverse fashion choices with great quality and prices for every budget.</p>
        </motion.div>
        <motion.div initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='group shadow-xl border bg-[#f7fcfb] px-10 md:px-16 py-8 sm:py-15 flex flex-col gap-5 rounded-[25px] '>
          <b className='font-semibold '>Exceptional Customer Service</b>
          <p className='text-gray-400 '>Experience personalized, attentive service that puts your satisfaction above all else.</p>
        </motion.div>
      </div>
      
      <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} >
       <NewsletterBox /> 
      </motion.div>

    </div>
  )
}

export default About
