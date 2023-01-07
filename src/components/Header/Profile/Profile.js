import React from "react";

import { logout } from "../../../services/auth/logout";
import { NavLink } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setAuthFalse } from "../../../store/ifAuthReducer";
import { clearUserDataAction } from "../../../store/userReducer";

import "./Profile.css";

const Profile = () => {

  // redux
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user)

  // console.log(user);
  return (
    <div className="profile">
      {user.balance}$ {user.name}{" "}
      <NavLink
        onClick={() => {
          logout(dispatch, setAuthFalse, clearUserDataAction);
          // console.log("works onclick");
        }}
        to="/"
      >
        Logout
      </NavLink>
    </div>
  );
};

export default Profile;
