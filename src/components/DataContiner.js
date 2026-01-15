import React from 'react'
import humidity_img from '../assets/weather.png'
import wind_img from '../assets/wind.png'

const DataContiner = (prop) => {
  return (
    <div className='data_container'>
      <div>
        <img src={humidity_img} alt="Humidity"/>
        <h3> {prop.humidity} % Humidity </h3>
      </div>
      <div>
        <img src={wind_img} alt="Wind"/>
        <h3> {prop.wind} % Wind Speed </h3>
      </div>
    </div>
  )
}

export default DataContiner
