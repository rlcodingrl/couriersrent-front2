/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "./CouriersNav.css";

import { UserContext } from "../../../app/app";
// import { newCourierContext } from "../Couriers";
import AddIcon from "../../../../assets/AddIcon";
import { nFECourierContext } from "../Couriers";

const CouriersNav = () => {

  const {user} = useContext(UserContext)
  // console.log(user.role)
  // const {setNewCourier} = useContext(newCourierContext)

  const {setNFECourier} = useContext(nFECourierContext)

  return (
    <div className="couriers-nav">
      {/* {user.role==="admin"?<span className="def-btn" onClick={()=>{setNewCourier(true)}}>{AddIcon()}</span>:null} */}
      {user.role==="admin"?<span className="def-btn" onClick={()=>{setNFECourier({active: 'new', courierId: ''})}}>{AddIcon()}</span>:null}
    </div>
  );
};

export default CouriersNav;
