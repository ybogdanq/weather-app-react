import React from "react";
import { CitySearchBar } from "../components/CitySearchBar";
import Header from "../components/Header";
import SearchHistory from "../components/SearchHistory";
import WeatherInfo from "../components/WeatherInfo";
import { useAppSelector } from "../hooks/hooks";

const HomePage: React.FC = () => {
  const { weather, weatherSearchHistory } = useAppSelector(
    (state) => state.weather
  );

  return (
    <div>
      <Header />
      <div className="container">
        <CitySearchBar />
        {weather !== null ? (
          <>
            <WeatherInfo weatherState={weather} />
            <SearchHistory searchHistory={weatherSearchHistory} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HomePage;
