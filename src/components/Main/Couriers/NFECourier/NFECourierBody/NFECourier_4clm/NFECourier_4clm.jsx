import React, { useContext } from "react";


import { nFECourierContext } from "../../../Couriers";

import "./NFECourier_4clm.css";

const NFECourier_4clm = ({form, ifCreateSuccessful}) => {

    const { isValid } = form;

    const {nFECourier} = useContext(nFECourierContext)

    return (
      <div className="nfe-courier-4-clm nfe-courier-clm">
        <div>Place for chat</div>

        {nFECourier.active === "new" && (
          <input type="submit" disabled={!isValid} />
        )}
        {nFECourier.active === "edit" && <input type="submit" />}

        {ifCreateSuccessful && (
          <p className="success-msg">user
          {console.log(nFECourier.active)}
          {console.log(nFECourier.active==='new')}
          {nFECourier.active==='new'&&<span> creating </span>}
          {nFECourier.active==='edit'&&<span> editing </span>}
          done</p>
        )}  
      </div>
    );
    
}

export default NFECourier_4clm