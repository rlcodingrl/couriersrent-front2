import React from "react";

import "./NFECourier_3clm.css";

const NFECourier_3clm = ({form}) => {

    const { register, errors } = form;

    return (
      <div className="nfe-courier-3-clm nfe-courier-clm">
        <label className="new-courier-line">
          <div className="new-courier-line__description">Pers/Bus</div>
          <div>
            <select {...register("persOrBus")} value="Bus">
              <option value="Pers">Pers</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
          <div className="new-courier-line__error">
            {errors?.persOrBus && (
              <p>{errors?.persOrBus?.message || "Error!"}</p>
            )}
          </div>
        </label>

        <label className="new-courier-line">
          <div className="new-courier-line__description">Sum</div>
          <div>
            <input
              {...register("sum", {
                required: "Sum is required",
              })}
            />
          </div>
          <div className="new-courier-line__error">
            {errors?.sum && <p>{errors?.sum?.message || "Error!"}</p>}
          </div>
        </label>

        <label className="new-courier-line">
          <div className="new-courier-line__description">Used Banks</div>
          <div>
            <input
              {...register("usedBanks", {
                required: false,
              })}
            />
          </div>
          <div className="new-courier-line__error">
            {errors?.usedBanks && (
              <p>{errors?.usedBanks?.message || "Error!"}</p>
            )}
          </div>
        </label>

        <label className="new-courier-line">
          <div className="new-courier-line__description">Started day</div>
          <div>
            <input
              {...register("startedDay", {
                required: false,
              })}
            />
          </div>
          <div className="new-courier-line__error">
            {errors?.startedDay && (
              <p>{errors?.startedDay?.message || "Error!"}</p>
            )}
          </div>
        </label>

        <label className="new-courier-line">
          <div className="new-courier-line__description">Status</div>
          <div>
            <select {...register("status")} value="Free">
              <option value="Free">Free</option>
            </select>
          </div>
          <div className="new-courier-line__error">
            {errors?.status && <p>{errors?.status?.message || "Error!"}</p>}
          </div>
        </label>

        <label className="new-courier-line">
          <div className="new-courier-line__description">Comment</div>
          <div>
            <input
              {...register("comment", {
                required: false,
              })}
            />
          </div>
          <div className="new-courier-line__error">
            {errors?.comment && <p>{errors?.comment?.message || "Error!"}</p>}
          </div>
        </label>
      </div>
    );
    
}

export default NFECourier_3clm