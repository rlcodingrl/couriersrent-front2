import React from "react";

import { NavLink } from "react-router-dom";


//fedux
import { useSelector } from "react-redux";

import "./Nav.css";

const Nav = () => {
  const user = useSelector(state=>state.user)


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
