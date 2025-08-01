import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RelatedProducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    
    useEffect(()=>{

        if (products.length>0) {

            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => category === item.category );
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory );
            
            setRelatedProducts(productsCopy.slice(0, 5));
            
        }

    },[products])

  return (
    <div className='mt-15'>
      <motion.div initial={{y:-50, opacity:0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='text-center text-3xl py-2 '>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </motion.div>

      <div className=' grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
        {relatedProducts.map((item,index)=>(
          <motion.div key={item._id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true, amount: 0.2 }} >
            <Link to={`products/${item._id}`} key={index}>
                <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
