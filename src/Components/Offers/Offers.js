import React from 'react';
import female11 from "../Asset/female15.jpg";
import './Offer.css';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCT</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={female11} alt="" />
        </div>
    </div>
  )
}

export default Offers