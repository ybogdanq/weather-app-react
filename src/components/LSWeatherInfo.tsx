import React from "react";
import { IObjectAny } from "../types/store/weatherTypes";
import { IWeatherInfo } from "./WeatherInfo";

export const getWeatherInfo = (weatherState: IObjectAny, property: string) => {
  return weatherState?.weather[0][property];
};
export const getTemperature = (temp: number) => {
  return (temp - 273.15).toFixed(1) + "°C";
};

const LSWeatherInfo: React.FC<IWeatherInfo> = ({ weatherState }) => {
  return (
    <div className="city-weather__leftside">
      <img
        src={`http://openweathermap.org/img/w/${getWeatherInfo(
          weatherState,
          "icon"
        )}.png`}
        alt="city weather logo"
      />
      <h3 className="city-name">{weatherState.name}</h3>
      <ul className="city-weather__info">
        <li>{getWeatherInfo(weatherState, "main")}</li>
        <li>Temperature now: {getTemperature(weatherState.main.temp)}</li>
        <li>min.: {getTemperature(weatherState.main.temp_min)}</li>
        <li>max.: {getTemperature(weatherState.main.temp_max)}</li>
      </ul>
      <p></p>
    </div>
  );
};

export default LSWeatherInfo;
