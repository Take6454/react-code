import React from 'react';
import './About.css';
import pic from './images/takeshi3.jpg';

function About() {
    return (
        <div className="about_section">
            <div className="max-width">
                <h1>About</h1>   
                
                <div className="about_container">
                    <div className="left">
                        <img src={pic} alt=""/>
                    </div> 
                    <div className="right">
                        <h2>Hi I'm Takeshi Otani</h2>
                        <p className="right-p">I'm a web developer with 1 year of experience. I'm naturally curious and love programming! When I'm not programming I'm usually practicing Jazz piano or watching Seinfeld.</p> 
                        <div className="contact">
                            <h3>Contact me!</h3>   
                            <p>otani6454@gmail.com</p> 
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default About
