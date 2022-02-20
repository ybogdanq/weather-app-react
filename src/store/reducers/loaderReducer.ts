import {
  LoaderAction,
  LoaderActions,
  LoaderStore,
} from "../../types/store/loaderTypes";

const initialStore: LoaderStore = {
  loader: true,
};

export const loaderReducer = (
  state = initialStore,
  action: LoaderAction
): LoaderStore => {
  switch (action.type) {
    case LoaderActions.CHANGE_LOADER_STATE:
      return { ...state, loader: action.payload };
    default:
      return state;
  }
};

export const changeLoaderStateAction = (payload: boolean) => ({
  type: LoaderActions.CHANGE_LOADER_STATE,
  payload,
});
