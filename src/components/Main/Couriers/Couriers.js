import React, { useState, useContext } from "react";

import "./Couriers.css";

import CouriersNav from "./CouriersNav";
import CouriersList from "./CouriersList/CouriersList";

import { UserContext } from "../../app/app";

// import NewCourier from "./NewCourier";

import NFECourier from "./NFECourier"

export const StatusContext = React.createContext({});
// export const fullInfoContext = React.createContext({});
export const newCourierContext = React.createContext({});

export const courierUpdateContext = React.createContext({});

export const nFECourierContext = React.createContext({});

const Couriers = ({status}) => {

  const [courierStatus]=useState(status)
  const [fullInfo,setFullInfo] = useState({active: false, userId: ''})  // this state is object about component fullInfo that describe {active,id}
  // const [newCourier,setNewCourier] = useState(false) // this state is object about component newCourier that describe if it active
  
  const [nFECourier, setNFECourier]=useState({active: false, courierId: ''})

  // eslint-disable-next-line
  const {user} = useContext(UserContext);

  const [courierCounter, setCourierCounter] = useState(0);
  

  return (
    <StatusContext.Provider value={courierStatus}>
    {/* <fullInfoContext.Provider value={{fullInfo, setFullInfo}}> */}
    {/* <newCourierContext.Provider value={{newCourier,setNewCourier}}> */}
    <courierUpdateContext.Provider value={ {courierCounter, setCourierCounter} }>

    <nFECourierContext.Provider value={{nFECourier, setNFECourier}}>
    

      <div className="couriers">

        {/* this is couriers comp {status}  */}
       
        <CouriersNav />
        <CouriersList />

      </div>
      {/* {console.log(fullInfo)} */}
      {/* {fullInfo.active===true&&<FullInfoCourier/>} */}
      {(nFECourier.active!==false)&&<NFECourier/>}
      {/* <NewCourier/> */}



    </nFECourierContext.Provider>

    </courierUpdateContext.Provider>
    {/* </newCourierContext.Provider> */}
    {/* </fullInfoContext.Provider>  */}
    </StatusContext.Provider>
  );
};

export default Couriers;
