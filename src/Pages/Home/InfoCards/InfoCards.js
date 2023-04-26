import React, { useEffect, useState } from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import PrimaryButten from "../../../Components/PrimaryButten/PrimaryButten";
import InfoCard from "./InfoCard";
import Advertising from "../Advertising/Advertising";
import Loading from "../../Shered/Loading/Loading";
const InfoCards = () => {
    const [advertising, setAdvertising] = useState([]);
    useEffect(() => {
        fetch('https://tech-com-server.vercel.app/advertising')
            .then(res => res.json())
            .then(data => setAdvertising(data))
    }, [])
 
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9:30am to 5:00pm everyday",
      icon: clock,
      bgClass: "bg-gradient-to-r from-primary  to-secondary",
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary  to-secondary",
    },
  ];
  return (
    <>
    <p className="text-2xl font-bold text-secondary text-center">Advertising</p>
    <h2 className='text-4xl text-center 
           '>Here are {advertising.length} top-rating
            laptop advertising</h2> 
    <div className="my-8 lg:grid grid-cols-12 gap-2">
      <div className=" col-span-5">
        {cardData.map((card) => (
          <InfoCard key={card.id} card={card}></InfoCard>
        ))}
        <div className="rounded-lg bg-accent shadow-lg flex flex-col justify-center items-center mt-3 py-4">
          <h2 className="text-5xl text-white font-bold">Text us to sell</h2>
          <h2 className="text-4xl font-semibold my-7 text-white">
            (312) 588-6220
          </h2>
          <p className="text-xl text-white">
            (Text messages only. No phone calls.)
          </p>
          <p className="my-3 text-xl text-white font-bold">Message us via</p>
          <PrimaryButten>Facebook Messenger</PrimaryButten>
        </div>
      </div>
      <div className=" col-span-7 ">
        <Advertising advertising={advertising}></Advertising>
      </div>
    </div>
    </>
  );
};

export default InfoCards;
