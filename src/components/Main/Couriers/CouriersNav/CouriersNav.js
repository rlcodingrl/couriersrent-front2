/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";

import "./CouriersNav.css";
import AddIcon from "../../../../assets/AddIcon";

import { useSelector } from "react-redux";

//redux
import { useDispatch } from "react-redux";
import { setNewModeAction } from "../../../../store/nFECourierReducer";

const CouriersNav = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  return (
    <div className="couriers-nav">
      {user.role==="admin"?<span className="def-btn" onClick={()=>{
          dispatch(setNewModeAction())
        }}>
          {AddIcon()}
        </span>:null}
    </div>
  );
};

export default CouriersNav;
