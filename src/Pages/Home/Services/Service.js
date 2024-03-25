import React from "react";

const Service = ({ service }) => {
  const { icon, name, description } = service;
  return (
    <div className="-z-40  card bg-base-100 shadow-xl mt-4 lg:mt-0 hover:scale-110 duration-700">
      <figure className="px-10 pt-10">
        <img
          style={{ height: "70px" }}
          src={icon}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xl text-purple-600">{name}</h2>
        <p className=" font-light text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Service;
