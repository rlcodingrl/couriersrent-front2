import React from "react";



import "./NFECourier_4clm.css";

const NFECourier_4clm = ({form, ifCreateSuccessful}) => {

    const { isValid } = form;

    return (
        <div className="nfe-courier-4-clm nfe-courier-clm">
            place for chat
          <input type="submit" disabled={!isValid} />
          {console.log(`ifCreateSuccessful ${ifCreateSuccessful}`)}
          some text
          {ifCreateSuccessful && <p className="success-msg">user creating done</p>}
        </div>
        
    )
    
}

export default NFECourier_4clm