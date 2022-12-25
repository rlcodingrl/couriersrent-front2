import React from "react";

import "./NFECourier_1clm.css";

const NFECourier_1clm = ({ form }) => {
  const { register, errors } = form;

  return (
    <div className="nfe-courier-1-clm nfe-courier-clm">
      <label className="new-courier-line">
        <div className="new-courier-line__description">Name</div>
        <div>
          <input
            {...register("firstName", {
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Minimum 5 letters",
              },
            })}
          />
        </div>
        <div className="new-courier-line__error">
          {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Holder Name</div>
        <div>
          <input
            {...register("holderName", {
              required: "Holder Name is required",
              minLength: {
                value: 8,
                message: "Holder Name Minimum 8 letters",
              },
            })}
          />
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
          <input
            {...register("DOB", {
              required: "DOB is required",
              // pattern:  /(\d{2}\/\d{2}\/\d{4})/
            })}
          />
        </div>
        <div className="new-courier-line__error">
          {errors?.DOB && <p>{errors?.DOB?.message || "Field is required"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Cell Phone</div>
        <div>
          <input
            {...register("cellPhone", {
              required: "Cell Phone is required",
            })}
          />
        </div>
        <div className="new-courier-line__error">
          {errors?.cellPhone && <p>{errors?.cellPhone?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Street Address</div>
        <div>
          <input
            {...register("streetAddress", {
              required: "Street Address is required",
            })}
          />
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
