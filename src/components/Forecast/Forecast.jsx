//This component to display the weather forecast
import React from "react";
import './forecast.css'


const Forecast = ({ forecast, NameCity}) => {
  
 
  
  

  return (
    <div className="weather">
     <h1 className="name">{NameCity}</h1>
     <div className="forecast_content">
        {forecast.map((item, idx) => ( 
          <div key={idx}
          
         >
            
                <div className="forecast" >
                  <p className="day">{(new Date(item.dt*1000)).toLocaleString("en-US", {weekday: "long"})}</p>
                  <img src={`icons/${item.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <p className="description">{item.weather[0].description}</p>
                  <p className="min-max">{Math.round(item.main.temp_max)}°C /{Math.round(item.main.temp_min)}°C</p>
                </div>
              
           </div>
              
        ))}
      </div>
      
    </div>
  );
};

export default Forecast;