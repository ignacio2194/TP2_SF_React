import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RickAndMortyCards from "./components/RickAndMortyCards";
import RickandMortyDetails from "./components/RickandMortyDetails";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Usuarios from "./components/Usuarios";
import Error404 from "./components/Error404";
import './index.css';

function App() {
  return (
    <div className="App px-12 h-screen ">
      <NavBar />
      <Routes>
          <Route
              path="/"
              element={<Home />}
          /> 
           <Route
              path="/Users/"
              element={<Usuarios/>}
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
              path="/DetailsCharacter/:id/"
              element={<RickandMortyDetails />}
          />        
        <Route
              path="*"
              element={<Error404  />}
          />    
      </Routes>  
      
    </div>
  );
}

export default App;
