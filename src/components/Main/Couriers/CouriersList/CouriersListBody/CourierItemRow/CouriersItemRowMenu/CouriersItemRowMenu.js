import React, { useContext } from "react";

import "./CouriersItemRowMenu.css";

import { UserContext } from "../../../../../../app/app";
import { StatusContext } from "../../../../Couriers";
import { fullInfoContext } from "../../../../Couriers";
import { courierUpdateContext } from "../../../../Couriers"; 
import { spinnerContext } from "../../../../../../AuthOrApp/AuthOrApp";
import { newCourierContext } from "../../../../Couriers";

import changeCourierStatus from "../../../../../../../services/changeCourierStatus";
import deleteCourier from "../../../../../../../services/deleteCourier";

const CourierItemRowMenu = ({courierId}) => {

  const setSpinner = useContext(spinnerContext)
  const {user} = useContext(UserContext)
  const courierStatus=useContext(StatusContext)
  const { setCourierCounter } = useContext(courierUpdateContext)
  const { setNewCourier } = useContext(newCourierContext)

  // eslint-disable-next-line
  const {fullInfo,setFullInfo}=useContext(fullInfoContext)


  return (
    <div className="couriers-item-row-menu">
      {((user.role === 'user')&&(courierStatus==='reserved'))||(user.role === 'admin')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{setFullInfo({active: true, courierId: courierId});
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
                setNewCourier(courierId)
              }}
                 >Edit
        </div>:null}


      {user.role === 'admin'
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{
                setSpinner(true);
                deleteCourier(courierId,setCourierCounter)}}>
          Delete
          </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='free')
        ?<div className="couriers-item-row__col def-btn" 
              onClick={()=>{
                setSpinner(true)
                changeCourierStatus(courierId,user.name,setCourierCounter).then(res=> {
                  if (!res) {
                  // setSpinner(false)
                }})
                }}>
                Reserve
         </div>
        :null}

      {(user.role === 'user')&&(courierStatus==='reserved')
        ?<div className="couriers-item-row__col def-btn"
              onClick={()=>{
                setSpinner(true)
                changeCourierStatus(courierId,'Free',setCourierCounter).then(res=> {
                  console.log(res);
                  if (!res) {
                  
                  // setSpinner(false)
                }})
                }}>
                Unreserve
         </div>
        :null}
    </div>
  );
};

export default CourierItemRowMenu;
