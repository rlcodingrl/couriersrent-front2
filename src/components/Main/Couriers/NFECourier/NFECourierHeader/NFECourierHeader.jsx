import React, { useContext } from "react";

import "./NFECourierHeader.css";



import { nFECourierContext } from "../../Couriers";

import CloseIcon from "../../../../../assets/CloseIcon";

// redux
import { useDispatch } from "react-redux";
import { clearCourierFullInfoAction } from "../../../../../store/courierFullInfoReducer";

const NFECourierHeader = () => {
    const dispatch = useDispatch();

    const {setNFECourier} = useContext(nFECourierContext)

    return (
        <div className="nfe-courier-header">
        <span className='close-btn def-btn' onClick={()=>{
                                                    setNFECourier({active: false, courierId: ''})
                                                    dispatch(clearCourierFullInfoAction())
                                                    }}>
          {CloseIcon()}
        </span>
        </div>
        
    )
    
}

export default NFECourierHeader