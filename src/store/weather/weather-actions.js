export const ADD_WEATHER = "weather/ADD_WEATHER";
export const LOAD_WEATHER = "weather/LOAD_WEATHER";
export const SET_ERROR = "weather/SET_ERROR";
const addWeather = (weather) => {
  return {
    type: ADD_WEATHER,
    payload: weather,
  };
};

const loadWeatherStatus = () => {
  return {
    type: LOAD_WEATHER,
  };
};

const setError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
export const loadWeather = (pos) => (dispatch) => {
  dispatch(loadWeatherStatus());
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=26d50555c142844e565a5056d8389833&lon=${pos.coords.longitude}&lat=${pos.coords.latitude}&lang=ru&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(addWeather(data));
    });
};

export const loadWeatherByCity = (city) => (dispatch) => {
  dispatch(loadWeatherStatus());
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=26d50555c142844e565a5056d8389833&q=${city}&lang=ru&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.cod !== 200) {
        throw new Error("Ошибка!");
      }
      console.log(data);
      dispatch(addWeather(data));
    })
    .catch((er) => {
      dispatch(setError(er));
    });
};
