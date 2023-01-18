import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import "./Couriers.css";


import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";
import NFECourier from "./NFECourier"

export const StatusContext = React.createContext({});


const Couriers = ({status}) => {
  // redux
  const nFECourier = useSelector(state=>state.nFE)
  // state
  const [courierStatus]=useState(status)


  return (

    <StatusContext.Provider value={courierStatus}>
    
      <div className="couriers">
    
        <CouriersNav />
        <CouriersList />

      </div>

      {(nFECourier.active)&&<NFECourier/>}

    </StatusContext.Provider>
  );
};

export default Couriers;
