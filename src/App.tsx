import React, { useEffect } from "react";
import "./App.scss";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useActions } from "./hooks/useActions";
import HomePage from "./pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import InfoModal from "./components/UI/InfoModal/InfoModal";
import { setErrorAction } from "./store/reducers/errorReducer";

function App() {
  const dispatch = useAppDispatch();
  const { getUserLocation, getWeatherState, getForecastState } = useActions();
  const loaderState = useAppSelector((state) => state.loader.loader);
  const position = useAppSelector((state) => state.position.position);
  const errors = useAppSelector((state) => state.error.error);

  const onErrorHandler = (error: GeolocationPositionError) => {
    dispatch(setErrorAction({ message: error.message, type: "danger" }));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getUserLocation, onErrorHandler);
  }, []);

  useEffect(() => {
    if (position !== null) {
      const city: string = position.components.city;
      getWeatherState(city);
      getForecastState(city);
    }
  }, [position]);

  return (
    <div className="App">
      {loaderState ? <Loader /> : null}
      <HomePage />
      <Footer />
      {errors && <InfoModal {...errors} />}
    </div>
  );
}

export default App;
