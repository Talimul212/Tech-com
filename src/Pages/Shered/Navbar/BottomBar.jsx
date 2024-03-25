import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const BottomBar = () => {
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
        <Link to="/blog" className=" font-semibold btn btn-ghost normal-case">
          Blog
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
    <div className=" bg-white w-full border z-[9999]  p-3 flex justify-between fixed bottom-0">
      <Link to="/">
        <IoHomeOutline size={"30px"} />
      </Link>
      <Link to="/"></Link>
      <div className="dropdown dropdown-top dropdown-end">
        <label tabIndex={0} className=" ">
          <AiOutlineMenuUnfold size={"30px"} />
        </label>
        <ul
          tabIndex={1}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          {menuItems}
        </ul>
      </div>
    </div>
  );
};

export default BottomBar;
