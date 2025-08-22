/* Featurebox.jsx */
import React from 'react';

function Featurebox(props) {
  return (
    <div className='a-box' style={{ 
      height: 'auto', 
      minHeight: '400px',
      border: '1px solid transparent', // Add transparent border initially
      transition: '0.4s ease-in-out'
    }}>
        <div className='a-b-img'>
            <img src={props.image} alt={props.title}/>
        </div>
         
        <div className='a-b-text'>
            <h2>{props.title}</h2>
            <p style={{
              display: 'block',
              webkitLineClamp: 'unset',
              webkitBoxOrient: 'unset',
              overflow: 'visible',
              textOverflow: 'unset',
              maxWidth: '90%',
              lineHeight: '1.4',
              fontSize: '0.95rem'
            }}>{props.description}</p>
        </div>
    </div>
  );
}

export default Featurebox;