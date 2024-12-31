/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import nanicon from "../../../assets/icons/navicon.png";
import PrimaryButten from "../../../Components/PrimaryButten/PrimaryButten";
const Footer = () => {
  return (
    <footer className=" hidden lg:block footer footer-center px-10 bg-primary text-primary-content bg-gradient-to-r from-primary to-secondary rounded-t-[230px]">
      <div></div>
      <footer className="footer bg-transparent p-10 ">
        <aside>
          <img
            className="ml-16"
            src={nanicon}
            style={{ height: "100px" }}
            alt=""
          ></img>
          <p className="font-bold">
            ACME Industries Ltd. <br />
            Providing reliable tech since 2020
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="username@site.com"
                className="input rounded-l-md rounded-r-none join-item"
              />
              <button className="btn  btn-secondary rounded-r-md rounded-l-none border-white border-[1px] text-white  join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <p className="pb-3">Copyright © 2022 - All right reserved</p>
    </footer>
  );
};

export default Footer;
