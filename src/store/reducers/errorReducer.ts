import {
  ErrorAction,
  ErrorActions,
  ErrorState,
  IError,
  SetError,
} from "../../types/store/errorTypes";

const initialState: ErrorState = {
  error: null,
};

export const errorReducer = (
  state = initialState,
  action: ErrorAction
): ErrorState => {
  switch (action.type) {
    case ErrorActions.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return { ...state };
  }
};

export const setErrorAction = (payload: IError | null): SetError => ({
  type: ErrorActions.SET_ERROR,
  payload,
});
