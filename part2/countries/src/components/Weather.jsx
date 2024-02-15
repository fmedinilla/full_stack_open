import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "b0ea6eb66d7b5d9ce1ce2d1f27ef8796";

function Weather(props) {
  const { lat, lon, city } = props;
  const [weatherIcon, setWheaterIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [wind, setWind] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then(({ data }) => {
        setWheaterIcon(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        );
        setTemp((data.main.temp - 273).toFixed(2));
        setWind(data.wind.speed.toFixed(2));
        setDescription(data.weather[0].description);
      })
      .catch((e) => alert("Something went wrong..."));
  }, []);

  return (
    <>
      <h1>Weather in {city}</h1>
      <p>
        <strong>Temperature: </strong> {temp} Celsius
      </p>

      <img src={weatherIcon} alt="" />
      <br />
      <small>{description}</small>

      <p>
        <strong>Wind: </strong> {wind} m/s
      </p>
    </>
  );
}

export default Weather;
