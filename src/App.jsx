import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
function App() {
  return <>
  <div>
  <Navbar/>
  <Home/>
  <About/>
  <Programs/>
  <Donate/>
  <Contact/>
  <Footer/>
  </div>
  <Toaster/>  
  </>
}

export default App