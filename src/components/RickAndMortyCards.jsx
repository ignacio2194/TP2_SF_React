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
      {character.map((item) => (
        <div key={item.id} className=" grid grid-cols-3">
          <div className="itemCards_Container">
            <img src={item.image} alt="images" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RickAndMortyCards;
