// import React, { use } from 'react'
// import Hero from '../components/Hero'
// import LatestCollection from '../components/LatestCollection'
// import BestSeller from '../components/BestSeller'
// import OurPolicy from '../components/OurPolicy'
// import NewsletterBox from '../components/NewsletterBox'

// const home = () => {

//   const latestRef = useRef(null);
//   const bestSellerRef = useRef(null);

//   return (
//     <div>
//       <Hero scrollToLatest={latestRef} scrollToBestSeller={bestSellerRef} />

//       <div ref={latestRef}>
//         <LatestCollection/>
//       </div>

//       <div ref={bestSellerRef}>
//         <BestSeller/>
//       </div>

//       <OurPolicy/>
//       <NewsletterBox/>
//     </div>
//   )
// }

// export default home


import React, { useRef } from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';
import { motion } from 'framer-motion';

const Home = () => {
  const latestRef = useRef(null);
  const bestSellerRef = useRef(null);

  return (
    <div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }}  whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <Hero scrollToLatest={latestRef} scrollToBestSeller={bestSellerRef} />
      </motion.div>
      
      <motion.div ref={latestRef} initial={{ y: -80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className='text-center text-2xl pt-10 mt-[-30px]'>
        <LatestCollection />
      </motion.div>

      <motion.div ref={bestSellerRef} initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }} className='text-center text-2xl pt-10 mt-[-30px]'>
        <BestSeller />
      </motion.div>

      <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className='text-center text-2xl pt-10 mt-[-30px]'>
        <OurPolicy />
      </motion.div>

      <motion.div initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
        <NewsletterBox />
      </motion.div>
    </div>
  );
};

export default Home;
