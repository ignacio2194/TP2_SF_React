import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../index.css";

const Usuarios = () => {
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
    <div className="text-orange-800">
      <table>
        <tr>
          <th>Name</th>
          <th>Id</th>
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
  );
}

export default Usuarios;