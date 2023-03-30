import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.jpg";

const Dealer = ({ name, bio, address, phone, coord, id }) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="box flex flex-col justify-center items-center my-4 w-full h-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-10 flex-wrap p-3 w-[60vw] md:w-auto md:p-0 rounded-2xl md:rounded-l-full md:rounded-r-full border-2 border-black ">
            <div>
              <img
                src={logo}
                alt=""
                className="rounded-full object-contain w-16 lg:w-20"
              />
            </div>
            <div className="flex flex-row items-center gap-5 flex-wrap justify-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-lg sm:text-xl lg:text-1xl font-bold">
                  {name}
                </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg sm:text-lg lg:text-xl text-gray-500">
                  Phone : {phone}
                </h2>
                </div>
                
{/*       
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg sm:text-xl lg:text-1xl font-bold">
                  Distance : <span className="text-gray-500">{(Math.random() * 5 + 5).toFixed(2)} km</span>
                </h1>
              </div> */}
              {/* <div className="flex flex-col items-center lg:flex-row justify-center">
                <h1 className="text-lg lg:text-2xl">Rating:</h1>
                <p>🌟🌟🌟🌟🌟</p>
              </div> */}
            </div>
            <div className="flex-1 w-full">
                <button className="w-full bg-gray-300 text-textBlack font-bold flex justify-center border-1.5 border-black items-center md:rounded-full md:p-3 lg:p-5 md:py-5 lg:py-7 hover:bg-green-500" onClick={() => navigate(`/dealerprofile/${id}`)}>
                  Deal
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dealer;