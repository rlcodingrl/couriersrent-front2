import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

//context
import { StatusContext } from "../../../../Couriers";
import { courierUpdateContext } from "../../../../Couriers"; 

import changeCourierStatus from "../../../../../../../services/changeCourierStatus";
import deleteCourier from "../../../../../../../services/deleteCourier";

//redux
// eslint-disable-next-line
import { setSpinnerFalse,setSpinnerTrue } from "../../../../../../../store/spinnerReducer";
import {useDispatch, useSelector} from "react-redux";
import { setFullInfoModeAction, setEditModeAction } from "../../../../../../../store/nFECourierReducer";
import { setModalTrue } from "../../../../../../../store/modalReducer";

const CourierItemRowMenu = ({courierId}) => {
  //redux
  const dispatch = useDispatch()
  
  const user = useSelector(state=>state.user)
  const courierStatus=useContext(StatusContext)
  const { setCourierCounter } = useContext(courierUpdateContext)

  
  //handlers
  const onReserveHandler = () => {
    
  }

  
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
                      deleteCourier(courierId,setCourierCounter)
                    }}>
                        Delete
                </div>
              :null}

      {(user.role === 'user')&&(courierStatus==='free')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{
                dispatch(setModalTrue())
                
                if (true) {
                  return
                }
                dispatch(setSpinnerTrue())
                changeCourierStatus(courierId,user.name,setCourierCounter).then(res=> {
                  if (!res) {
                }})
                }}
                
                >
                Reserve
         </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='reserved')
        ?<div className="couriers-item-row__col def-btn"
              onClick={()=>{
                dispatch(setSpinnerTrue())
                changeCourierStatus(courierId,'Free',setCourierCounter).then(res=> {
                  console.log(res);
                  if (!res) {
                
                }})
                }}>
                Unreserve
         </div>
        :null}
    </div>
  );
};

export default CourierItemRowMenu;
