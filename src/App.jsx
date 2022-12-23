// import DetailsWeather from "./components/DetailsWeather";
import MainWeather from "./components/MainWeather";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadWeather } from "./store/weather/weather-actions";
import clear from "./weatherBackgrounds/clear.jpg";
import cloudly from "./weatherBackgrounds/cloudly.jpg";
import fewClouds from "./weatherBackgrounds/fewClouds.jpg";
import scrattedClouds from "./weatherBackgrounds/scrattedClouds.jpg";
import mist from "./weatherBackgrounds/fog.jpg";
import rain from "./weatherBackgrounds/rain.jpg";
import thunderstorm from "./weatherBackgrounds/thunderstorm.jpg";
import snow from "./weatherBackgrounds/snow.jpg";
import snowerRain from "./weatherBackgrounds/snowerrain.jpg";
function App() {
  const dispatch = useDispatch();
  const weather = useSelector((store) => store.weather);

  const memoizedWeather = useCallback(
    function getWeatherByPosition() {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        dispatch(loadWeather(pos));
      });
    },
    [dispatch]
  );

  function chooseBackgroundImage() {
    if (weather.status === "fulfilled") {
      switch (weather.weather.weather[0].icon) {
        //clear sky
        case "01d": {
          return {
            backgroundImage: `url(${clear})`,
            // backgroundImage: `url(${thunderstorm})`,
          };
        }
        case "01n": {
          return {
            backgroundImage: `url(${clear})`,
          };
        }
        //few clouds
        case "02d": {
          return {
            backgroundImage: `url(${fewClouds})`,
          };
        }
        case "02n": {
          return {
            backgroundImage: `url(${fewClouds})`,
          };
        }
        //scratted clouds
        case "03d": {
          return {
            backgroundImage: `url(${scrattedClouds})`,
          };
        }
        case "03n": {
          return {
            backgroundImage: `url(${scrattedClouds})`,
          };
        }
        //broken clouds
        case "04d": {
          return {
            backgroundImage: `url(${cloudly})`,
          };
        }
        case "04n": {
          return {
            backgroundImage: `url(${cloudly})`,
          };
        }
        //snower
        case "09d": {
          return {
            backgroundImage: `url(${snowerRain})`,
          };
        }
        case "09n": {
          return {
            backgroundImage: `url(${snowerRain})`,
          };
        }
        //rain
        case "10n": {
          return {
            backgroundImage: `url(${rain})`,
          };
        }
        case "10d": {
          return {
            backgroundImage: `url(${rain})`,
          };
        }
        //thunderstorm
        case "11n": {
          return {
            backgroundImage: `url(${thunderstorm})`,
          };
        }
        case "11d": {
          return {
            backgroundImage: `url(${thunderstorm})`,
          };
        }
        //snow
        case "13n": {
          return {
            backgroundImage: `url(${snow})`,
          };
        }
        case "13d": {
          return {
            backgroundImage: `url(${snow})`,
          };
        }
        //mist
        case "50n": {
          return {
            backgroundImage: `url(${mist})`,
          };
        }
        case "50d": {
          return {
            backgroundImage: `url(${mist})`,
          };
        }
        default: {
          return {
            backgroundImage: "none",
            backgroundColor: "red",
          };
        }
      }
    }
  }

  useEffect(() => {
    memoizedWeather();
  }, [dispatch, memoizedWeather]);

  return (
    <div className="App">
      <div className="content" style={chooseBackgroundImage()}>
        <MainWeather getWeatherByPosition={memoizedWeather} />
      </div>
    </div>
  );
}

export default App;
