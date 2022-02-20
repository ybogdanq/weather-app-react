import React from "react";
import logo from "../assets/homepage/openWeather-logo.jpg";
import "./styles/Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="https://openweathermap.org/" className="openWeather-link">
        <span>Powered by </span>
        <img src={logo} alt="openWeather logo" />
      </a>
    </footer>
  );
};

export default Footer;
