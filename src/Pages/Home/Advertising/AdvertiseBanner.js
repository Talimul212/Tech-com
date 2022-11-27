import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AdvertiseBanner = ({ item }) => {
    const{user}=useContext(AuthContext);
    const { title, img,price,details,name } = item
    const handleBooking = ()=> {

        const booking = {
            buyerName:user.displayName,
            email:user.email,
            laptopName:title,
            price
        }
        console.log(booking);
        //Todo: send data to the server
        //and once data is saved then close the model
        // and display success toast  
        fetch('http://localhost:5000/bookings', {
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
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <div className="card  shadow-xl image-full mt-20 mb-0">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title
                }</h2>
                <p>{details}</p>
               <div className='flex justify-between'>
               <p className='font-bold text-xl'>price: ${price}</p>
                <p className='font-bold text-xl'>Seller name: {name}</p>
               </div>
                <div className="card-actions ">
                    <button onClick={handleBooking} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBanner;