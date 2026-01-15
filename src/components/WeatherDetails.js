import React from 'react'


const WeatherDetails = (props) => {
  return (
    <div className='weather_details'>
        <img src = {props.icon} alt="image"/>
        <h1>{props.temp} * C </h1>
        <h1 className='city'>{props.city}</h1>
        <h3>{props.country}</h3>
        <h3>Latitude {props.lat}  -  Longitude {props.long}</h3>
    </div>
  )
}

export default WeatherDetails
