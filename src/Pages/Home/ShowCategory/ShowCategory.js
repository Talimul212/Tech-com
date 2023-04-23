import React from 'react';
import'./ShowCategory.css'
const ShowCategory = () => {
    const image1='https://transvelo.github.io/mediacenter-html/assets/images/banners/banner-narrow-01.jpg'
    const image2='https://transvelo.github.io/mediacenter-html/assets/images/banners/banner-narrow-02.jpg'
    return (
        <div className=' lg:grid grid-cols-12 mt-8 gap-8'>
           <div className=' col-span-6 w-50%'>
           <div
            className='p-8 text-left  bg-size-left lg:h-full ' style={{ backgroundImage: `url(${image1})`,backgroundRepeat:"no-repeat"}}>
            
            <h1 className=' font-bold text-xl lg:text-3xl'>New Life</h1>
            <p className=' font-extralight lg:text-xl'>Introducing New Category</p>
            </div>
           </div>
           <div className='col-span-6 lg:w-50% mt-4 lg:mt-0 md:mt-0'>
           <div className='p-8 text-right bg-size-left lg:h-full' style={{ backgroundImage: `url(${image2})`,backgroundRepeat:"no-repeat"}}> 
           <h1 className=' font-bold text-xl lg:text-3xl'>New Life</h1>
            <p className=' font-extralight lg:text-xl'>Introducing New Category</p></div>
           </div>
        </div>
    );
};

export default ShowCategory;