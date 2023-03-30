import React from "react";
import Footer from "../components/Footer";
import '../styles/animations.css'

const Info = () => {
  return (
    <>
    <div className="text-center justify-center text-xl sm:text-3xl lg:text-4xl font-bold">A Eco-Friendly Guide To<span className="text-siteBlue mx-2">Waste Management</span></div>
      <div className="box flex flex-row md:flex-row gap-3 md:gap-5 justify-between items-center mb-5">
        <div className="md:flex flex items-start flex-col justify-center mt-5">
          <h1 className="hero-head text-xl sm:text-3xl lg:text-3xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
            <span>W</span>hy<span> R</span>ecycle?
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-base">
          More and more people recycle everyday. This helps to reduce the need for landfill and more costly forms of disposal. Recycling also reduces the need for extracting (mining, quarrying and logging), refining and processing raw materials all of which create substantial air and water pollution. This helps to save energy, reducing greenhouse gas emissions and helping to tackle climate change.
          </p>
        </div>
      </div>
      <div className="box flex flex-row md:flex-row gap-3 md:gap-5 justify-between items-center  mb-5">
        <div className="md:flex flex items-start flex-col justify-center mt-5">
          <h1 className="hero-head text-xl sm:text-3xl lg:text-3xl font-bold my-1 sm:my-3 lg:my-5 text-textBlack relative">
            <span>W</span>hat<span> N</span>ot <span>D</span>oing{" "}
            <span>R</span>ecyling <span>D</span>oes?
          </h1>
          <p className="text-[10px] sm:text-sm md:text-base lg:text-2l">
          Recycling is an important way to reduce our impact on the environment. However, if it is not done properly, it can have negative consequences for the planet. It is important to be aware of these effects, it can contaminate the air, water, and soil. This is because some of the materials that are not recycled properly can release harmful toxins into the environment. In some cases, not recycling properly can actually end up costing you money.
          </p>
        </div>
      </div>
      

      <Footer />
    </>
  );
};

export default Info;
