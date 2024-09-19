import React from "react";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="container mx-auto  p-6  rounded-lg mt-10 ">
      {/* footer upper part start */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-2 md:gap-y-5 text-center">
        <div>
          <h3 className="font-semibold text-xl">Business</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>startup</p>
            <p>Employee</p>
            <p>Success</p>
            <p>Markets</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Technology</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Innovate</p>
            <p>Gadget</p>
            <p>Future Tech</p>
            <p>Upstart</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Travel</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Destinations</p>
            <p>Food & Drink</p>
            <p>Stay</p>
            <p>News</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Sports</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Football</p>
            <p>Tennis</p>
            <p>Golf</p>
            <p>Basket Ball</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Entertainment</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Movies</p>
            <p>Artist</p>
            <p>Television</p>
            <p>Influencer</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Features</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Call of Eart</p>
            <p>Freedom Project</p>
            <p>Inside Asia</p>
            <p>2 Degress</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">Weather</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Climate</p>
            <p>Earthquake</p>
            <p>strom Tracker</p>
            <p>Videos</p>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-xl">More</h3>
          <div className="text-slate-500 font-medium text-[17px]">
            <p>Design</p>
            <p>Invesment</p>
            <p>Worl for InBrief</p>
            <p>Support Us</p>
          </div>
        </div>
      </div>
      {/* upper part end */}
      <hr className="px-3 mx-2 my-4" />
      {/* footer lower part */}
      <div className="flex justify-between items-center gap-3">
        <div>
          <img src={logo} className="w-[110px]" alt="" />
          <p className="font-inter text-lg">Providing reliable news since 1992</p>
          <p className="text-gray-400 font-medium text-[17px]">
            {" "}
            Copyright @ 2024 InBrief
          </p>
        </div>

        <div className="text-2xl text-red-500 flex gap-4 mt-2">
          <FaFacebook />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
      </div>
    </div>
  );
};

export default Footer;
