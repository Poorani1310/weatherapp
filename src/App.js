import './App.css';

import WeatherDetails from './components/WeatherDetails';
import clear from './assets/clear.png'
import cloud from './assets/cloudy.png'
import drizzle from './assets/drizzle.png'
import rain from './assets/storm.png'
import snow from './assets/snow.png'

import { useState , useEffect } from 'react';
import Input_city from './components/Input_city';
import DataContiner from './components/DataContiner';

function App() {
  const [city, setCity] = useState('');
  const [t_city, sett_City] = useState('');
  const [temp, setTemp] = useState(0);
  const [country, setCountry] = useState('');
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const api_key = '6c16b5e0db93b6530d47c448734ffd46'
  const [icon, setIcon] = useState(clear);

  let detail = '';
  let url;
  let response;

  /*useEffect(function(){
    navigator.geolocation.getCurrentPosition(async (position)=>
      {
        let resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=
          ${position.coords.latitude}&lon=${position.coords.longitude}`);
        let curr_city = await resp.json();
        setCity(curr_city.address.county);
        console.log('In use effect county ' , curr_city.address.county);
        search_city(curr_city.address.county);
      });
  }, []);*/

  const weatherIconMap = {
    '01d' : clear,
    '01n' : clear,
    '02d' : cloud,
    '02n' : cloud,
    '03d' : drizzle,
    '03n' : drizzle,
    '04d' : drizzle,
    '04n' : drizzle,
    '09d' : rain,
    '09n' : rain,
    '10d' : rain,
    '10n' : rain,
    '13d' : snow,
    '13n' : snow
  }

  function handle_city(e)
  {
    setCity(e.target.value);
  }

  let search_city = async () =>
  {
    try
    {
      console.log('In search : ' , city);
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      response = await fetch(url);
      detail = await response.json();
      console.log('detail');
      console.log(detail);
      if(detail.cod == 404)
      {
        alert("City not found")
        sett_City('');
        setCountry('');
        setLat(0);
        setLong(0);
        setTemp(0);  
        setHumidity(0);
        setWind(0);
      }
      else
      {
      sett_City(detail.name);
      setCountry(detail.sys.country);
      setLat(detail.coord.lat);
      setLong(detail.coord.lon);
      setTemp(Math.floor(detail.main.temp - 273.15));  
      setHumidity(detail.main.humidity);
      setWind(detail.wind.speed); 
      setIcon(weatherIconMap[detail.weather[0].icon] || clear);
      }   
    }
    catch{

    }
    finally{

    }
    
  }

  return (
    <>
      <div className="container">
        <Input_city handle_city = {handle_city} city={city} search_city = {search_city}/>
        <WeatherDetails icon={icon} temp={temp} city={t_city} country={country} lat={lat} long={long}/>
        <DataContiner humidity={humidity} wind={wind}/>
      </div>
    </>
  );
}

export default App;
