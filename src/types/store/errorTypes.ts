export interface ErrorState {
  error: null | IError;
}

export enum ErrorActions {
  SET_ERROR = "SET_ERROR",
}

export interface IError {
  type?: "danger" | "warning";
  message: string;
}

export interface SetError {
  type: ErrorActions.SET_ERROR;
  payload: IError | null;
}

export type ErrorAction = SetError;
