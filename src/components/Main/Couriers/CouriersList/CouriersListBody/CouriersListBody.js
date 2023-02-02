import React, { useEffect, useState, useContext } from "react";

import CourierItemRow from "./CourierItemRow/CourierItemRow";

import "./CouriersListBody.css";
import getCouriers from "../../../../../services/couriers/getCouriers";
import couriersDataDef from "../../../../../data/couriersDataDef";
import { StatusContext } from "../../Couriers";


//redux
import { setSpinnerFalse, setSpinnerTrue} from "../../../../../store/spinnerReducer";
import { setAuthTrue } from "../../../../../store/ifAuthReducer";
import {useDispatch, useSelector } from "react-redux";


const CouriersListBody = () => {
  const dispatch = useDispatch()

  // redux
  const courierCounterRedux = useSelector(state=>state.courierCounterReducer)

  // eslint-disable-next-line

  const [couriersData, setCouriersData] = useState(couriersDataDef);

  // eslint-disable-next-line
  const user = useSelector(state=>state.user)
  const courierStatus = useContext(StatusContext);

  // eslint-disable-next-line
  useEffect(() => {
    
    dispatch(setSpinnerTrue())
    dispatch(setAuthTrue())
    getCouriers(courierStatus, user).then(res=>{
      setCouriersData(res);
      dispatch(setSpinnerFalse());
    });
  // eslint-disable-next-line
  }, [user, courierStatus, courierCounterRedux]);

  return (

      <div className="couriers-list-body">
        { couriersData
          ?couriersData.map((el) => (
          <CourierItemRow courier={el} key={el._id} />
          ))
          :<span>no reserved couriers</span>
      }
      </div>

  );
};

export default CouriersListBody;
