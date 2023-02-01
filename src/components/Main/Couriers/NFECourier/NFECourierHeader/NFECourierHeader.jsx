import React, { useContext } from "react";

import "./NFECourierHeader.css";



// import { nFECourierContext } from "../../Couriers";

import CloseIcon from "../../../../../assets/CloseIcon";

// redux
import { useDispatch } from "react-redux";
import { clearCourierFullInfoAction } from "../../../../../store/courierFullInfoReducer";
import { setCloseNFEAction } from "../../../../../store/nFECourierReducer";
import { clearCourierChatAction } from "../../../../../store/courierChatReducer";

const NFECourierHeader = () => {
    const dispatch = useDispatch();

    // const {setNFECourier} = useContext(nFECourierContext)

    return (
        <div className="nfe-courier-header">
        <span className='close-btn def-btn' onClick={()=>{
                                                    // setNFECourier({active: false, courierId: ''})
                                                    dispatch(clearCourierFullInfoAction())
                                                    dispatch(setCloseNFEAction())
                                                    dispatch(clearCourierChatAction())
                                                    }}>
          {CloseIcon()}
        </span>
        </div>
        
    )
    
}

export default NFECourierHeader