import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RickAndMortyCards from "./components/RickAndMortyCards";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import './index.css';

function App() {
  return (
    <div className="App px-12  ">
      <NavBar />
      <Routes>
          <Route
              path="/"
              element={<Home />}
          />         
          <Route
              path="/Cards/"
              element={<RickAndMortyCards />}
          /> 
          <Route
              path="/Contact/"
              element={<ContactUs />}
          />         
          <Route
              path="/*"
              element={<RickAndMortyCards />}
          />         

      </Routes>  
      
    </div>
  );
}

export default App;
