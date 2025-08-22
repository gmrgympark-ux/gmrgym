
import React from 'react';
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
      <div className='about-image'>
          <img src={aboutimage} alt='GMR Gym About'/>
      </div>
      <div className='about-text'>
          <h1>
            <span>LEARN</span> MORE <span>ABOUT</span> GMR GYM
          </h1>
          <p>
            Since January 2014, GMR Gym has been the premier fitness destination in our area. 
            With over 50+ fitness models and expert trainers, we provide unisex training programs 
            tailored for both men and women. Our state-of-the-art facility features hybrid machines 
            and the latest gym equipment, making us the highest quality gym in this region.
          </p>
          
          <div className="gym-highlights" style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}>
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>Established January 2014 - 10+ Years of Excellence</span>
            </div>
           
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>50+ Professional Fitness Models & Expert Trainers</span>
            </div>
            
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>Unisex Training Programs for Men & Women</span>
            </div>
            
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>Advanced Hybrid Machines & Latest Equipment</span>
            </div>
            
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>Highest Quality Gym Facility in the Area</span>
            </div>
            
            <div className="highlight-item" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '10px',
              color: '#cecece'
            }}>
              <span style={{
                color: '#FF1414',
                fontWeight: 'bold',
                marginRight: '10px',
                fontSize: '1.2rem'
              }}>✓</span>
              <span>Reputation Built on Results & Member Satisfaction</span>
            </div>
          </div>
      
      </div>
    </div>
  );
}

export default About;