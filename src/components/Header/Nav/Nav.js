import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { UserContext } from "../../app/app";

import "./Nav.css";

const Nav = () => {
  const { user } = useContext(UserContext);
  // console.log(user.role);

  return (
    <div className="nav">
      <NavLink to="/home">Home / News</NavLink>
      <NavLink to="/couriers-free">Couriers free</NavLink>
      <NavLink to="/couriers-reserved">Couriers reserved</NavLink>
      <NavLink to="/rules">Faq / Rules</NavLink>
      {user.role === "admin" ? <NavLink to="/users">Users</NavLink> : null}
    </div>
  );
};

export default Nav;
