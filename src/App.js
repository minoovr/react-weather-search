import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultcity="New York" />
        <footer>
          <a
            href="https://github.com/minoovr/react-weather-search"
            rel="noreferrer"
            target="_blank"
          >
            Open-sourced
          </a>
          , Coded by Minoo Vahedi Raad{" "}
        </footer>
      </div>
    </div>
  );
}
