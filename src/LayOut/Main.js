import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shered/Footer/Footer";
import Navbar from "../Pages/Shered/Navbar/Navbar";
import BottomBar from "../Pages/Shered/Navbar/BottomBar";

const Main = () => {
  return (
    <div>
      <div className="lg:mx-24 mx-2">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <div className="flex fixed bottom-0 lg:hidden">
        <BottomBar></BottomBar>
      </div>
    </div>
  );
};

export default Main;
