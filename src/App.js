import React from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import RickAndMortyCards from "./components/RickAndMortyCards";
import RickandMortyDetails from "./components/RickandMortyDetails";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Users from "./components/Users";
import Error404 from "./components/Error404";
import './index.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/Users/"
                element={<Users />}
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
