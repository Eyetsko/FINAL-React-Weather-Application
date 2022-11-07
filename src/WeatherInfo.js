import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
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
            <WeatherIcon code={props.info.icon} />
            <span className="temperature float-left">
              {Math.round(props.info.temp)}
            </span>{" "}
            <span className="unit float-left">°F</span>
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
