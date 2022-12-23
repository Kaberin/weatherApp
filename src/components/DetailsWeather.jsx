import React from "react";
import { useSelector } from "react-redux";
function DetailsWeather() {
  const weather = useSelector((state) => state.weather);
  // async function getIcon(id) {
  //   const res = await fetch(`http://openweathermap.org/img/wn/${id}.png`);
  //   // const data = res.json();
  // }
  return (
    <div className="details-weather">
      <div className="details-weather__container">
        {console.log(weather.weather.wind.speed)}
        <h2>
          Ощущается как{" "}
          <span>
            {" "}
            {weather.weather.main.feels_like.toFixed(0)}
            <sup>°C</sup>
          </span>
        </h2>
        <h2>Скорость ветра: {weather.weather.wind.speed} м/с</h2>

        <h2>
          Давление: {(weather.weather.main.pressure * 0.75).toFixed(0)}мм рт.ст
        </h2>
        <h2>Влажность: {weather.weather.main.humidity}%</h2>
      </div>
    </div>
  );
}

export default DetailsWeather;
