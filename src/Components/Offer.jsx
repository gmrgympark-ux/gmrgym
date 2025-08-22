import React from 'react';
import { Link } from 'react-scroll'; 

function Offer() {
  return (
    <div id="offer">
      <div className="pr-heading">
        <h1>
          A BIG <span>OFFER</span> FOR THIS YEAR
        </h1>

        <p className="details">
          We're giving an exclusive <span style={{ color: 'red' }}>30% OFF</span> — a deal no one else offers in this area! 
          Don’t miss your chance to grab the best value for premium services.
        </p>

        <div className="pr-btns">
          <Link 
            to="contact" 
            smooth={true} 
            duration={1111} 
            className="pr-btn"
          >
            JOIN NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Offer;
