import React from "react";
import banner from "../assets/heroBanner.jpg";
const Card = ({ pic, rewName }) => {
  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg border-sitegreen1 border pt-2 grid grid-cols-2 content-center ">
        <div class="flex justify-center">
        <img class="w-20 h-15 pb-2" src={pic} alt="Sunset in the mountains" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">{rewName}</div>
        </div>
        
      </div>
    </>
  );
};

export default Card;