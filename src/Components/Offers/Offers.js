import React from 'react'
import female4 from "../Asset/female4.jpg"

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>OFFERS FOR YOU</h1>
            <h6>ONLY ON THE BEST SELLERS PRODUCTS</h6>
            <button>CHECK NOW</button>
        </div>
        <div className="offers-right">
            <img src={female4} alt="" />
        </div>
    </div>
  )
}

export default Offers