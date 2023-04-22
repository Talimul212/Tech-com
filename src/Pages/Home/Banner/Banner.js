import React from 'react';
import BannerImg from '../../../assets/images/BannerImg.webp'
import PrimaryButten from '../../../Components/PrimaryButten/PrimaryButten';
import './Banner.css'
const Banner = () => {
    return (
        <div style={{height: "500px"}} className=" hero rounded-lg  card-bordered" id='heroImg'>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className=" lg:text-5xl text-2xl font-bold text-blue-600">How it works
                    </h1>
                    <p className="py-6 lg:text-2xl font-semibold">We began Tech.com back in 2020 to give used electronics a new life. Since then, we’ve saved thousands of gadgets from landfills, and paid our customers in the process.</p>
                    <PrimaryButten>Get start</PrimaryButten>
                </div>
            </div>
        </div>
    );
};

export default Banner;