import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Programs from './components/Programs';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Popup from './components/popup';
import PdfGenerator from './components/PdfGenerator';
import { Toaster } from 'react-hot-toast';
//import { Analytics } from "@vercel/analytics/next"
function App() {
  return <>
  <div>
  <Navbar/>
  <Home/>
  <About/>
  <PdfGenerator/>
  <Programs/>
  <Gallery/>
  <Donate/>
  <Contact/>
  <Popup/>
  <Footer/>
  </div>
  <Toaster/>  
  {/* <Analytics/> */}
  </>
}

export default App