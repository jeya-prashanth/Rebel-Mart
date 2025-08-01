import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { motion } from 'framer-motion';

const Product = () => {

  const {productId} = useParams();
  const {products , currency , addToCart} = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image,setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [size,setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId) {
        setProductsData(item);
        setImage(item.image[0]);
        
        return null;
      }
    })
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  return productsData ? (
    <div className='pt-10 transition-opacity ease-in duration-500 opacity-100 '>
      {/* Product-Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
        {/* Product-Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full h-[120px] sm:h-[400px]'>
            {productsData.image.map((item, index) => (
              <motion.div initial={{ opacity: 0, y: -80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true, amount: 0.2 }} className='flex-shrink-0 ' key={index}>
                <img onClick={() => { setImage(item); setSelectedImage(item); }} key={index} src={item} className={`w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer rounded-lg border-2 ${selectedImage === item ? 'border-[#115e59]' : 'border-[#115e593a]'} hover:border-[#115e599a] hover:scale-95 transition-all duration-300 `} alt="" /> 
              </motion.div>
            ))}
          </div>

          <motion.div initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='w-full sm:w-[80%] '>
              <img src={image} className='w-full h-auto ' alt="" />
          </motion.div>
        </div>
        {/* Product-Details */}
        <div className='flex-1'>
          <motion.div initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className=' '>
            <h1 className='font-medium text-2xl mt-2 text-[#115e59] '>{productsData.name}</h1>
          </motion.div>
          {/* <motion.div initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1, delay:0.5 }} className='flex items-center gap-1 mt-2 '>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </motion.div> */}

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className='flex items-center gap-1 mt-2' >
            {[assets.star_icon, assets.star_icon, assets.star_icon, assets.star_icon, assets.star_dull_icon].map((star, index) => (
              <motion.img key={index} src={star} alt="" className='w-3' variants={{hidden: { opacity: 0, y: -10 }, visible: { opacity: 1,y: 0,transition: { delay: 0.1 * index, duration: 0.3,},},}}/>
            ))}
              <motion.p className='pl-2' variants={{ hidden: { opacity: 0, x: -10 },visible: {opacity: 1,x: 0,transition: {delay: 0.6,duration: 0.3,},},}}>
                (122)
              </motion.p>
          </motion.div>

          <div>
            <motion.div initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}}>
              <p className='mt-5 text-3xl font-medium text-[#115e59] '>{currency}{productsData.price} </p>
            </motion.div>
            <motion.div initial={{y:20, opacity:0}} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}}>
              <p className='text-gray-500 mt-5 md:w-4/5 '>{productsData.description} </p>
            </motion.div>
            {/* <div className='flex flex-col gap-4 my-8 '>
              <p className='text-[#115e59]'>Select Size</p>
              <div className='flex gap-3 text-[#115e59] '>
                {productsData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(prev => prev === item ? '' : item)} key={index} className={`border rounded-lg py-2 px-4 bg-gray-100 cursor-pointer hover:scale-110 transition duration-300 ${item === size ? 'border-[#FF7043] text-[#FF7043] ' : ''} `} >{item} </button>
                ))}
              </div>
            </div> */}
            <div className='flex flex-col gap-4 my-8'>
              <motion.p initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className='text-[#115e59]' >Select Size</motion.p>
              <motion.div className='flex gap-3 text-[#115e59]' initial="hidden" whileInView="visible" variants={{visible: {transition: {staggerChildren: 0.1,},},}}viewport={{ once: true }}>
                {productsData.sizes.map((item, index) => (
                  <motion.button key={index}onClick={() => setSize(prev => (prev === item ? '' : item))} className={`border rounded-lg py-2 px-4 bg-gray-100 cursor-pointer hover:scale-110 transition duration-300 ${item === size ? 'border-[#FF7043] text-[#FF7043]' : ''}`}variants={{ hidden: { opacity: 0, y: 10 },visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },}}>
                    {item}
                  </motion.button>
                ))}   
              </motion.div>
            </div>
            <button onClick={()=>addToCart(productsData._id,size)} className='bg-[#115e59] rounded-[15px] hover:scale-110 transition duration-200 text-white px-8 py-3 text-sm active:bg-[#115e599a] '>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 ' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1 '>
            <motion.p initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:0.6}}>100% Original product.</motion.p>
            <motion.p initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:0.8}}>Cash on delivery is available on this product.</motion.p>
            <motion.p initial={{x:80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}}>Easy return & exchange policy within 7 days.</motion.p>
          </div>
          </div>
        </div>
      </div>

      {/* Description & Review Section */}
      <div className='mt-20'>
        <motion.div initial={{x:-80, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}} className='flex'>
          <b className='border px-5 py-3 text-sm '>Description</b>
          <p className='border px-5 py-3 text-sm '>Reviews (122) </p>
        </motion.div>
        <motion.div className='flex flex-col gap-4 border p-6 text-sm text-gray-500 '>
          <motion.p initial={{x:-180, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}}>Rebel Mart is your ultimate fashion destination for men, women, and kids. We offer a diverse collection of stylish, comfortable, and affordable dresses for every occasion from casual wear to festive outfits. Whether you're shopping for daily essentials or something special, Rebel Mart ensures quality, variety, and value. Dress confidently with our carefully curated selections made to suit every taste and budget.</motion.p>
          <motion.p initial={{x:180, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:1}}>Rebel Mart isn’t just a clothing store it’s where your style finds its voice. Explore our exclusive range of men’s, women’s, and kids’ dresses designed to help you express your unique identity. From timeless classics to bold new trends, we make fashion accessible, comfortable, and empowering for everyone. Step into Rebel Mart and dress the way you feel confident, bold, and true.</motion.p>
        </motion.div>
      </div>

      {/* Related-Products */}
      <motion.div initial={{y:50, opacity:0}} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className='mt-20 '>
        <RelatedProducts category={productsData.category} subCategory={productsData.subCategory} />
      </motion.div>

    </div>
  ) : <div className='opacity-0 '></div>
}

export default Product
