import React from 'react'
import Navbar from './Navbar'
/*import BannerBackground from "../Assets/home-banner-background.png"*/
import BannerImage from "../Assets/home-banner-image.png"
// import { FiArrowRight } from 'react-icons/fi'

const home = () => {
  return (
      <div className ="home-container">
        <Navbar/>
        <div className="home-banner-container">


          
            <div className="home-text-section">
              <h1 className="primary-heading">
                Tessaract.
                <br />
                We Can Help.
              </h1>
              <p className="primary-text">
              Make your websites stronger with us. Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit adipiscing.
              </p>
              <button className="secondary-button">
                Get to know us
              </button>
            </div>

          
            <div className="home-image-container">
              <img src={BannerImage} alt=""/>
            </div>
          
       

        </div>
      </div>
  )
}

export default home
