import React, { useContext, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../store";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const navigate = useNavigate();

  const handleClick = () => {
    if (userInfo) {
      // dispatch({ type: "SIGN_OUT" });
      navigate("/profile");
    } else {
      navigate('/login')
    }
  };

  return (
    <div className="box flex flex-row justify-between items-center my-4 relative mb-3">
      <Link to="/">
        <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl text-siteBlue font-bold cursor-pointer">
          scrap buddy
        </h1>
      </Link>
      <div
        className="text-textBlack text-2xl sm:hidden block"
        onClick={() => setOpen(!open)}
      >
        <HiOutlineMenuAlt2 />
      </div>
      <div
        className={`nav-links ${
          open
            ? "flex duration-500 flex-col absolute top-10 right-10 bg-white z-50 p-3 border-sitegreen border-2"
            : "hidden"
        } sm:translate-x-0 sm:static sm:border-none sm:flex sm:flex-row items-center gap-5 text-[10px] xs:text-sm md:text-lg text-textBlack font-medium`}
      >
        <Link to="/">
          <p className="cursor-pointer text-lg  sm:text-md font-bold text-textBlack  bg-clip-text hover:text-siteBlue ">Home</p>
        </Link>
          <div className="cursor-pointer text-lg  sm:text-md font-bold text-textBlack  bg-clip-text hover:text-siteBlue " onClick={() => navigate(`${userInfo ? '/deal' : '/login'}`)}>Deal</div>
        
          <p className="cursor-pointer text-lg  sm:text-md font-bold text-textBlack  bg-clip-text hover:text-siteBlue " onClick={() => navigate('contact')}>Contact Us</p>
  
          <p className="cursor-pointer text-lg  sm:text-md font-bold text-textBlack  bg-clip-text hover:text-siteBlue " onClick={handleClick}>
            {userInfo ? `${userInfo.name}` : "Log In"}
          </p>
      </div>
    </div>
  );
}