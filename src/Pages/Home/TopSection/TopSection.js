import React from 'react';
import TopMenu from '../../../Components/TopComponets/TopMenu/TopMenu';
import TopBanner from '../../../Components/TopComponets/TopBanner/TopBanner';

const TopSection = () => {
    return (
        <div className=' lg:grid grid-cols-12 gap-6 mt-2'>
           
           <div className=' col-span-3'>
            <TopMenu></TopMenu>
           </div>
           <div className=' col-span-9 mt-5 lg:mt-0 md:mt-0'>
            <TopBanner></TopBanner>
           </div>
        </div>
    );
};

export default TopSection;