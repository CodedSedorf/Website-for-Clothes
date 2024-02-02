import React from 'react'
import "./Hero.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hand_icon from "../Asset/hand-icon.png"
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import heroImage from "../Asset/hero-image-removebg.png"

const Hero = () => {
  return (
    <div className='container-hero'>
        <Container fluid="md" className='hero'>
            <Row>
                <Col className='hero-left'>
                    <h2>NEW ARRIVALS ONLY</h2>      
                    <div>
                        <div className="hero-hand-icon">
                            <p>new</p>
                            <img className='hand-icon' src={hand_icon} alt="hand" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <IoArrowForwardCircleOutline />
                    </div>
                    {/* <div className='hero-left'>
                        <div className='hero-hand-icon'>
                            <h2>NEW ARRIVALS</h2>
                            <p>New</p>
                            <img className='hand-icon' src="https://www.iconarchive.com/download/i108509/google/noto-emoji-people-bodyparts/12050-waving-hand.1024.png" alt="hand" />
                        <p>Collections</p>
                        <p>For everyone</p>
                        </div>

                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src="" alt="" />
                    </div> */}
                    
                </Col>
                <Col className='hero-right'>
                    <img src={heroImage} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Hero