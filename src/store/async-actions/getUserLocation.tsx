import axios from "axios";
import { Dispatch } from "react";
import { getUserPosition } from "../reducers/positionReducer";
import { PositionAction } from "../../types/store/positionType";
import { changeLoaderStateAction } from "../reducers/loaderReducer";
import { LoaderAction } from "../../types/store/loaderTypes";

export function getUserLocation(position: GeolocationPosition) {
  return async (dispatch: Dispatch<PositionAction | LoaderAction>) => {
    try {
      dispatch(changeLoaderStateAction(true));
      const { latitude, longitude } = position.coords;
      const posResponse = await axios.get(
        "https://api.opencagedata.com/geocode/v1/json",
        {
          params: {
            q: `${latitude} + ${longitude}`,
            key: "15bd7b61e78642ab8a3c830189932f11",
          },
        }
      );

      dispatch(getUserPosition(posResponse.data?.results[0]));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(changeLoaderStateAction(false));
    }
  };
}
