import React from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import "./normalize.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
