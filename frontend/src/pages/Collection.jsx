import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent');

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedTypes, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const toggleCategory = (value) => {
    setSelectedCategories((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleType = (value) => {
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter(item =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedTypes.length > 0) {
      productsCopy = productsCopy.filter(item =>
        selectedTypes.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sorted = [...filterProducts];

    switch (sortType) {
      case 'low-high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        applyFilter();
        return;
    }
    setFilterProducts(sorted);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt'>
      <div className='min-w-60 sm:w-1/4'>
      <motion.div initial={{x:50, opacity:0}} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{duration:0.5 }}>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl text-[#115e59] flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden transition-transform duration-500 ease-in-out ${showFilter ? 'rotate-90' : ''}`} alt='dropdown' />
        </p>
      </motion.div>
        
        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className={`border border-gray-300 text-[#115e59] pl-5 py-3 mt-6 ease-in-out  ${showFilter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-full sm:opacity-100 sm:block`} >
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            {['Men', 'Women', 'Kids'].map((item) => (
              <label key={item} className={`flex items-center gap-2 cursor-pointer ${selectedCategories.includes(item) ? 'text-black font-medium' : 'text-gray-700'}`}>
                <input className='w-3'type='checkbox' value={item} checked={selectedCategories.includes(item)} onChange={() => toggleCategory(item)} />
                  {item}
              </label>
            ))}
          </div>
        </motion.div>

        {/* Subcategory Filter */}
        <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className={`border border-gray-300 text-[#115e59] pl-5 py-3 my-5 ease-in-out  ${showFilter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-full sm:opacity-100 sm:block`} >
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light'>
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
              <label key={item} className={`flex items-center gap-2 cursor-pointer ${selectedTypes.includes(item) ? 'text-black font-medium' : 'text-gray-700'}`}>
                <input className='w-3' type='checkbox' value={item} checked={selectedTypes.includes(item)} onChange={() => toggleType(item)} />
                  {item}
              </label>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 mt-10'>
          <motion.div initial={{ y: -30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true,amount:0.3 } }>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} viewport={{once:true, amount:0.3 }} > 
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-[#115e598a] text-[#115e59] rounded-[25px] text-sm px-2' >
            <option value='relavent'>Sort by: Relevance</option>
            <option value='low-high'>Sort by: Low-High</option>
            <option value='high-low'>Sort by: High-Low</option>
          </select>
          </motion.div>
        </div>

        {/* Animated Products Grid */}
        <motion.div key={`${sortType}-${selectedCategories.join('-')}-${selectedTypes.join('-')}-${search}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6' >
          {filterProducts.map((item, index) => (
            <motion.div key={`${item._id}-${index}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }} >
              <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Collection;

















// import React, { use, useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { motion } from 'framer-motion';

// const Collection = () => {
//   const { products , search , showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);

//   // Keep track of selected filters
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedTypes, setSelectedTypes] = useState([]);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [category,setCategory] = useState([]);
//   const [subCategory,setSubCategory] = useState([]);
//   const [sortType, setSortType] = useState('relavent');

//   const togglecategory = (e) => {

//     if (category.includes(e.target.value)) {
//       setCategory(prev=> prev.filter(item => item !== e.target.value));
//     }
//     else{
//       setCategory(prev=> [...prev, e.target.value]);
//     }
//   }

//   const togglesubcategory = (e) => {
//     if (subCategory.includes(e.target.value)) {
//       setSubCategory(prev=> prev.filter(item => item !== e.target.value));
//     }
//     else{
//       setSubCategory(prev=> [...prev, e.target.value]);
//     }
//   }

//   useEffect(()=>{
//     setFilterProducts(products)
//   },[])

//   useEffect(()=>{
//     applyFilter();
//   },[category, subCategory , search, showSearch]);

//   const toggleCategory = (value) => {
//     setSelectedCategories((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   const toggleType = (value) => {
//     setSelectedTypes((prev) =>
//       prev.includes(value)
//         ? prev.filter((item) => item !== value)
//         : [...prev, value]
//     );
//   };

//   useEffect(() => {
//   let filtered = products;

//   if (selectedCategories.length > 0) {
//     filtered = filtered.filter(product => selectedCategories.includes(product.category));
//   }

//   if (selectedTypes.length > 0) {
//     filtered = filtered.filter(product => selectedTypes.includes(product.subCategory));
//   }

//   setFilterProducts(filtered);
//   }, [products, selectedCategories, selectedTypes]);

//   useEffect(()=>{
//     sortProduct();
//   },[sortType])

//   const applyFilter = () => {
//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//     }

//     if(category.length > 0) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category));
//     }
//     if(subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
//     }
//     setFilterProducts(productsCopy);
//   }

//   const sortProduct = () => {

//     let fpCopy = filterProducts.slice();

//     switch(sortType) {
//       case 'low-high':
//         setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
//         break;
//       case 'high-low':
//         setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//   }

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt '>
//       {/* Collection-left - Filter-option */}
//       <div className='min-w-60 sm:w-1/4'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img src={assets.dropdown_icon} className={`h-3 sm:hidden transition-transform duration-500 ease-in-out ${showFilter ? 'rotate-90' : '' } `} alt="" />
//         </p>

//         {/* Category-Filter */}
//         <div className={`border border-gray-300 text-[#115e59] pl-5 py-3 mt-6 ease-in-out transition-all duration-500 ${showFilter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-full sm:opacity-100 sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light'>
//             {['Men', 'Women', 'Kids'].map((item) => (
//               <label
//                 key={item}
//                 className={`flex items-center gap-2 cursor-pointer ${
//                   selectedCategories.includes(item) ? 'text-black font-medium' : 'text-gray-700'
//                 }`}
//               >
//                 <input
//                   className='w-3'
//                   type='checkbox'
//                   value={item}
//                   checked={selectedCategories.includes(item)}
//                   onChange={() => toggleCategory(item)}
//                   // onChange={togglecategory}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Subcategory-Filter */}
//         <div className={`border border-gray-300 text-[#115e59] pl-5 py-3 my-5 ease-in-out transition-all duration-500 ${showFilter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} sm:max-h-full sm:opacity-100 sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light'>
//             {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
//               <label
//                 key={item}
//                 className={`flex items-center gap-2 cursor-pointer ${
//                   selectedTypes.includes(item) ? 'text-black font-medium' : 'text-gray-700'
//                 }`}
//               >
//                 <input
//                   className='w-3'
//                   type='checkbox'
//                   value={item}
//                   checked={selectedTypes.includes(item)}
//                   onChange={() => toggleType(item)}
//                   // onChange={togglesubcategory}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Collection-right */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4 mt-10 '>
//           <Title text1={'ALL'} text2={'COLLECTIONS'} />
//           {/* Product-Sort */}
//           <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-[#115e598a] text-[#115e59] rounded-[25px] text-sm px-2 '>
//             <option value="relavent">Sort by: Relavent</option>
//             <option value="low-high">Sort by: Low-High</option>
//             <option value="high-low">Sort by: High-Low</option>
//           </select>
//         </div>

//         {/* Map-Products */}
//         {/* <motion.div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//             {
//               filterProducts.map((item,index)=>(
//                 <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//               ))
//             }
//         </motion.div> */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {
//             filterProducts.map((item, index) => (
//               <motion.div key={item._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
//                 <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} />
//               </motion.div>
//             ))
//           }
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Collection;




