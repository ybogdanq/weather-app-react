import * as UserLocation from "./getUserLocation";
import * as WeatherActions from "./weatherActions";
const actions = {
  ...UserLocation,
  ...WeatherActions,
};

export default actions;
