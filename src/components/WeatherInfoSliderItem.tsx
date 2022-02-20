import React from "react";
import { getTemperature, getWeatherInfo } from "./LSWeatherInfo";

interface IWSliderItem {
  weatherForecastItem: {
    [key: string]: any;
  };
}

const WeatherInfoSliderItem: React.FC<IWSliderItem> = ({
  weatherForecastItem,
}) => {
  const getDateHours = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hour = date.getHours();
    return hour < 10 ? `0${hour}` : hour;
  };

  const getDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    let day: string | number = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month: string | number = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    return `${day}.${month}`;
  };

  return (
    <div>
      <ul className="weather-forecast__list">
        <li>{getDateHours(weatherForecastItem.dt)}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/w/${getWeatherInfo(
              weatherForecastItem,
              "icon"
            )}.png`}
            alt=""
            className="weather-forecast__icon"
          />
        </li>
        <li>{getDate(weatherForecastItem.dt)}</li>
        <li>{getTemperature(weatherForecastItem.main.temp)}</li>
      </ul>
    </div>
  );
};

export default WeatherInfoSliderItem;
