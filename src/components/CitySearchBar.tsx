import React, { useEffect, useState } from "react";
import { useActions } from "../hooks/useActions";
import "./styles/CitySearchBar.scss";

export const CitySearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [delayedQuery, setDelayedQuery] = useState("");
  const { getWeatherState, getForecastState } = useActions();

  useEffect(() => {
    const timeOutId = setTimeout(() => setDelayedQuery(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  useEffect(() => {
    if (delayedQuery) {
      getWeatherState(delayedQuery);
      getForecastState(delayedQuery);
    }
  }, [delayedQuery]);

  return (
    <input
      type="text"
      className="city-searchbar"
      placeholder="City name / POST code"
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
