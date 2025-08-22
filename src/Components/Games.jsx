import React from 'react';
import aboutimage from '../images/Games.png';

function Games() {
  return (
    <div id="games" style={{
      backgroundColor: '#000000',
      fontFamily: 'Lato, sans-serif',
      padding: '60px 0'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '50px'
      }}>
        {/* Image Section */}
        <div style={{
          flex: '1 1 300px',
          maxWidth: '600px'
        }}>
          <img 
            src={aboutimage} 
            alt="Games & Activities" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '2px 2px 12px rgba(184, 0, 0, 0.445)',
              border: '1px solid #FF1414'
            }}
          />
        </div>

        {/* Text Section */}
        <div style={{
          flex: '1 1 300px',
          color: '#fff',
          maxWidth: '600px'
        }}>
          <h1 style={{
            fontSize: '3rem',
            color: '#FF1414',
            fontWeight: '500',
            margin: '0px',
            padding: '0px'
          }}>
            CELEBRATING SPORTS & GAMES
          </h1>

          <p style={{
            fontSize: '1.2rem',
            color: '#cecece',
            lineHeight: '1.6',
            marginTop: '20px',
            marginBottom: '30px'
          }}>
            We believe in nurturing both physical strength and mental sharpness. From classic indoor games like 
            <strong> Carrom</strong> and <strong> Chess</strong> to active outdoor challenges, we organize a variety of 
            activities that bring energy, excitement, and engagement to our community. It's not just about muscles — 
            it's about mind, movement, and motivation.
          </p>

         
        </div>
      </div>

      {/* Inline Media Queries */}
      <style jsx>{`
        @media(max-width: 768px) {
          #games h1 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Games;
