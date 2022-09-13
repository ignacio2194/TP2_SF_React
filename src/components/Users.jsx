import React from "react";
import Footer from "./Footer";
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
    <div className = "flex  flex-col justify-center items-center h-5/6 w-full">
      <div className="bg-container text-black w-full h-full flex flex-col justify-center items-center my-5">
      <h1 className="text-3xl font-bold text-center text-white my-3">User Table</h1>
        <table className = "bg-white bg-opacity-80 border border-white h-96 text-center w-4/5 tabla">
          <tr className = "bg-blue-100">
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
      <Footer/>
    </div>
         
  );
}

export default Users;