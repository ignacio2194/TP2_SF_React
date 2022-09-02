import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";
const RickAndMortyCards = () => {
  const [character, setCharacter] = useState([]);
  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character";
    const data = await fetch(url);
    const res = await data.json();
    console.log(res.results.episode)

    setCharacter(res.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <h1 className="text-3xl font-bold text-center">
      Rick and morty Characters
    </h1>
    <div className="grid grid-cols-3 container mx-8 my-8">
    {character.map((item) => (

      <div key={item.id}>
        <div className="itemCards_Container_img">
          <img src={item.image} alt="images" />
        </div>

        <div className="itemCards_Container_data">
          <h1 className="font-bold text-gray-700">{item.name}</h1>
          <h3 className="font-semibold text-gray-700">
            Last known location: {item.location.name}</h3>
          
        </div>
      </div>
    ))}
    </div>

  </div>
  );
};

export default RickAndMortyCards;
