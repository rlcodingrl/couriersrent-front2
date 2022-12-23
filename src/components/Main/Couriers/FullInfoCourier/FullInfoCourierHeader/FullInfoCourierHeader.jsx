import React from "react";

import "./FullInfoCourierHeader.css";
import CloseIcon from "../../../../../assets/CloseIcon";

const FullInfoCourierHeader = ({ setFullInfo }) => {
  return (
    <div className="full-info-header">
      <span
        className="close-btn def-btn"
        onClick={() => {
          setFullInfo({ active: false });
        }}
      >
       {CloseIcon()}
      </span>
      


    </div>
  );
};

export default FullInfoCourierHeader;
