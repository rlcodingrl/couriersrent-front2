import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

//context
import { StatusContext } from "../../../../Couriers";


//services
import changeCourierStatus from "../../../../../../../services/changeCourierStatus";
import deleteCourier from "../../../../../../../services/deleteCourier";

//redux
// eslint-disable-next-line
import { setSpinnerFalse,setSpinnerTrue } from "../../../../../../../store/spinnerReducer";
import {useDispatch, useSelector} from "react-redux";
import { setFullInfoModeAction, setEditModeAction } from "../../../../../../../store/nFECourierReducer";
import { setModalReserve, setModalUnreserve } from "../../../../../../../store/modalReducer";
import { setCourierCounterRedux } from "../../../../../../../store/courierCounterReducer";

const CourierItemRowMenu = ({courierId}) => {
  //redux
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  //context
  const courierStatus=useContext(StatusContext)

  return (
    <div className="couriers-item-row-menu">

      {((user.role === 'user')&&(courierStatus==='reserved'))||(user.role === 'admin')
              ?<div className="couriers-item-row__col def-btn" 
                    onClick={()=>{
                      dispatch(setFullInfoModeAction(courierId))
                    }}>
                      Full info
              </div>
              :null
            }

      {user.role === 'admin'
              ?<div className="couriers-item-row__col def-btn"
                    onClick={()=>{
                      dispatch(setEditModeAction(courierId))
                    }}
                      >Edit
              </div>:null}


      {user.role === 'admin'
              ?<div className="couriers-item-row__col def-btn" 
                    onClick={()=>{
                      dispatch(setSpinnerTrue())
                      deleteCourier(courierId,dispatch, setCourierCounterRedux)
                    }}>
                        Delete
                </div>
              :null}

      {(user.role === 'user')&&(courierStatus==='free')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{dispatch(setModalReserve(courierId))}}          
                >
                Reserve
         </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='reserved')
        ?<div className="couriers-item-row__col def-btn"
              onClick={()=>{
                dispatch(setModalUnreserve(courierId))
                }}
                >
                Unreserve
         </div>
        :null}
    </div>
  );
};

export default CourierItemRowMenu;
