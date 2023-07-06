import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Internship from "./components/Internship";

import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";
import "./styles/Contact.scss";
import "./styles/MediaQuery.scss";
import "./styles/Information.scss";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/> 

        <Route path="/contact" element={<Contact />}/>

        <Route path="/Internship" element={<Internship />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
