import React, { useContext } from "react";

import "./NFECourierHeader.css";



import { nFECourierContext } from "../../Couriers";

import CloseIcon from "../../../../../assets/CloseIcon";


const NFECourierHeader = () => {

    const {setNFECourier} = useContext(nFECourierContext)

    return (
        <div className="nfe-courier-header">
        <span className='close-btn def-btn' onClick={()=>{setNFECourier({active: false, courierId: ''})}}>
          {CloseIcon()}
        </span>
        </div>
        
    )
    
}

export default NFECourierHeader