import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      textAlign: 'center',
      padding: '20px 10px',
      fontSize: '0.95rem',
      borderTop: '1px solid #ff1414',
      fontFamily: 'Lato, sans-serif',
      marginTop: '19px'  // ✅ Added top margin
    }}>
      <p style={{ margin: '0' }}>
        © {new Date().getFullYear()} GMR Gym Park. All rights reserved.
      </p>

      <style jsx>{`
        footer p {
          letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
          footer {
            font-size: 0.85rem;
            padding: 15px 5px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
