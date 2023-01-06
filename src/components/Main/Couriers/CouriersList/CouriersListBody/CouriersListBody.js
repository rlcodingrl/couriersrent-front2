import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/getCouriers";
import couriersDataDef from "../../../../../data/couriersDataDef";
import { StatusContext } from "../../Couriers";
import { UserContext } from "../../../../app/app";
import { courierUpdateContext } from "../../Couriers";

//redux
import { setSpinnerFalse, setSpinnerTrue } from "../../../../store/spinnerReducer";
import {useDispatch} from "react-redux";

const CouriersListBody = () => {
  const dispatch = useDispatch()

  // eslint-disable-next-line
  const { courierCounter, setCourierCounter } = useContext(courierUpdateContext)


  const [couriersData, setCouriersData] = useState(couriersDataDef);

  // eslint-disable-next-line
  let { user, setUser } = useContext(UserContext);

  const courierStatus = useContext(StatusContext);

  // eslint-disable-next-line
  useEffect(() => {
    
    dispatch(setSpinnerTrue())
    // setSpinner(true)
    getCouriers(courierStatus, user).then(res=>{
      setCouriersData(res);
      dispatch(setSpinnerFalse());
      // setSpinner(false)
    });
  // eslint-disable-next-line
  }, [user, courierStatus,courierCounter]);

  return (

      <div className="couriers-list-body">
        {couriersData.map((el) => (
          <CourierItemRow courier={el} key={el._id} />
        ))}
      </div>

  );
};

export default CouriersListBody;
