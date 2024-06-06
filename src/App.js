import React, { useState } from "react";
import './App.css';

const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'GB' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'India', code: 'IN' },
  { name: 'China', code: 'CN' },
  { name: 'Japan', code: 'JP' },
  // Add more countries as needed
];

const App = () => {
  const [zipcode, setZipcode] = useState('');
  const [countrycode, setCountyrcode] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChangZipcode = (e) => {
    setZipcode(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountyrcode(e.target.value);
  };

  const handleSearch = async () => {
    //Fetch Weather Data Here
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode},${countrycode}&appid=${apiKey}`;

    if (!zipcode || !countrycode) {
      setError('Please enter both a Zipcode and a Country.');
      return;
    }

    setError('');

    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase())
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1 className="header_h1">Weather App</h1>
          <h3 className="header_h3">Created by Josh Vaughan</h3>
          <p className="api_promo">Featuring the <a href="https://openweathermap.org/api">openweathermap.org</a> API, this app takes in a Zipcode and a country to provide you with up to date weather data!</p>
          <div className="input_container">
            <input type="text" value={zipcode} onChange={handleChangZipcode} placeholder="Enter Zipcode" />
            <select value={countrycode} onChange={handleChangeCountry}>
              <option value="">Select Country</option>
              {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
              ))}
            </select>
          </div>
          <button onClick={handleSearch}>Search</button>
          { error && <p style={{ color: 'red' }}>Error: {error}</p> }
          { weather && weather.weather && (
            <div className="data">
              <div className="weatherItems">
                <h2>Location:</h2>
                <p>{weather.name}</p>
              </div>
              <div className="weatherItems">
                <h2>Description:</h2>
                <p>{capitalizeWords(weather.weather[0].description)}</p>
              </div>
              <div className="weatherItems">
                <h2>Temp (°F):</h2>
                <p>{Math.trunc((weather.main.temp - 273.15) * 9/5 + 32)}°F</p>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
}

export default App;
