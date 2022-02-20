export enum WeatherActions {
  CHANGE_WEATHER = "CHANGE_WEATHER",
  CHANGE_FORECAST = "CHANGE_FORECAST",
  ADD_SEARCH_HISTORY_ITEM = "ADD_SEARCH_HISTORY_ITEM",
}

export interface WeatherState {
  weather: IObjectAny | null;
  weatherForecast: IObjectAny[] | null;
  weatherSearchHistory: IObjectAny[];
}

export interface IObjectAny {
  [key: string]: any;
}

export interface ChangeWeatherAction {
  type: WeatherActions.CHANGE_WEATHER;
  payload: object;
}
export interface ChangeForecstAction {
  type: WeatherActions.CHANGE_FORECAST;
  payload: IObjectAny[];
}
export interface AddHistoryItem {
  type: WeatherActions.ADD_SEARCH_HISTORY_ITEM;
  payload: IObjectAny;
}

export type WeatherAction =
  | ChangeWeatherAction
  | ChangeForecstAction
  | AddHistoryItem;
