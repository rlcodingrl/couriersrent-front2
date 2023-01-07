import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

//context
import { UserContext } from "../../../../../../app/app";
import { StatusContext } from "../../../../Couriers";
import { courierUpdateContext } from "../../../../Couriers"; 
import { nFECourierContext } from "../../../../Couriers";


import changeCourierStatus from "../../../../../../../services/changeCourierStatus";
import deleteCourier from "../../../../../../../services/deleteCourier";

//redux
// eslint-disable-next-line
import { setSpinnerFalse,setSpinnerTrue } from "../../../../../../../store/spinnerReducer";
// import { setSpinnerFalse, setSpinnerTrue } from "../../../../../../store/spinnerReducer";
import {useDispatch} from "react-redux";

const CourierItemRowMenu = ({courierId}) => {
  //redux
  const dispatch = useDispatch()

  const {user} = useContext(UserContext)
  const courierStatus=useContext(StatusContext)
  const { setCourierCounter } = useContext(courierUpdateContext)
  const { setNFECourier } = useContext(nFECourierContext)

  return (
    <div className="couriers-item-row-menu">

      {((user.role === 'user')&&(courierStatus==='reserved'))||(user.role === 'admin')
              ?<div className="couriers-item-row__col def-btn" 
                    onClick={()=>{setNFECourier({active: 'fullInfo', courierId: courierId});
                                  // console.log(courierId)
                                  }}>
                      Full info
              </div>
              :null
            }

      {user.role === 'admin'
        ?<div className="couriers-item-row__col def-btn"
              onClick={()=>{
                console.log(`edit click ${courierId}`)
                setNFECourier({active: 'edit', courierId: courierId})
              }}
                 >Edit
        </div>:null}


      {user.role === 'admin'
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{
                dispatch(setSpinnerTrue())
                deleteCourier(courierId,setCourierCounter)}}>
          Delete
          </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='free')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{
                dispatch(setSpinnerTrue())
                changeCourierStatus(courierId,user.name,setCourierCounter).then(res=> {
                  if (!res) {
                }})
                }}>
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
