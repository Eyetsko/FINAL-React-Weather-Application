import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("farenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  if (unit === "farenheit") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature float-left">
          {Math.round(props.farenheit)}
        </span>{" "}
        <span className="unit float-left">
          <a href="/" onClick={props.farenheit}>
            °F
          </a>{" "}
          |
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
        </span>{" "}
      </span>
    );
  } else {
    let celsius = ((props.farenheit - 32) * 5) / 9;
    return (
      <span className="WeatherTemperature">
        <span className="temperature float-left">{Math.round(celsius)}</span>{" "}
        <span className="unit float-left">
          <a href="/" onClick={props.farenheit}>
            °F
          </a>{" "}
          |
          <a href="/" onClick={showCelsius}>
            {" "}
            °C
          </a>{" "}
        </span>{" "}
      </span>
    );
  }
}
