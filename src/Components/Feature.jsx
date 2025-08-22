/* Feature.jsx */
import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features' >
      <h1>WHY CHOOSE GMR GYM</h1>
      <div className='a-container'>
        <Featurebox 
          image={fimage1} 
          title="Weight Lifting"
          description="Professional weight training with certified trainers. Build strength and muscle mass with our complete range of free weights, barbells, and dumbbells for all fitness levels."
        />
        
        <Featurebox 
          image={fimage2} 
          title="Targeted Muscle Training"
          description="Specialized equipment for specific muscle group isolation. Our hybrid machines ensure precise muscle targeting for maximum results and faster transformation."
        />
        
        <Featurebox 
          image={fimage3} 
          title="Flexibility & Mobility"
          description="Enhance your flexibility and muscle mobility with our dedicated stretching area. Improve your range of motion and prevent injuries with guided flexibility programs."
        />
        
        <Featurebox 
          image={fimage4} 
          title="Cardio Excellence"
          description="State-of-the-art cardio equipment including treadmills, ellipticals, and bikes. Burn calories effectively while improving cardiovascular health and endurance."
        />
      </div>
    </div>
  );
}

export default Feature;