import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Detail from "../../Appointment/AvailableAppointments/Detail";
import Loading from "../../Shered/Loading/Loading";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbbkey;
  const navigate = useNavigate();
  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://tech-com-server.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
            price: data.price,
            condition: data.condition,
            details: data.Detail,
            location: data.location,
            date: data.date,
            resalePrice: data.resaleprice,
          };
          console.log(doctor);
          // save doctor information to the database
          fetch("https://tech-com-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} ,your product add successsfully`);
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex flex-row justify-center mt-8">
      <div className=" p-7 shadow-lg rounded-xl">
        <h2 className="text-3xl text-center font-bold mb-4">
          Add Your Product :
        </h2>
        <hr />
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="lg:flex gap-4 mt-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Name :</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Email :</span>{" "}
              </label>
              <input
                type="text"
                name="email"
                {...register("email", { required: "email is required" })}
                className="input input-bordered w-full"
                defaultValue={user?.email}
                disabled
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">Selling Product :</span>{" "}
              </label>
              <select
                {...register("specialty", {
                  required: "specialty is required",
                })}
                className="select input-bordered w-full"
              >
                {specialties.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-controls">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Upload photo :</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: "photo is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.img && (
                <p className="text-red-500">{errors.img.message}</p>
              )}
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="form-controls">
              <label className="label">
                {" "}
                <span className="label-text font-bold">
                  Purchase Product Date :
                </span>
              </label>
              <input
                type="date"
                {...register("date", {
                  required: "date is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>

            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-bold">
                  Product Condition :
                </span>{" "}
              </label>
              <select
                {...register("condition", {
                  required: "condition is required",
                })}
                className="select input-bordered w-full"
              >
                <option selected>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
              </select>
            </div>
          </div>
          <div className="form-controls">
            <label className="label">
              {" "}
              <span className="label-text font-bold">Description :</span>
            </label>
            <input
              type="text"
              {...register("Detail", {
                required: "Details is Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.Detail && (
              <p className="text-red-500">{errors.Detail.message}</p>
            )}
          </div>

          <div>
            <div className="form-controls">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Location :</span>
              </label>
              <input
                type="text"
                {...register("location", {
                  required: "location is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.location && (
                <p className="text-red-500">{errors.location.message}</p>
              )}
            </div>
          </div>
          <div className="lg:flex gap-4">
            <div className="form-controls">
              <label className="label">
                {" "}
                <span className="label-text font-bold"> Original Price :</span>
              </label>
              <input
                type="number"
                {...register("price", {
                  required: "price is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div className="form-controls">
              <label className="label">
                {" "}
                <span className="label-text font-bold">Resale Price :</span>
              </label>
              <input
                type="number"
                {...register("resaleprice", {
                  required: "resaleprice is Required",
                })}
                className="input input-bordered w-full "
              />
              {errors.resaleprice && (
                <p className="text-red-500">{errors.resaleprice.message}</p>
              )}
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary  bg-gradient-to-r from-primary  to-secondary text-white w-full mt-4"
            value="Add"
          />
          <div></div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
