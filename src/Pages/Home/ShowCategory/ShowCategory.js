import React from 'react';
import'./ShowCategory.css'
const ShowCategory = () => {
    const image1='https://transvelo.github.io/mediacenter-html/assets/images/banners/banner-narrow-01.jpg'
    const image2='https://transvelo.github.io/mediacenter-html/assets/images/banners/banner-narrow-02.jpg'
    return (
        <div className=' grid grid-cols-12 mt-5'>
           <div className=' col-span-6 w-50%'>
           <div
            className='p-8 text-left  bg-size-left' style={{ backgroundImage: `url(${image1})`,backgroundRepeat:"no-repeat"}}>
            <h1>New Life</h1>
            <p>Introducing New Category</p>
            </div>
           </div>
           <div className='col-span-6 w-50%'>
           <div className='p-8 text-right bg-size-left' style={{ backgroundImage: `url(${image2})`,backgroundRepeat:"no-repeat"}}> <h1>New Life</h1>
            <p>Introducing New Category</p></div>
           </div>
        </div>
    );
};

export default ShowCategory;