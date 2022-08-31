
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RickAndMortyCards = () => {
    
    const [character,setCharacter] = useState([])
    const getData = async()=>{
        const url = 'https://rickandmortyapi.com/api/character'
        const data =  await fetch(url)
        const res = await data.json()
       console.log(res);
        setCharacter(res.results)
}
useEffect(()=>{
    getData()

},[])
 
  return (
  
    <div>
          <h1 className='text-3xl font-bold text-center'>Rick and morty Characters</h1>
        {character.map(item=>(
        <div key={item.id} className='itemCards'>
            <div className='itemCards_container'>
            <h1>{item.name}</h1>
            <h3>{item.status}</h3>
            <p> Last known location: {item.location.name}</p>
            <img src={item.image} alt="images" />
            </div>
        </div>
     ))
        }</div>
  )
}

export default RickAndMortyCards