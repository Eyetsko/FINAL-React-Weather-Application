import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Sunday 2:15pm</li>
        <li>Mostly CLoudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <div className="clearfix mt-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <span className="temperature float-left">60</span>{" "}
            <span className="unit float-left">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 5 mph</li>
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
}
