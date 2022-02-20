import React from "react";
import { IObjectAny } from "../types/store/weatherTypes";
import { getTemperature } from "./LSWeatherInfo";

interface ISearchHistoryItem {
  searchHistoryItem: IObjectAny;
  onClickSearch: (city: string) => void;
}

const SearchHistoryItem: React.FC<ISearchHistoryItem> = ({
  searchHistoryItem,
  onClickSearch,
}) => {
  const getCityName = (cityName: string) => {
    return cityName.slice(0, 3).toUpperCase();
  };

  return (
    <div
      className="search-history__item"
      onClick={() => onClickSearch(searchHistoryItem.name)}
    >
      <h3 className="city-name">{getCityName(searchHistoryItem.name)}</h3>
      <ul className="search-history__item_list">
        <li>{searchHistoryItem.weather[0].main}</li>
        <li>MAX.: {getTemperature(searchHistoryItem.main.temp_max)}</li>
        <li>MIN.: {getTemperature(searchHistoryItem.main.temp_min)}</li>
      </ul>
    </div>
  );
};

export default SearchHistoryItem;
