/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "./CouriersNav.css";

import { UserContext } from "../../../app/app";
import { newCourierContext } from "../Couriers";
import AddIcon from "../../../../assets/AddIcon";

const CouriersNav = () => {

  const {user} = useContext(UserContext)
  // console.log(user.role)
  const {setNewCourier} = useContext(newCourierContext)

  return (
    <div className="couriers-nav">
      {user.role==="admin"?<span className="def-btn" onClick={()=>{setNewCourier(true)}}>{AddIcon()}</span>:null}
    </div>
  );
};

export default CouriersNav;
