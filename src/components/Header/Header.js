import React from "react";

import Nav from "./Nav";
import Profile from "./Profile";

import "./Header.css";

// import jwtService from "../../services/jwtService";

const Header = () => {
  // const newJwtService = new jwtService();
  // console.log(newJwtService.decodeJwt());

  return (
    <div className="header">
      <Nav>This is nav section</Nav>
      <Profile>This is Profile section</Profile>
    </div>
  );
};

export default Header;
