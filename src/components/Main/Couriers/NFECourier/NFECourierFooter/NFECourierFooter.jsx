import React from "react";

import { useSelector } from "react-redux";

import "./NFECourierFooter.css";

const NFECourierFooter = ({form, ifCreateSuccessful}) => {

    const nFECourier = useSelector(state=>state.nFE)

    const { isValid } = form;

    return (
      <div className="nfe-courier-footer">
        <div className="nfe-courier-footer__wrapper">
          {nFECourier.active === "new" && (
            <input
              className="nfe-courier__submit-btn"
              type="submit"
              disabled={!isValid}
            />
          )}
          {nFECourier.active === "edit" && (
            <input className="nfe-courier__submit-btn" type="submit" />
          )}

          {ifCreateSuccessful && (
            <p className="success-msg">
              user
              {console.log(nFECourier.active)}
              {console.log(nFECourier.active === "new")}
              {nFECourier.active === "new" && <span> creating </span>}
              {nFECourier.active === "edit" && <span> editing </span>}
              done
            </p>
          )}
        </div>
      </div>
    );
    
}

export default NFECourierFooter