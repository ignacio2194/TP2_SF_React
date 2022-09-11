import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

const Users = () => {
  const [usuarios, setUsuario] = useState([]);
  const getData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url);
    const res = await data.json();
    console.log(res)
    setUsuario(res);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className = "flex justify-center items-center h-5/6 w-full">
      <div className="bg-container text-white w-full h-full flex justify-center items-center">
        <table className = "bg-red-300 border border-white h-96 text-center w-4/5">
          <tr className = "bg-blue-400">
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Company Name</th>
          </tr>
          {usuarios.map( usuario => 
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>{usuario.phone}</td>
              <td>{usuario.address.city}</td>
              <td>{usuario.company.name}</td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}

export default Users;