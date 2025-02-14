import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Offer from './Components/Offers';
import LoginorSignup from './Components/LoginorSignup';

function App() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
    
  return(
    <>
    <div className={`absolute z-30 w-full h-full ${isLoginOpen ? 'overflow-hidden' : ''}`}>
     <Navbar setIsLoginOpen={setIsLoginOpen}/>
      <Offer/>
      <Footer/>
      </div>
      <div className="absolute z-50">
    {isLoginOpen && <LoginorSignup onClose={() => setIsLoginOpen(false)} />}
    </div>
    </>
  )
}

export default App
