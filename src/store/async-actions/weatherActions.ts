import axios from "axios";
import { Dispatch } from "react";
import { ErrorAction } from "../../types/store/errorTypes";
import { LoaderAction } from "../../types/store/loaderTypes";
import { WeatherAction } from "../../types/store/weatherTypes";
import { setErrorAction } from "../reducers/errorReducer";
import { changeLoaderStateAction } from "../reducers/loaderReducer";
import {
  addHistoryItemAction,
  getForecastAction,
  getWeatherAction,
} from "../reducers/weatherReducer";

export function getWeatherState(city: string) {
  return async (
    dispatch: Dispatch<WeatherAction | LoaderAction | ErrorAction>
  ) => {
    try {
      dispatch(changeLoaderStateAction(true));
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: "27f9481eced59a56588f6f934b75f0f9",
          },
        }
      );

      dispatch(getWeatherAction(response.data));
      dispatch(addHistoryItemAction(response.data));
    } catch (error) {
      dispatch(setErrorAction({ type: "danger", message: "city not found" }));
    } finally {
      dispatch(changeLoaderStateAction(false));
    }
  };
}

export function getForecastState(city: string) {
  return async (
    dispatch: Dispatch<WeatherAction | LoaderAction | ErrorAction>
  ) => {
    try {
      dispatch(changeLoaderStateAction(true));
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: city,
            appid: "27f9481eced59a56588f6f934b75f0f9",
          },
        }
      );
      dispatch(getForecastAction(response.data?.list));
    } catch (error) {
      dispatch(
        setErrorAction({ message: "City forecst not found", type: "warning" })
      );
    } finally {
      dispatch(changeLoaderStateAction(false));
    }
  };
}
