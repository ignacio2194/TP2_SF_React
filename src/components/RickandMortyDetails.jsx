import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import LoadingSpinner from "./LoadingSpinner";
const RickandMortyDetails = () => {
  const { id } = useParams();
  const [charact, setCharacter] = useState({});
  const { image, name, species, origin, location, gender, status } = charact;

  const getDataCharacter = async () => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    console.log(url);
    const data = await fetch(url);
    const res = await data.json();
    setCharacter(res);
  };

  useEffect(() => {
    getDataCharacter();
  }, []);

  return (
    <div className="">
    
      {id > 825 || isNaN(id) === true ? (
        <Error404 />
      ) : (
        <div className=" container  mx-auto mb-[200px] w-1/2 flex  items-center justify-center shadowForCard rounded ">
          <div>
            <img className=" w-full " src={image} alt="" />
          </div>
          <div className="flex flex-col ml-10 ">
            <div className="characterData">
              <h1 className="text-white font-bold text-xl"> Name: {name}</h1>
              <h2 className=" text-[#54ea0f] font-semibold text-lg">
                {" "}
                Species: {species}
              </h2>
              <h2 className=" text-[#54ea0f] font-semibold text-lg">
                {" "}
                Gender: {gender}
              </h2>
              <h2 className=" text-[#54ea0f] font-semibold text-lg">
                {" "}
                Last know location: {location?.name}
              </h2>
              <h2 className=" text-[#54ea0f] font-semibold text-lg ">
                {" "}
                Origin: {origin?.name}
              </h2>
              <h2
                className={
                  status === "Alive"
                    ? "bg-characterAlive text-white font-bold inline  text-2xl py-1 mt-2 "
                    : status === "unknown"
                    ? "bg-characterUnknown  text-white font-bold inline-block  text-2xl py-1 mt-2 "
                    : "bg-characterDead  text-white font-bold inline-block  text-2xl py-1 mt-2 "
                }
              >
                {" "}
                Status: {status}
              </h2>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default RickandMortyDetails;
