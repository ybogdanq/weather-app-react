import React from "react";
import { IWeatherInfo } from "./WeatherInfo";
import Slider from "react-slick";
import WeatherInfoSliderItem from "./WeatherInfoSliderItem";
import { useAppSelector } from "../hooks/hooks";

const RSWeatherInfo: React.FC<IWeatherInfo> = ({ weatherState }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    variableWidth: true,
  };
  const weatherForecastArray = useAppSelector(
    (state) => state.weather.weatherForecast
  );

  const getTimeByTimestamp = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const dayHalf = hours <= 12 ? "AM" : "PM";
    return `${hours}:${minutes}${dayHalf}`;
  };

  const getKilometers = (meters: number) => {
    return (meters / 1000).toFixed(1) + "km";
  };

  return (
    <div className="weather-info__rightside">
      <ul className="city-weather__info-list">
        <li>Sunrise: {getTimeByTimestamp(weatherState.sys.sunrise)}</li>
        <li>Sunset: {getTimeByTimestamp(weatherState.sys.sunset)}</li>
        <li>Visibility: {getKilometers(weatherState.visibility)} </li>
        <li>Pressure: {weatherState.main.pressure}pHa</li>
        <li>Humidity: {weatherState.main.humidity}%</li>
        <li>Clouds: {weatherState.clouds.all}%</li>
      </ul>
      <Slider {...settings}>
        {weatherForecastArray !== null ? (
          weatherForecastArray.map((weatherForecastItem, id) => (
            <WeatherInfoSliderItem
              weatherForecastItem={weatherForecastItem}
              key={id}
            />
          ))
        ) : (
          <div>Something went wrong</div>
        )}
      </Slider>
    </div>
  );
};

export default RSWeatherInfo;
