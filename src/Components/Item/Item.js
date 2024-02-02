import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Item.css"


const Item = (props) => {
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
                <div className="item-new-price">
                  ${props.new_price}
                </div> 
                <div className="item-old-price">
                  ${props.old_price}
                </div> 
              </div>   

    </div>
  )
}

export default Item