import React from "react";
import WeatherIcon from "./weatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "e567d25569c7f0bb08aedb000894e704";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/hourly?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
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
