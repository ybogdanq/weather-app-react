export interface LoaderStore {
  loader: boolean;
}

export enum LoaderActions {
  CHANGE_LOADER_STATE = "CHANGE_LOADER_STATE",
}

interface ChangeLoaderAction {
  type: LoaderActions.CHANGE_LOADER_STATE;
  payload: boolean;
}

export type LoaderAction = ChangeLoaderAction;
