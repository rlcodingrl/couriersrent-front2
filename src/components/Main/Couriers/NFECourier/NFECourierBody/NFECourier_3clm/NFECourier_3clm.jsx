import React, {useContext} from "react";

import { nFECourierContext } from "../../../Couriers";

import "./NFECourier_3clm.css";

const NFECourier_3clm = ({ form, courierFullInfo}) => {
  const { register, errors } = form;

  const { nFECourier } = useContext(nFECourierContext);

  return (
    <div className="nfe-courier-3-clm nfe-courier-clm">
      <label className="new-courier-line">
        <div className="new-courier-line__description">Pers/Bus</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <select {...register("persOrBus")} value={courierFullInfo.type||'Bus'}>
              <option value="Pers">Pers</option>
              <option value="Bus">Bus</option>
            </select>
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.type}
        </div>
        <div className="new-courier-line__error">
          {errors?.persOrBus && <p>{errors?.persOrBus?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Sum</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.amount}
              {...register("sum", {
                required: "Sum is required",
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.amount}
        </div>
        <div className="new-courier-line__error">
          {errors?.sum && <p>{errors?.sum?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Used Banks</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.used_banks}
              {...register("usedBanks", {
                required: false,
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.used_banks}
        </div>
        <div className="new-courier-line__error">
          {errors?.usedBanks && <p>{errors?.usedBanks?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Started day</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.startedDay}
              {...register("startedDay", {
                required: false,
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.startedDay}
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
          {nFECourier.active !== "fullInfo" && (
            <select {...register("status")} value={courierFullInfo.status||'Free'}>
              <option value="Free">Free</option>
            </select>
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.status}
        </div>
        <div className="new-courier-line__error">
          {errors?.status && <p>{errors?.status?.message || "Error!"}</p>}
        </div>
      </label>

      <label className="new-courier-line">
        <div className="new-courier-line__description">Comment</div>
        <div>
          {nFECourier.active !== "fullInfo" && (
            <input defaultValue={courierFullInfo.comment}
              {...register("comment", {
                required: false,
              })}
            />
          )}
          {nFECourier.active === "fullInfo" && courierFullInfo.comment}
        </div>
        <div className="new-courier-line__error">
          {errors?.comment && <p>{errors?.comment?.message || "Error!"}</p>}
        </div>
      </label>
    </div>
  );
};

export default NFECourier_3clm