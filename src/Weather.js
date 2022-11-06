import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let city = "New York";

  const [weather, setWeather] = useState({ loaded: false });

  function showWeather(response) {
    setWeather({
      loaded: true,
      date: "Sunday",
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      name: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.loaded) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weather.name}</h1>
        <ul>
          <li>{weather.date}</li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix mt-3">
              <img
                src={weather.icon}
                alt="mostly cloudy"
                className={weather.description}
              />
              <span className="temperature float-left">
                {Math.round(weather.temp)}
              </span>{" "}
              <span className="unit float-left">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul className="mt-3">
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)} mph</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-2">
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
          <div className="col-2">
            {" "}
            <ul>
              <li>Mon</li>
              <li>62 °F</li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="mostly cloudy"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "210f0105830dab42da6932b5c4b52fc7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(showWeather);

    return <h1>Loading...</h1>;
  }
}
