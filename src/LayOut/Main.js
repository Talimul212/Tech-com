import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer/Footer";
import Navbar from "../Pages/Shered/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div className="lg:mx-24 mx-2">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
