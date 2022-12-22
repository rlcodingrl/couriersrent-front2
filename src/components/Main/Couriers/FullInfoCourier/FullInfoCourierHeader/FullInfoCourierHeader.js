import React from "react";

import "./FullInfoCourierHeader.css";


const FullInfoCourierHeader = ({setFullInfo}) => {

  return (
      <div className="full-info-header">
        <span className='close-btn def-btn' onClick={()=>{setFullInfo({active: false})}}>Close full info</span>
      </div>
      
  );
};

export default FullInfoCourierHeader;
