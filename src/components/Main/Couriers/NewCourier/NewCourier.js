import React, {useContext} from "react";


import "./NewCourier.css";

import { newCourierContext } from "../Couriers";

import NewCourierBody from "./NewCourierBody";

const NewCourier = () => {

  const {newCourier,setNewCourier} = useContext(newCourierContext)

  return (
    <div className={newCourier===true?"new-courier active":"new-courier"}>

      <NewCourierBody setNewCourier={setNewCourier}></NewCourierBody>

    </div>
  );
};

export default NewCourier;
