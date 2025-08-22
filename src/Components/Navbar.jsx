import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 51) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={2111}>
                <img 
                    src={logo} 
                    alt='Logo'
                    style={{
                        height: 'auto',
                        width: 'clamp(50px, 12vw, 99px)',
                        maxHeight: 'clamp(50px, 12vw, 99px)',
                        objectFit: 'contain',
                        transition: 'all 0.3s ease'
                    }}
                />
            </Link>
            
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            
            <ul className='menu'>
                <li><Link to='main' smooth={true} duration={1111}>Header</Link></li>
                <li><Link to='features' smooth={true} duration={1111}>Features</Link></li>
                <li><Link to='offer' smooth={true} duration={1111}>Offer</Link></li>
                <li><Link to='awards' smooth={true} duration={1111}>Awards</Link></li>
                <li><Link to='games' smooth={true} duration={1111}>Games</Link></li>
                <li><Link to='about' smooth={true} duration={1111}>About</Link></li>
                <li><Link to='contact' smooth={true} duration={1111}>Contact</Link></li>
            </ul>

            {/* Logo Responsive Styles Only */}
            <style jsx>{`
                .logo img {
                    width: clamp(50px, 12vw, 99px) !important;
                    height: auto !important;
                    max-height: clamp(50px, 12vw, 99px) !important;
                    object-fit: contain !important;
                    transition: all 0.3s ease !important;
                }

                .nav.active .logo img {
                    width: clamp(40px, 10vw, 80px) !important;
                    max-height: clamp(40px, 10vw, 80px) !important;
                }

                @media (max-width: 768px) {
                    .logo img {
                        width: clamp(45px, 15vw, 70px) !important;
                        max-height: clamp(45px, 15vw, 70px) !important;
                    }
                    
                    .nav.active .logo img {
                        width: clamp(35px, 12vw, 60px) !important;
                        max-height: clamp(35px, 12vw, 60px) !important;
                    }
                }

                @media (max-width: 480px) {
                    .logo img {
                        width: clamp(40px, 18vw, 60px) !important;
                        max-height: clamp(40px, 18vw, 60px) !important;
                    }
                    
                    .nav.active .logo img {
                        width: clamp(30px, 15vw, 50px) !important;
                        max-height: clamp(30px, 15vw, 50px) !important;
                    }
                }
            `}</style>
        </nav>
    );
}

export default Navbar;