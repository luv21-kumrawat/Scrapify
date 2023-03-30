import React, { useEffect, useState } from 'react'
import Dealer from "../components/Dealer";
import { toast } from "react-toastify";
import Navbar from '../components/Navbar';
import axios from 'axios';


const Transaction = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      axios
      .get(`http://localhost:5000/transac/`)
      .then((res)=>{
        console.log(res.data);
        setData(res.data);
      });
    }
    catch (err) {
      console.log(err);
    }};
    useEffect(() => {
      getData();
    }, []);
  
  return (
      <div className='flex flex-col box content-center justify-center'>
      <h1 className='text-center m-9 font-bold text-siteBlue text-3xl bg-clip-text '>Transactions </h1>
      <table class="border-collapse border border-slate-500 table-fixed">
  <thead>
    <tr>
      <th class="border border-slate-600">#</th>
      <th class="border border-slate-600">Dealer</th>
      <th class="border border-slate-600">Household</th>
      <th class="border border-slate-600">Date</th>
      <th class="border border-slate-600">Mass</th>
    </tr>
  </thead>
  <tbody>
  {data.map((eachdata,index) => {
    
      return(
    <tr>
      <td class="border border-slate-700 text-center">{index+1}</td>
      <td class="border border-slate-700 text-center">{eachdata.dealer}</td>
      <td class="border border-slate-700 text-center">{eachdata.houseHold}</td>
      <td class="border border-slate-700 text-center">{eachdata.date}</td>
      <td class="border border-slate-700 text-center">{eachdata.mass}</td>
    </tr>
    
    )})}
  
  </tbody>
</table>
</div>
  )
}

export default Transaction;