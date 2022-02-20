import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useActions } from "../hooks/useActions";
import { IObjectAny } from "../types/store/weatherTypes";
import SearchHistoryItem from "./SearchHistoryItem";
import "./styles/SearchHistory.scss";

interface ISearchHistory {
  searchHistory: IObjectAny[];
}

const SearchHistory: React.FC<ISearchHistory> = ({
  searchHistory,
}): JSX.Element => {
  const { getForecastState, getWeatherState } = useActions();
  const [sliderKey, setSliderKey] = useState(0);

  const settings = {
    arrows: true,
    dots: false,
    variableWidth: true,
    slidesToScroll: 2,
    infinite: false,
    focusOnSelect: true,
  };

  const onClickSearch = (city: string): void => {
    getWeatherState(city);
    getForecastState(city);
  };

  useEffect(() => {
    console.log(1);

    const newSliderKey = Date.now() + Math.random() * 200;
    setSliderKey(newSliderKey);
  }, [searchHistory]);

  return (
    <section className="weather-info__wrapper">
      <h3 className="content-wrapper__title">Search history</h3>
      <main className="weather-info">
        <Slider {...settings} key={sliderKey}>
          {searchHistory.length > 0 &&
            searchHistory.map((historyItem, id) => (
              <SearchHistoryItem
                searchHistoryItem={historyItem}
                onClickSearch={onClickSearch}
                key={historyItem.id + Math.random()}
              />
            ))}
        </Slider>
      </main>
    </section>
  );
};

export default React.memo(SearchHistory);
