import {
  AddHistoryItem,
  ChangeForecstAction,
  ChangeWeatherAction,
  IObjectAny,
  WeatherAction,
  WeatherActions,
  WeatherState,
} from "../../types/store/weatherTypes";

const initialState: WeatherState = {
  weather: null,
  weatherForecast: null,
  weatherSearchHistory: [],
};

function isAlreadyExists(state: WeatherState, city: IObjectAny) {
  const alreadyExists = state.weatherSearchHistory.some(
    (el) => el.name === city.name
  );

  return alreadyExists;
}

export const weatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case WeatherActions.CHANGE_WEATHER:
      return { ...state, weather: action.payload };
    case WeatherActions.CHANGE_FORECAST:
      return { ...state, weatherForecast: action.payload };
    case WeatherActions.ADD_SEARCH_HISTORY_ITEM:
      const alreadyExists = isAlreadyExists(state, action.payload);

      if (!alreadyExists) {
        return {
          ...state,
          weatherSearchHistory: [action.payload, ...state.weatherSearchHistory],
        };
      }
      return { ...state };

    default:
      return state;
  }
};

export const getWeatherAction = (payload: object): ChangeWeatherAction => ({
  type: WeatherActions.CHANGE_WEATHER,
  payload,
});

export const getForecastAction = (
  payload: IObjectAny[]
): ChangeForecstAction => ({
  type: WeatherActions.CHANGE_FORECAST,
  payload,
});

export const addHistoryItemAction = (payload: IObjectAny): AddHistoryItem => ({
  type: WeatherActions.ADD_SEARCH_HISTORY_ITEM,
  payload,
});
