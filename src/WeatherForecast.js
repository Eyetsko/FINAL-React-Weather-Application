import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="WeatherForecast-day">tue</div>
          <WeatherIcon code="01d" size={24} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">70° </span>
            <span className="WeatherForecast-temp-min">50°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
