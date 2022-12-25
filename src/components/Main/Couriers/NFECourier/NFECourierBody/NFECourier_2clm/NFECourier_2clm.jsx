import React from "react";

import "./NFECourier_2clm.css";

const NFECourier_2clm = ({form}) => {
    const { register, errors } = form;

    return (
        <div className="nfe-courier-2-clm nfe-courier-clm">
                      <label className="new-courier-line">
            <div className="new-courier-line__description">Bank</div>
            <div>
              <input
                {...register("bank", {
                  required: "Bank is required",
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.bank && <p>{errors?.bank?.message || "Error!"}</p>}
            </div>
          </label>

          <label className="new-courier-line">
            <div className="new-courier-line__description">
              Accounting number
            </div>
            <div>
              <input
                {...register("accountingNumber", {
                  required: "Accounting number is required",
                })}
              />
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
              <input
                {...register("routingNumber", {
                  required: "Routing number is required",
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.routingNumber && (
                <p>{errors?.routingNumber?.message || "Error!"}</p>
              )}
            </div>
          </label>

          <label className="new-courier-line">
            <div className="new-courier-line__description">
              Wire routing number
            </div>
            <div>
              <input
                {...register("wireRoutingNumber", {
                  required: "Wire routing number is required",
                })}
              />
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
              <input
                {...register("ssn", {
                  required: "SSN is required",
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.ssn && <p>{errors?.ssn?.message || "Error!"}</p>}
            </div>
          </label>

          <label className="new-courier-line">
            <div className="new-courier-line__description">EIN</div>
            <div>
              <input
                {...register("ein", {
                  required: "EIN is required",
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.ein && <p>{errors?.ein?.message || "Error!"}</p>}
            </div>
          </label>
        </div>
        
    )
    
}

export default NFECourier_2clm