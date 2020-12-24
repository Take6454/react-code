import React from 'react'
import './App.css';
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'

function App(){
  return(
    <div>
      <HeroSection/>
      <About/>
      <Skills/>
      <Works/>
      <Footer/>   
    </div>
  );
}

export default App


