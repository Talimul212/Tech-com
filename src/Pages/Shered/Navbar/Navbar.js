import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import navicon from "../../../assets/icons/navicon.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      <li>
        <Link
          to="/"
          className=" rounded-lg font-semibold btn btn-ghost normal-case"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/services"
          className=" font-semibold btn btn-ghost normal-case"
        >
          Products
        </Link>
      </li>

      <li>
        <Link
          to="/contact"
          className=" font-semibold btn btn-ghost normal-case"
        >
          Contact
        </Link>
      </li>

      {user?.uid ? (
        <>
          <li>
            <Link
              to="/dashboard"
              className=" font-semibold btn btn-ghost normal-case "
            >
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className=" font-semibold btn btn-ghost normal-case"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link
              to="/login"
              className=" font-semibold btn btn-ghost normal-case"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className=" font-semibold btn btn-ghost normal-case rounded-lg"
            >
              Sign Up
            </Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar  flex justify-between">
      <div className="navbar-start">
        <Link to="/" className="flex gap-3 items-center" href="/">
          <img
            style={{ width: "60px", height: "60px" }}
            src={navicon}
            alt=""
          ></img>
          <p className="text-xl hidden lg:block font-semibold">Tech.com</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
