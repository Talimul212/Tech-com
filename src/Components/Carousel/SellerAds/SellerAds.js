import React, { useContext } from 'react';
import'./SellerAds.css'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const SellerAds = ({advertising}) => {

    const { user } = useContext(AuthContext);
    const { title,  resalePrice } = advertising
    console.log("lolo",advertising);
    const handleBooking = () => {
if(!user){
    toast.success("login please")
}
        const booking = {
            buyerName: user.displayName,
            email: user.email,
            laptopName: title,
            resalePrice
        }
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('https://tech-com-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('product order confirmed')
                }
                else {
                    toast.error(data.message)
                }
            })
    }
    
    return (
        <>
      <Swiper
       breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {advertising.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="card card-bordered  mt-4 ">
           <figure>
           <img src={item?.img} alt="" style={{height:"110px"}}/>
           </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-xl">{item?.title
                }</h2>
                <div className=' text-left'>
                    <div>
                        <p className='font-bold text-sm'>price:<del>  ${item?.price}</del></p>
                        <p className='font-bold text-sm'>Resale price: ${item?.resalePrice}</p>
                    </div>
                </div>
                <div className="card-actions ">
                    
                    <button onClick={handleBooking} className="btn btn-primary text-xs">Order Now</button>
                </div>
            </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    );
};

export default SellerAds;