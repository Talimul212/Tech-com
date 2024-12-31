import React from "react";
import { Link } from "react-router-dom";

const AppointmenOption = ({ appointmenOption, num }) => {
  const { name, Description, img, id } = appointmenOption;
  return (
    <>
      {num % 2 == 0 ? (
        <div className=" flex card-bordered bg-base-100 shadow-xl">
          <img style={{ height: "300px" }} src={img} alt=""></img>
          <div className="card-body">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>{Description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary text-white w-full">
                <Link to={`/detail/${id}`}>See Details</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex card-bordered bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p>{Description}</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary text-white w-full">
                <Link to={`/detail/${id}`}>See Details</Link>
              </button>
            </div>
          </div>
          <img style={{ height: "300px" }} src={img} alt=""></img>
        </div>
      )}
    </>
  );
};

export default AppointmenOption;
