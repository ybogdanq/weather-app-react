import React from "react";
import logo from "../assets/homepage/logo.png";
import "./styles/Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};

export default Header;
