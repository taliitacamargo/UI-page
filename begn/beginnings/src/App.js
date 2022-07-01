import React from "react";

import { Link, Route, Router, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Header from "./Components/Header";


import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";




function App() {

  return (
    <div>
      <Header />
      <div>
        
          <Routes>
            <Route exact path="/" element={<AboutUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/shop" element={<Shop />} />
          </Routes>
      
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  );
}

export default App;