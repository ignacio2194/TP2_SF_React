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
    console.log(res.results.episode);

    setCharacter(res.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" bg-container">
      <h1 className="text-3xl font-bold text-center text-white ">
        Rick and morty Characters
      </h1>
      <div className="grid grid-cols-3 gap-3 ">
        {character.map((item) => (
          <div
            key={item.id}
            className="max-w-sm rounded overflow-hidden shadow-lg border-3 border-solid border-[#758efc] mx-20 my-5"
          >
            <div className="relative">
              <p
                className={
                  item.status === "Alive"
                    ? "bg-characterAlive text-white font-semibold inline rounded-full text-lg absolute top-3 right-3 px-2 py-1"
                    : item.status === "unknown"
                    ? "bg-characterUnknown  text-white inline rounded-full text-lg absolute top-3 right-3 px-2 py-1 "
                    : "bg-characterDead  text-white inline rounded-full text-lg absolute top-3 right-3 px-2 py-1 "
                }
              >
                {item.status}
              </p>
              <img src={item.image} alt="images" className="w-full rounded-t" />
            </div>

            <div className="itemCards_Container_data px-6 py-4">
              <h1 className="font-bold text-[#54ea0f] text-center">
                {item.name}
              </h1>
              <h3 className="font-semibold text-[#54ea0f] text-center">
                Last location: {item.location.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMortyCards;
