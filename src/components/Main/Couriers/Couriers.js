import React, { useState } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";
import NFECourier from "./NFECourier"

export const StatusContext = React.createContext({});
export const newCourierContext = React.createContext({});
export const courierUpdateContext = React.createContext({});
export const nFECourierContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)
  const [nFECourier, setNFECourier]=useState({active: false, courierId: ''})
  const [courierCounter, setCourierCounter] = useState(0);

  return (

    <StatusContext.Provider value={courierStatus}>
    <courierUpdateContext.Provider value={ {courierCounter, setCourierCounter} }>
    <nFECourierContext.Provider value={{nFECourier, setNFECourier}}>
    
      <div className="couriers">
       
        <CouriersNav />
        <CouriersList />

      </div>

      {(nFECourier.active!==false)&&<NFECourier/>}

    </nFECourierContext.Provider>
    </courierUpdateContext.Provider>
    </StatusContext.Provider>
  );
};

export default Couriers;
