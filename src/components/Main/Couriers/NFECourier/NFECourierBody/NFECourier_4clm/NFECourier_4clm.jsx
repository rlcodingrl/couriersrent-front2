import React, { useContext } from "react";

import { useSelector } from "react-redux";

import "./NFECourier_4clm.css";

const NFECourier_4clm = ({form, ifCreateSuccessful}) => {
    const nFECourier = useSelector(state=>state.nFE)

    const { isValid } = form;

    return (
      <div className="nfe-courier-4-clm nfe-courier-clm">
        <div>Place for chat</div>

        {nFECourier.active === "new" && (
          <input className="nfe-courier__submit-btn" type="submit" disabled={!isValid} />
        )}
        {nFECourier.active === "edit" && <input className="nfe-courier__submit-btn" type="submit" />}

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