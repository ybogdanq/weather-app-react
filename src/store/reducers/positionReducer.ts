import {
  GetUserPosition,
  PositionAction,
  PositionActions,
  PositionResponse,
  PositionState,
} from "../../types/store/positionType";

const initialState: PositionState = {
  position: null,
};

export const positionReducer = (
  state = initialState,
  action: PositionAction
): PositionState => {
  switch (action.type) {
    case PositionActions.GET_USER_POSITION:
      return { ...state, position: action.payload };

    default:
      return state;
  }
};

export const getUserPosition = (
  payload: PositionResponse
): GetUserPosition => ({
  type: PositionActions.GET_USER_POSITION,
  payload,
});
