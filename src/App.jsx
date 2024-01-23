// Styles
import './App.scss'
// Components
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

import { Cuerpo } from './components/cuerpo/Cuerpo.jsx';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Contact } from './components/contact/Contact.jsx';
import Marketplace from './components/marketplace/Marketplace.jsx';
import About from './components/about/About.jsx';
import Product from './components/product/product.jsx';


export default function App() {
  return (
    <>
  <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Cuerpo />}> */}
          <Route path= '/' element={<Cuerpo />} />
    
          <Route path="about" element={<About />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="contact" element={<Contact />} /> 
          <Route path="product" element={<Product />} /> 
         {/* </Route> */}

      </Routes>
    </BrowserRouter>
    </>
  )
}
