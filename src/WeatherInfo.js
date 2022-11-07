import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.info.name}</h1>
      <ul>
        <li>
          <FormattedDate day={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix mt-3">
            <WeatherIcon code={props.info.icon} size={64} />
            <WeatherTemperature farenheit={props.info.temp} />
          </div>
        </div>
        <div className="col-6">
          <ul className="mt-3">
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {Math.round(props.info.wind)} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
