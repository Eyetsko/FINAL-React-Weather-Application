import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: response.data.weather[0].icon,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }

  function search() {
    const apiKey = "210f0105830dab42da6932b5c4b52fc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-dark w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo info={weather} />
        <WeatherForecast lat={weather.latitude} lon={weather.longitude} />
      </div>
    );
  } else {
    search();
    return <h1>Loading...</h1>;
  }
}
