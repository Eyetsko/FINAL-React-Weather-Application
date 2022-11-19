import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}°`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    return days[day];
  }

  return (
    <span>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={24} />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-max">{maxTemperature()} </span>
        <span className="WeatherForecast-temp-min">{minTemperature()}</span>
      </div>
    </span>
  );
}
