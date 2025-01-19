import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Offer from './Components/Offers';

function App() {

  return(

    <>
    <div className="flex flex-col ">
      <Navbar />
      <Offer/>
      <Footer/>
    </div>
    </>
  )
}

export default App
