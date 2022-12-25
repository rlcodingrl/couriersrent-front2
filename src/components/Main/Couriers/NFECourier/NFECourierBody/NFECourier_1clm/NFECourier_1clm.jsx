import React, { useContext } from "react";

import "./NFECourier_1clm.css";

import { nFECourierContext } from "../../../Couriers";

const NFECourier_1clm = ({ form, courierFullInfo }) => {
  const { register, errors } = form;

  const {nFECourier} = useContext(nFECourierContext)

  return (
    <div className="nfe-courier-1-clm nfe-courier-clm">
      <label className="new-courier-line">
        <div className="new-courier-line__description">Name</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input 
            // defaultValue={courierFullInfo.name}
                        defaultValue={courierFullInfo.name}
              {...register("firstName", {
                required: "Name is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 letters",
                },
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.name}
        </div>
        <div className="new-courier-line__error">
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Holder Name</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.holderName}
              {...register("holderName", {
                required: "Holder Name is required",
                minLength: {
                  value: 8,
                  message: "Holder Name Minimum 8 letters",
                },
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.holderName}
        </div>
        <div className="new-courier-line__error">
          {errors?.holderName && (
            <p>{errors?.holderName?.message || "Error!"}</p>
          )}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">DOB (mm/dd/yyyy)</div>
        <div>
        {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.dob}
            {...register("DOB", {
              required: "DOB is required",
              // pattern:  /(\d{2}\/\d{2}\/\d{4})/
            })}
          />
          )}
        {nFECourier.active === "fullInfo" && courierFullInfo.dob}
          
        </div>
        <div className="new-courier-line__error">
          {errors?.DOB && <p>{errors?.DOB?.message || "Field is required"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Cell Phone</div>
        <div>
        {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.cellPhone}
            {...register("cellPhone", {
              required: "Cell Phone is required",
            })}
          />
          )}
        {nFECourier.active === "fullInfo" && courierFullInfo.cellPhone}
          
        </div>
        <div className="new-courier-line__error">
          {errors?.cellPhone && <p>{errors?.cellPhone?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Street Address</div>
        <div>
        {nFECourier.active !== "fullInfo" && (
                      <input defaultValue={courierFullInfo.address}
                      {...register("streetAddress", {
                        required: "Street Address is required",
                      })}
                    />
          )}
        {nFECourier.active === "fullInfo" && courierFullInfo.address}
        </div>
        <div className="new-courier-line__error">
          {errors?.streetAddress && (
            <p>{errors?.streetAddress?.message || "Error!"}</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default NFECourier_1clm;
