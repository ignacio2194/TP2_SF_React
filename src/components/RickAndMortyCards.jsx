import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className=" bg-container">
      <h1 className="text-3xl font-bold text-center text-white ">
        Rick and morty Characters
      </h1>
      <div className="grid grid-cols-3 gap-3 ">
        {character.map((item,index) => (
          
         <Link  key ={index}to={`/DetailsCharacter/${item.id}`}  className="cursor-pointer">
            <div
              key={item.id} 
              className="max-w-sm rounded overflow-hidden shadow-lg border-3 border-solid border-[#758efc] mx-20 my-5 mainContainer_character__contenido" 
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
                <img
                  src={item.image}
                  alt="images"
                  className="w-full rounded-t"
                  id={item.id}
                />
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
          </Link>
        ))}
      </div>

      <div className="flex justify-around">
        <button className="  text-white  text-lg py-1 px-4 rounded-md bg-black  ">
          back
        </button>
        <button className="  text-white  text-lg py-1 px-4 rounded-md  bg-black  ">
          next
        </button>
      </div>
    </div>
  );
};

export default RickAndMortyCards;
