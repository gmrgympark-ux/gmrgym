import React from 'react';
import { Link } from 'react-scroll'; // ✅ Import Link from react-scroll

export default function Header() {
  return (
    <div id="main">
      <div className="name">
        <h1>
          <span>GMR</span> UNISEX <span>GYM</span>
        </h1>
        <h2>STEP UP YOUR</h2>
        <h2>
          <span>FITNESS</span> WITH US
        </h2>

        <p className="details">Build Your Body And Fitness With Professional Touch</p>

        <div className="header-btns">
          {/* ✅ Replace <a> with <Link> */}
          <Link 
            to="contact" 
            smooth={true} 
            duration={1111} 
            className="header-btn"
          >
            JOIN US
          </Link>
        </div>
      </div>
    </div>
  );
}
