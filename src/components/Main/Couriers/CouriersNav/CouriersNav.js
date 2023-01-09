/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "./CouriersNav.css";
import AddIcon from "../../../../assets/AddIcon";

import { useSelector } from "react-redux";

// import { nFECourierContext } from "../Couriers";

//redux
import {useDispatch} from "react-redux";
import { setNewModeAction } from "../../../../store/nFECourierReducer";

const CouriersNav = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  // const {setNFECourier} = useContext(nFECourierContext)

  return (
    <div className="couriers-nav">
      {user.role==="admin"?<span className="def-btn" onClick={()=>{
          // setNFECourier({active: 'new', courierId: ''})
          dispatch(setNewModeAction())
        }}>
          {AddIcon()}
        </span>:null}
    </div>
  );
};

export default CouriersNav;
