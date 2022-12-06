//This component for displaying input, to search for a city
import React, { useState } from "react";
import "./MyInput.css";
const MyInput = ({ setQuery, IsCardShowed }) => {

  const [city, setCity] = useState("");
  const handleSearchClick =() =>{
    if(city !==''){
    	setQuery(city)
      IsCardShowed(true)
      setCity(" ")
    }

  }
  console.log(city)
  
  
  return (
    <div className="search_content">
    <input 
      className="myInput"
      placeholder="Search for city"
      value={city}
      onChange={e => setCity(e.target.value)} />
      <button className="myButton" onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default MyInput;