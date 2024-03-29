import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AdvertiseBanner = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { title, img, price, details, name, resalePrice, condition, location } = item
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
        <div className="card  shadow-xl  mt-4 mb-0">
            <figure><img src={img} alt="" className='h-[200px] w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title
                }</h2>
                <p>{details.slice(0, 50)}...</p>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-bold text-xl'>price:<del>  ${price}</del></p>
                        <p className='font-bold text-xl'>Resale price: ${resalePrice}</p>
                    </div>
                    <div>
                        <p className='font-bold text-xl'>Seller name: {name}</p>
                    </div>
                </div>
                <div className="card-actions ">
                    <p className='font-bold text-xl'>Location: {location}</p>
                    <button onClick={handleBooking} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseBanner;