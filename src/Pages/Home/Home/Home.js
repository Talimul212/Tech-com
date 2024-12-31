import { useState } from "react";
import UseTitle from "../../../hooks/UseTitle";
import About from "../About/About";
import Advertising from "../Advertising/Advertising";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import ShowCategory from "../ShowCategory/ShowCategory";
import Testimonial from "../Testimonial/Testimonial";
import TopSection from "../TopSection/TopSection";
import AvailableAppointments from "../../Appointment/AvailableAppointments/AvailableAppointments";

const Home = () => {
  UseTitle("Home");
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <TopSection></TopSection>
      <ShowCategory></ShowCategory>

      <h4 className="text-2xl font-bold text-center mt-16  text-secondary ">
        Products
      </h4>
      <h1 className="text-4xl text-center"> World Top Companyes Laptop</h1>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
      <Services></Services>
      <Testimonial></Testimonial>
      <InfoCards></InfoCards>
    </div>
  );
};

export default Home;
