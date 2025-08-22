import React from 'react';
import Navbar from './Components/Navbar';
import Feature from './Components/Feature';
import Header from './Components/Header';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';
import Awards from './Components/Awards';
import Games from './Components/Games';
import Footer from './Components/Footer';
import AnimatedHeader from './Components/AnimatedHeader';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Feature/>
     <Offer/>
     <Awards/>
     <Games/>
     <About/>
     <AnimatedHeader/>
     <Contact/>
     <Footer/>
    
    </div>
  );
}

export default App;
