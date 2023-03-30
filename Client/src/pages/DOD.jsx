import React from 'react'
import Card from '../components/Card'

const DOD = () => {
  return (

    <div className='flex flex-col box content-center justify-center'>
        <h1 className='text-center m-9 font-extrabold text-sitegreen1 text-6xl bg-clip-text '>Price List</h1>
        <h2 className='text-center m-9 font-bold text-sitegreen1 text-3xl bg-clip-text '>Recycleables</h2>
  <div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>
  <Card pic="https://swapeco.com/img/scrap-item/beam.png" rewName="Iron: Rs. 30/Kg" />
  <Card pic="https://swapeco.com/img/scrap-item/bin.png" rewName="Plastic: Rs.10/kg"/>
  <Card pic="https://swapeco.com/img/scrap-item/newspaper-report.png" rewName="Newspaper: Rs.18/kg"/>
  </div>

  <div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>
  <Card pic="https://swapeco.com/img/scrap-item/wire.png" rewName="Copper: Rs. 425/Kg"/>
  <Card pic="https://cdn-icons-png.flaticon.com/512/4038/4038710.png" rewName="Aluminum: Rs. 105/Kg"/>
  <Card pic="https://ik.imagekit.io/h1rxzpffx/scrapuncle/assets/ico_books_CTqSUha3X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674804437147&tr=w-64%2Ch-64%2Cfo-auto" rewName="Books/Copies: Rs. 18/Kg"/>
  </div>

  <h2 className='text-center m-9 font-bold text-sitegreen1 text-3xl bg-clip-text '>Appliances</h2>
  <div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>
  <Card  pic="data:image/png;base64,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" rewName="AC: Rs. 4000/piece"/>
  <Card pic="https://swapeco.com/img/scrap-item/ventilation.png" rewName="Cooler: Rs. 30/Kg" />
  <Card  pic="https://swapeco.com/img/scrap-item/smart-washing-machine.png" rewName="Washing Machine: Rs. 800/piece"/>
  </div>
  <div className='flex flex-row box  justify-between mb-5 mt-3 flex-wrap'>
  <Card pic="https://swapeco.com/img/scrap-item/fridge.png" rewName="Fridge: Rs.800/piece"/>
  <Card pic="https://swapeco.com/img/scrap-item/microwave.png" rewName="Microwave: Rs.200/piece"/>
  <Card pic="https://swapeco.com/img/scrap-item/television.png" rewName="TV: Rs.150/piece"/>
  
  </div>
  
</div>
  )
}

export default DOD