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
import Loading from '../../../Pages/Shered/Loading/Loading';

const SellerAds = ({advertising}) => {
  const { user } = useContext(AuthContext);
  if(!advertising){
    return(<Loading></Loading>)
  }
    const { title,  resalePrice } = advertising
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
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
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
            <div className="card card-bordered  mt-4 h-[389px]">
           <figure>
           <img src={item?.img} alt="" style={{height:"180px"}}/>
           </figure>
            <div className=" card-body px-3 h-[120px]">
                <h2 className="card-title font-bold text-xl">{item?.title
                }</h2>
                <div className=' text-left'>
                    <div>
                        <p className='font-semibold text-sm'>price:<del>  ${item?.price}</del></p>
                        <p className='font-semibold text-sm'>Resale price: ${item?.resalePrice}</p>
                <p className=' text-sm font-semibold'>Details: {item?.details.slice(0,30)}.....</p>
                    </div>
                </div>
            </div>
                <div className=" card-body px-2 ">
                    
                    <button onClick={handleBooking} className=" btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-stone-50 text-xs w-full p-0">Order Now</button>
                </div>
        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    );
};

export default SellerAds;