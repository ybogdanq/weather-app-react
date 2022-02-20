export interface PositionResponse {
  [key: string]: any;
  components: {
    [key: string]: any;
    city: string;
  };
}

export interface PositionState {
  position: PositionResponse | null;
}

export enum PositionActions {
  GET_USER_POSITION = "GET_USER_POSITION",
}

export interface GetUserPosition {
  type: PositionActions.GET_USER_POSITION;
  payload: PositionResponse;
}

export type PositionAction = GetUserPosition;
