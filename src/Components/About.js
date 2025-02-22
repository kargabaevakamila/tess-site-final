import React from 'react'

import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
   
        <div id="About.js" className="about-section-container">
            <div className='about-background-image-container'>
                <img src={AboutBackground} alt="" />
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBackgroundImage} alt='' />
            </div>
            <div className='about-section-text-container'>
                <p className='primary-subheading'>About Us</p>
                <h1 className='primary-heading'>We Use The Latest AI Technologies In Our Projects</h1>
                <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit adipiscing.
                </p>
                <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.
                </p>
                <div className='about-buttons-container'>
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
                </div>
            </div>
        </div>
    
  )
}

export default About
