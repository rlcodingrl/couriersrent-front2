import React, { useState, useContext, useEffect } from "react";

import "./FullInfoCourier.css";

import { UserContext } from "../../../app/app";
import { fullInfoContext } from "../Couriers";
import { spinnerContext } from "../../../AuthOrApp/AuthOrApp";
import FullInfoCourierHeader from "./FullInfoCourierHeader";
import FullInfoCourierBody from "./FullInfoCourierBody";

import getCourier from "../../../../services/getCourier";

const FullInfoCourier = () => {
  const setSpinner = useContext(spinnerContext)
  const {user}=useContext(UserContext)
  const {fullInfo,setFullInfo}=useContext(fullInfoContext)

  const [courierFullInfo, setCourierFullInfo]=useState({})

  
  

  useEffect(()=>{
    console.log('spinner appear')
    if (fullInfo.active===true) {
      console.log('fullInfo.active===true')
      setSpinner(true)
      getCourier(null, user, fullInfo.courierId).then(res=>{
      console.log('spinner false')
      setSpinner(false)
      setCourierFullInfo(res);
    })
    }
    
  },[fullInfo, user])

  // console.log(courierFullInfo)

  return (
    <div className={fullInfo.active===true?"full-info-courier active":"full-info-courier"}>

      <FullInfoCourierHeader setFullInfo={setFullInfo}></FullInfoCourierHeader>
      <FullInfoCourierBody courierFullInfo={courierFullInfo}></FullInfoCourierBody>

    </div>
  );
};

export default FullInfoCourier;
