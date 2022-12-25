import React, {useContext} from "react";

import "./NFECourier_2clm.css";

import { nFECourierContext } from "../../../Couriers";

const NFECourier_2clm = ({ form, courierFullInfo }) => {
  const { register, errors } = form;

  const { nFECourier } = useContext(nFECourierContext);

  return (
    <div className="nfe-courier-2-clm nfe-courier-clm">
      <label className="new-courier-line">
        <div className="new-courier-line__description">Bank</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("bank", {
                required: "Bank is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.bank}
        </div>
        <div className="new-courier-line__error">
          {errors?.bank && <p>{errors?.bank?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Accounting number</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("accountingNumber", {
                required: "Accounting number is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.accountingNumber}
        </div>
        <div className="new-courier-line__error">
          {errors?.accountingNumber && (
            <p>{errors?.accountingNumber?.message || "Error!"}</p>
          )}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Routing number</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("routingNumber", {
                required: "Routing number is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.routingNumber}
        </div>
        <div className="new-courier-line__error">
          {errors?.routingNumber && (
            <p>{errors?.routingNumber?.message || "Error!"}</p>
          )}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Wire routing number</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("wireRoutingNumber", {
                required: "Wire routing number is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.wireroutingNumber}
        </div>
        <div className="new-courier-line__error">
          {errors?.wireRoutingNumber && (
            <p>{errors?.wireRoutingNumber?.message || "Error!"}</p>
          )}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">SSN</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("ssn", {
                required: "SSN is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.ssn}
        </div>
        <div className="new-courier-line__error">
          {errors?.ssn && <p>{errors?.ssn?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">EIN</div>
        <div>
          {nFECourier.active === "new" && (
            <input
              {...register("ein", {
                required: "EIN is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.ein}
        </div>
        <div className="new-courier-line__error">
          {errors?.ein && <p>{errors?.ein?.message || "Error!"}</p>}
        </div>
      </label>
    </div>
  );
};

export default NFECourier_2clm