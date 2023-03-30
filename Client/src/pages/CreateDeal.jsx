import React from "react";
import { Button } from "@mui/material";

import { FaImage } from "react-icons/fa";
import axios from "axios";
import Base_URL from "../axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateDeal = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        userNo: "+917987383757",
        dealerNo: "+919575966607",
        
        hMessage:
          "Your order has been successfully made. Hope you will get the service as soon as possible",
        sMessage:
          "Hey Rohan! You have received a new deal. Kindly look into the details through application",
        orderData: JSON.stringify(orderData),
      };
      const kuchbhi = {
        houseHold : orderData.name,
        address: orderData.address,
        scrapType: orderData.scrapType,
        mass: orderData.mass,
        dealer : 'Rohan',
      };
      // console.log(orderData);
      await axios.post(`${Base_URL}/transac/newDeal`, data);
      await axios.post(`${Base_URL}/transac/add`, kuchbhi);
navigate("/success")
      toast.success('Hey!! Your booked a new deal, Checkout Timeline for updates')
      // console.log(data);

    } catch (err) {
      toast.error('Some error occured, Please try again')
    }

  };

  const [orderData, setOrderData] = useState({
    name: "",
    address: "",
    scrapType: "",
    mass: "",
  });

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="flex flex-col p-10 m-0" onSubmit={handleSubmit}>
        <div className="container mx-auto flex gap-2 flex-col md:w-[40%]">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            className="p-2 border outline rounded-2xl text-lg"
            onChange={handleChange}
            value={orderData.name}
          />
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            className="p-2 border outline rounded-2xl text-lg"
            onChange={handleChange}
            value={orderData.address}
          />
          <input
            type="text"
            placeholder="Enter Scrap type"
            name="scrapType"
            className="p-2 border outline rounded-2xl text-lg"
            onChange={handleChange}
            value={orderData.scrapType}
          />
          <input
            type="text"
            placeholder="Enter Relative mass"
            name="mass"
            className="p-2 border outline rounded-2xl text-lg"
            onChange={handleChange}
            value={orderData.mass}
          />
          <textarea cols="30" rows="10" placeholder="any extra details" className="p-2 border outline rounded-2xl text-lg"></textarea>
          <label
            htmlFor="imageFile"
            className="text-gradient text-xl flex gap-2 items-center"
          >
            <div className="">
              <FaImage />
            </div>
            Add an image :{" "}
          </label>
          <input type="file" accept="image/*" className="text-black" />
          <Button variant="contained" type="submit">
            CREATE
          </Button>
          <Button variant="contained">Back</Button>
        </div>
      </form>
    </>
  );
};

export default CreateDeal;
