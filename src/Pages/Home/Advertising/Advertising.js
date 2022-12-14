import React, { useEffect, useState } from 'react';
import AdvertiseBanner from './AdvertiseBanner';

const Advertising = () => {
    const [advertising, setAdvertising] = useState([]);
    useEffect(() => {
        fetch('https://tech-com-server.vercel.app/advertising')
            .then(res => res.json())
            .then(data => setAdvertising(data))
    }, [])
    return (
       <div>
           <h2 className='text-5xl mt-20 mb-6 text-center font-bold
           '>Here are {advertising.length} top-rating
           <br/> laptop advertising</h2>
           <div className='grid gap-6 grid-cols-1 lg:grid-cols-2 md:grid-rows-2 rounded-2xl px-12'>
           {
               advertising.map(item => <AdvertiseBanner
                   key={item._id} item={item}
               >
               </AdvertiseBanner>
               )
           }
       </div>      
       </div>
       
)};

export default Advertising;