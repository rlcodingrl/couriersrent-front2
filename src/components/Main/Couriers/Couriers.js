import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";

import "./Couriers.css";


import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";
import NFECourier from "./NFECourier"

export const StatusContext = React.createContext({});

export const courierUpdateContext = React.createContext({});
// export const nFECourierContext = React.createContext({});

// redux


const Couriers = ({status}) => {

  const nFECourier = useSelector(state=>state.nFE)

  const [courierStatus]=useState(status)
  const [courierCounter, setCourierCounter] = useState(0);

  return (

    <StatusContext.Provider value={courierStatus}>
    <courierUpdateContext.Provider value={ {courierCounter, setCourierCounter} }>
    
      <div className="couriers">
       
        <CouriersNav />
        <CouriersList />

      </div>

      {(nFECourier.active)&&<NFECourier/>}

    </courierUpdateContext.Provider>
    </StatusContext.Provider>
  );
};

export default Couriers;
