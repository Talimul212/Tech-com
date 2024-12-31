import React from "react";
import image1 from "../../../assets/images/image1.jpg";
import image2 from "../../../assets/images/image2.jpg";
const ShowCategory = () => {
  return (
    <div className=" lg:grid grid-cols-12 mt-8 gap-8">
      <div className=" col-span-6 w-50%">
        <div
          className="p-8 text-left  bg-size-left lg:h-full "
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className=" font-bold text-xl lg:text-3xl">Latest Mobile</h1>
          <p className=" font-extralight lg:text-xl">
            Introducing New Category
          </p>
        </div>
      </div>
      <div className="col-span-6 lg:w-50% mt-4 lg:mt-0 md:mt-0">
        <div
          className="p-8 text-right bg-size-left lg:h-full"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className=" font-bold text-xl lg:text-3xl">Smart Watch</h1>
          <p className=" font-extralight lg:text-xl">
            Introducing New Category
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowCategory;
