import React from "react";
import WeatherIcon from "./weatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="forecast-temperature">
            <span className="forecast-temperature-max">19</span>
            <span className="forecast-temperature-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
