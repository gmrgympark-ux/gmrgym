/* Contact.jsx */
import React, { useRef } from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';

function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(form.current);
    
    // Create URL encoded data
    const data = new URLSearchParams();
    data.append('name', formData.get('name'));
    data.append('email', formData.get('email'));
    data.append('mobile', formData.get('mobile')); // 👈 Added mobile field
    data.append('message', formData.get('message'));
    
    console.log('Sending data:', Object.fromEntries(data));
    
    // 👇 REPLACE THIS WITH YOUR NEW DEPLOYMENT URL 👇
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxd_lOZN31QitkNWNoJSVokQSBSxogJAUBv-G6bHjX4c4B1rf5R2AKuw6_bEKMi3qrLaw/exec';
    
    try {
      console.log('Making request to:', scriptURL);
      
      // Method 1: Try with fetch
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
        mode: 'no-cors' // This helps with CORS issues
      });
      
      console.log('Response received');
      
      // With no-cors mode, we can't read the response, so we assume success
      alert('Message sent successfully!');
      form.current.reset();
      
    } catch (error) {
      console.error('Fetch failed, trying alternative method:', error);
      
      // Method 2: Fallback using form submission
      try {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = scriptURL;
        form.target = '_blank';
        
        // Add form data
        data.forEach((value, key) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
        
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        alert('Message sent! (Please check the new tab that opened)');
        e.target.reset();
        
      } catch (fallbackError) {
        console.error('Both methods failed:', fallbackError);
        alert('Error sending message. Please try again or contact us directly.');
      }
    }
  };

  return (
    <div id='contact'>
      <h5>Get in Touch</h5>
      <h1 style={{ color: '#FF1414' }}>CONTACT US</h1>


      <div className="container contact__container" style={{
        display: 'grid',
        gridTemplateColumns: '30% 58%',
        gap: '12%',
        marginBottom: '4rem'
      }}>
        {/* Contact Options - Left Side */}
        <div className="contact__options" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
          <article className="contact__option" style={{
            background: '#ffffff',
            padding: '1.2rem',
            borderRadius: '1.2rem',
            textAlign: 'center',
            border: '1px solid #e0e0e0',
            transition: 'all 400ms ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <TfiEmail className='contact__option-icon' style={{
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              color: '#FF1414'
            }}/>
            <h4 style={{ color: '#333', margin: '0.5rem 0' }}>Email</h4>
            <h5 style={{ color: '#666', margin: '0.5rem 0' }}>gmrgympark@gmail.com</h5>
            <a href="mailto:gmrgympark@gmail.com" target="_blank" rel="noopener noreferrer" style={{
              marginTop: '0.7rem',
              display: 'inline-block',
              fontSize: '0.8rem',
              color: '#FF1414',
              textDecoration: 'none'
            }}>Send a message</a>
          </article>

          <article className="contact__option" style={{
  background: '#ffffff',
  padding: '1.2rem',
  borderRadius: '1.2rem',
  textAlign: 'center',
  border: '1px solid #e0e0e0',
  transition: 'all 400ms ease',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}}>
 <BsInstagram className='contact__option-icon' style={{
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              color: '#FF1414'
            }}/>
  <h4 style={{ color: '#333', margin: '0.5rem 0' }}>Instagram</h4>
  <h5 style={{ color: '#666', margin: '0.5rem 0' }}>@balamurugan.murugan</h5>
  <a 
    href="https://www.instagram.com/balamurugan.murugan.18847876?igsh=YjBlaHU4dGo3azVk"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      marginTop: '0.7rem',
      display: 'inline-block',
      fontSize: '0.8rem',
      color: '#FF1414',
      textDecoration: 'none'
    }}
  >
    Visit Profile
  </a>
</article>


          <article className="contact__option" style={{
            background: '#ffffff',
            padding: '1.2rem',
            borderRadius: '1.2rem',
            textAlign: 'center',
            border: '1px solid #e0e0e0',
            transition: 'all 400ms ease',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <BsWhatsapp className='contact__option-icon' style={{
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              color: '#FF1414'
            }}/>
            <h4 style={{ color: '#333', margin: '0.5rem 0' }}>WhatsApp</h4>
            <h5 style={{ color: '#666', margin: '0.5rem 0' }}>+918940600040</h5>
            <a href="https://wa.me/918940600040" target="_blank" rel="noopener noreferrer" style={{
              marginTop: '0.7rem',
              display: 'inline-block',
              fontSize: '0.8rem',
              color: '#FF1414',
              textDecoration: 'none'
            }}>Send a message</a>
          </article>
        </div>

        {/* Contact Form - Right Side */}
        <form ref={form} onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.2rem'
        }}>
          <input 
            type='text' 
            name="name"
            placeholder='Your Full Name' 
            required
            style={{
              width: '100%',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              background: '#ffffff',
              border: '2px solid #FF1414',
              color: '#333',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          
          <input 
            type='email' 
            name="email"
            placeholder='Your Email' 
            required
            style={{
              width: '100%',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              background: '#ffffff',
              border: '2px solid #FF1414',
              color: '#333',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />

          {/* 👇 NEW MOBILE NUMBER FIELD 👇 */}
          <input 
            type='tel' 
            name="mobile"
            placeholder='Your Mobile Number' 
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit mobile number"
            style={{
              width: '100%',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              background: '#ffffff',
              border: '2px solid #FF1414',
              color: '#333',
              fontSize: '1rem',
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
          
          <textarea 
            name="message" 
            rows="7" 
            placeholder='Your Message' 
            required
            style={{
              width: '100%',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              background: '#ffffff',
              border: '2px solid #FF1414',
              color: '#333',
              fontSize: '1rem',
              fontFamily: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          ></textarea>
          
         <button 
            type='submit' 
            style={{
              width: '160px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #FF1414 20%, #f70000)',
              boxShadow: '5px 10px 30px rgba(255, 2, 2, 0.336)',
              borderRadius: '5px',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'all ease 0.5s',
              letterSpacing: '1px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.background = 'transparent';
              e.target.style.border = '2px solid #FF1414';
              e.target.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(90deg, #FF1414 20%, #f70000)';
              e.target.style.border = 'none';
              e.target.style.color = '#ffffff';
            }}
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Maps Embed - GMR Gym Location */}
      {/* 👇 GMR Gym, Singaperumal Koil Location 👇 */}
      <div style={{ 
        marginTop: '30px', 
        borderRadius: '10px', 
        overflow: 'hidden', 
        boxShadow: '0 4px 15px rgba(255, 20, 20, 0.4)',
        width: '80%',
        margin: '30px auto 0',
        position: 'relative'
      }}>
        {/* Pale overlay effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
        
        <iframe
          title="GMR Gym Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.234567890123!2d80.0031706!3d12.7587963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fb44ce089e57%3A0x8b73956a27890d58!2sGMR%20Gym!5e0!3m2!1sen!2sin!4v1690123456789!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ 
            border: 0,
            filter: 'brightness(0.9) contrast(0.8)'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        
        <a
          href="https://www.google.com/maps/place/GMR+Gym/@12.7587963,80.0031706,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52fb44ce089e57:0x8b73956a27890d58!8m2!3d12.7587963!4d80.0031706!16s%2Fg%2F11fb05z9k2?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#FF1414',
            color: '#fff',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            position: 'relative',
            zIndex: 2
          }}
        >
          View on Google Maps
        </a>
        <style jsx>{`
  @media (max-width: 768px) {
    .container.contact__container {
      grid-template-columns: 1fr !important;
      gap: 2rem;
    }

    .contact__option h5 {
      word-break: break-word;
      font-size: 0.9rem;
    }

    .contact__option a {
      font-size: 0.75rem;
    }

    form input,
    form textarea {
      font-size: 0.9rem;
    }

    h1 {
      font-size: 1.6rem;
      text-align: center;
    }

    h5 {
      text-align: center;
    }

    iframe {
      height: 250px !important;
    }

    #contact {
      padding: 0 1rem;
    }
  }
`}</style>

      </div>
    </div>
  );
}

export default Contact;