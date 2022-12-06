//This component for displaying cards with the name of the city, as well as the button for adding a new one
import React, { useEffect, useState } from "react";
import './cards.css'
function Cards({ setQuery, NameCity, IsCardShowed}) {
  const [CardShowed, SetCardShowed] = useState(true)
  
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem('cityArr'))||[{
    id: 1,
    title: "London",
  },
  {
    id: 2,
    title: "Kharkiv",
  },
  {
    id: 3,
    title: "Berlin",
  },
  {
    id: 4,
    title: "Kyiv",
  },
  {
    id: 5,
    title: "Paris",
  },
] )

useEffect(()=>{
  localStorage.setItem('cityArr', JSON.stringify(cities))
}, [cities])

const createCard = () =>{ 
  
  const createCard = {
    id: cities.length+1,
    title: NameCity,
  }
  
  SetCardShowed(false)
  setCities([...cities, createCard])
  localStorage.setItem('cityArr', JSON.stringify(cities))
 
}
console.log(IsCardShowed)
const deleteCard = (id) => {

  setCities(cities.filter((item)=>item.id !== id))
  
}
  return (
    <div>
      <div className="cards_content">
      {cities.map((city) => (
        
        <div className="cards"
        key={city.id}>
        <div
          className="city"
          
          onClick={() => setQuery(city.title)}
        >
          {city.title}
          
        </div>
        <button className="button_delete" onClick={()=>deleteCard(city.id)}>X</button>
        </div>
        
      ))}
    </div>  
      {(NameCity && IsCardShowed === true) && (
        <div className=  {CardShowed ? "add_cards_content" : "not_active"}>
            <p className="p">Would you like to add {NameCity} to your save list?</p>
            <button onClick={createCard} className="button_add">ADD</button>
      
        </div>
      )}
    </div>
  );
}

export default Cards;
