import React from "react";
import { useParams } from "react-router-dom";
const RickandMortyDetails = () => {
  const { id, name, status } = useParams();

  return (
    <div className="bg-container">
      <div>
        {" "}
        <img
          src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
          alt=""
        />
      </div>
      <div>
        {" "}
        <p className="text-white">{name}</p>
        <p className="text-white">{status}</p>
      </div>
    </div>
  );
};

export default RickandMortyDetails;
