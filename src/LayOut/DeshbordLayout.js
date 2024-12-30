import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { FaBuysellads } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import navicon from "../assets/icons/navicon.png";
import UseTitle from "../hooks/UseTitle";

const DeshbordLayout = () => {
  UseTitle("Dashboard");
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);

  if (!user) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <div className="flex justify-between items-center mx-2">
        <img
          className=" block md:hidden w-full"
          style={{ width: "60px", height: "60px" }}
          src={navicon}
          alt=""
        ></img>
        <label
          tabIndex={2}
          htmlFor="dashboard-drawer"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      <div className="drawer drawer-mobile  ">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ml-4">
          <Outlet></Outlet>
        </div>
        <div className="border-r-[1px] drawer-side bg-white shadow-lg ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay "></label>
          <ul className=" menu py-4 lg:w-[15vw]  w-80 text-base-content text-bold lg:bg-white bg-slate-100 ">
            <Link to="/" className="flex gap-3 items-center" href="/">
              <img
                className="ml-3 mb-2"
                style={{ width: "40px", height: "40px" }}
                src={navicon}
                alt=""
              ></img>
              <p className="text-xl hidden lg:block font-semibold">Tech.com</p>
            </Link>
            <li>
              <p className="text-lg h-10 flex justify-between items-center border-[1px] font-bold">
                {user?.displayName}
              </p>
            </li>
            <li>
              <Link
                className="text-lg my-1 h-10 flex justify-between items-center border-[1px] font-bold"
                to="/"
              >
                Home <FaHome />
              </Link>
            </li>

            {isBuyer && (
              <li>
                <Link
                  className="text-lg h-10 flex justify-between items-center border-[1px] font-bold"
                  to="/dashboard"
                >
                  My Orders <FaCartArrowDown />
                </Link>
              </li>
            )}
            {isSeller && (
              <>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold"
                    to="/dashboard"
                  >
                    My Orders <FaCartArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold"
                    to="/dashboard/addproduct"
                  >
                    {" "}
                    Add products <FaCartArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl my-3 font-bold"
                    to="/dashboard/myproduct"
                  >
                    {" "}
                    My products
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold"
                    to="/dashboard"
                  >
                    My Orders <FaCartArrowDown />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold my-1"
                    to="/dashboard/reports"
                  >
                    Reported <BiSolidError />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold "
                    to="/dashboard/allusers"
                  >
                    Users <FaUsers />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold mt-1"
                    to="/dashboard/managedoctors"
                  >
                    Sellers <FaUserLock />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold mt-1"
                    to="/dashboard/managedoctors"
                  >
                    Ads <FaBuysellads />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg h-10 flex justify-between items-center border-[1px] font-bold mt-1"
                    to="/dashboard/managedoctors"
                  >
                    Banner <FaImages />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeshbordLayout;
