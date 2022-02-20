import React from "react";
import LSWeatherInfo from "./LSWeatherInfo";
import RSWeatherInfo from "./RSWeatherInfo";
import "./styles/WeatherInfo.scss";

export interface IWeatherInfo {
  weatherState: IWeatherState;
}

export interface IWeatherState {
  [key: string]: any;
}

const WeatherInfo: React.FC<IWeatherInfo> = ({ weatherState }) => {
  return (
    <section className="weather-info__wrapper">
      <h3 className="content-wrapper__title">City weather</h3>
      <main className="weather-info">
        <LSWeatherInfo weatherState={weatherState} />
        <RSWeatherInfo weatherState={weatherState} />
      </main>
    </section>
  );
};

export default WeatherInfo;
