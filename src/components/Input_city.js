import React from 'react'
import search_icon from "../assets/magnifying-glass.png"

const Input_city = (props) => {
  return (
    <>
      <div className='input_container'>
        <input type= "text" onChange= {props.handle_city} value={props.city} placeholder="Enter City Name"/>
        <img src={search_icon} onClick={props.search_city}/>
      </div>
    </>
  )
}

export default Input_city
