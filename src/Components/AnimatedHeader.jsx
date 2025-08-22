import React, { useState, useEffect } from 'react';
import img1 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.16 (1).jpeg';
import img2 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.16 (2).jpeg';
import img3 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.16 (3).jpeg';
import img4 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.16.jpeg';
import img5 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.17.jpeg';
import img6 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.18.jpeg';
import img7 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.19.jpeg';
import img8 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.21 (1).jpeg';
import img9 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.38 (1).jpeg';
import img10 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.22 (1).jpeg';

import img11 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.22.jpeg';

import img12 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.23 (1).jpeg';

import img13 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.23 (2).jpeg';

import img14 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.23.jpeg';

import img15 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.25.jpeg';

import img16 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.29.jpeg';

import img17 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.30.jpeg';

import img18 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.32 (1).jpeg';

import img19 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.32.jpeg';

import img20 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.33.jpeg';

import img21 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.34.jpeg';

import img22 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.35 (1).jpeg';

import img23 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.35.jpeg';

import img24 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.36 (1).jpeg';

import img25 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.36 (2).jpeg';

import img26 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.36.jpeg';

import img27 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.37 (1).jpeg';

import img28 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.37 (2).jpeg';

import img29 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.37.jpeg';

import img30 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.38.jpeg';

import img31 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.39 (1).jpeg';

import img32 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.39 (2).jpeg';

import img33 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.40 (1).jpeg';

import img34 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.40 (2).jpeg';

import img35 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.40 (3).jpeg';

import img36 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.40.jpeg';

import img37 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.41 (1).jpeg';

import img38 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.41 (2).jpeg';

import img39 from '../images/AnimationHeaderImgFolder/WhatsApp Image 2025-08-18 at 10.36.42.jpeg';
export default function AnimatedHeader() {
  // Sample images - replace with your actual image paths
const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35,
  img36, img37, img38, img39
];



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const getImageStyle = (index) => {
    const isActive = index === currentIndex;
    const isPrev = index === (currentIndex - 1 + images.length) % images.length;
    const isNext = index === (currentIndex + 1) % images.length;
    
    if (isActive) {
      return {
        transform: 'translateX(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10
      };
    } else if (isPrev) {
      return {
        transform: 'translateX(-150px) rotateY(-20deg) scale(0.8)',
        opacity: 0.6,
        zIndex: 5
      };
    } else if (isNext) {
      return {
        transform: 'translateX(150px) rotateY(20deg) scale(0.8)',
        opacity: 0.6,
        zIndex: 5
      };
    } else {
      return {
        transform: 'translateX(300px) rotateY(30deg) scale(0.7)',
        opacity: 0,
        zIndex: 1
      };
    }
  };

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      background: 'black',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      
      {/* Background Animation */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)',
        animation: 'float 6s ease-in-out infinite'
      }}></div>

      {/* Images Container */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              transition: 'all 1s ease-in-out',
              transformStyle: 'preserve-3d',
              ...getImageStyle(index)
            }}
          >
            <img 
              src={image} 
              alt={`Gym Image ${index + 1}`}
              style={{
                maxWidth: '300px',
                maxHeight: '80vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: '0 20px 40px rgba(255, 0, 0, 0.3)',
                border: '2px solid rgba(255, 255, 255, 0.2)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 20,
        textAlign: 'center',
        color: 'white',
        maxWidth: '800px',
        padding: '0 20px',
        marginTop: '700px'
      }}>
       
        
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '600',
          margintop: '40px',
          opacity: 0.9,
          color: 'white'
        }}>
          STEP UP YOUR LIFE
        </h2>
        
        <h2 style={{
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: '600',
          marginBottom: '30px',
          opacity: 0.9
        }}>
          <span style={{
            background: 'linear-gradient(45deg, #ff0000, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold'
          }}>FITNESS</span> WITH US
        </h2>

        <p style={{
          fontSize: '1.2rem',
          marginBottom: '40px',
          opacity: 0.8,
          lineHeight: '1.6',
          color: 'white'
        }}>
        Achieve Peak Fitness with Expert Training
        </p>

        
      </div>


      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
        style={{
          position: 'absolute',
          left: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 0, 0, 0.2)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 20,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 0, 0, 0.5)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 0, 0, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        ←
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 0, 0, 0.2)',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 20,
          backdropFilter: 'blur(10px)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 0, 0, 0.5)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 0, 0, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        →
      </button>
     
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
        @keyframes glow {
          0% { filter: brightness(1); }
          100% { filter: brightness(1.2) drop-shadow(0 0 10px currentColor); }
        }
      `}</style>
    </div>
  );
}