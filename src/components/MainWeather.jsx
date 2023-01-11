import React from "react";
import YellowButton from "./YellowButton";
import icon1 from "../icons/Vector.svg";
import preloader from "../icons/preloader.png";
import { useSelector, useDispatch } from "react-redux";
import { loadWeatherByCity } from "../store/weather/weather-actions";
import DetailsWeather from "./DetailsWeather";
function MainWeather(props) {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  return (
    <div className="main-weather">
      <div className="main-weather__city-name">
        {weather.status === "loading" ? (
          <img
            className="main-weather__preloader"
            src={preloader}
            alt="preloader"
          />
        ) : null}

        {weather.status === "error" ? (
          <h1 className="error">{weather.error.message}</h1>
        ) : null}
        {weather.status === "fulfilled" && (
          <div className="main-weather__fulfilled">
            <img src={icon1} alt="icon" />
            <h1>{weather.weather.name},</h1>
            <h3 className="main-weather__fulfilled_weather">
              {weather.weather.weather[0].description} <br />
            </h3>
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather.weather[0].icon}.png`}
              alt="icon"
            />
          </div>
        )}

        <form
          className="main-weather__form"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target.cityInput.value);
            if (!e.target.cityInput.value) {
              props.getWeatherByPosition();
            } else {
              dispatch(loadWeatherByCity(e.target.cityInput.value.trim()));
              e.target.reset();
            }
          }}
        >
          <input
            type="text"
            placeholder="Введите место"
            className="main-weather__input"
            name="cityInput"
            autoComplete="off"
          />

          <YellowButton text="Искать" />
        </form>
        <div className="main-weather__actual-temperature">
          {weather.status === "fulfilled" && (
            <h2
              className="main-weather__temperature"
              style={{
                transform:
                  weather.weather && weather.weather.main.temp < 0
                    ? "translateX(-2rem)"
                    : "translateX(0)",
              }}
            >
              {weather.status === "fulfilled" &&
                weather.weather.main.temp.toFixed(0)}
              <sup>°C</sup>
            </h2>
          )}
        </div>
      </div>
      {weather.status === "fulfilled" && <DetailsWeather />}
    </div>
  );
}

export default MainWeather;
