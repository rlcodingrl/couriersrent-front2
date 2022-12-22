import React, { useContext, useState } from "react";
import {useForm} from 'react-hook-form'

import createNewUser from "../../../../../services/createNewUser";

import { courierUpdateContext } from "../../Couriers";

import "./NewCourierBody.css";

const NewCourierBody = ({setNewCourier}) => {

  const {setCourierCounter} = useContext(courierUpdateContext)

  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)

  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } =useForm({
    mode:"all"
  });

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    console.log(data)
    createNewUser(data).then(res=>{
      if (res.status===true) {
        setIfCreateSuccessful(true)
        setCourierCounter(prev=>prev+1)
        reset()
      }
      
    })
    
  }

  return (
    <form className="new-courier-form" onSubmit={handleSubmit(onSubmit)} onChange={()=>{setIfCreateSuccessful(false)}}>
      <div className="new-courier-header">
        <span className='close-btn def-btn' onClick={()=>{reset();setNewCourier(false)}}>Close new courier</span>
      </div>
      <div className="new-courier-body">
        <div className="new-courier-1clm new-courier-clm">
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
              {errors?.firstName && (
                <p>{errors?.firstName?.message || "Error!"}</p>
              )}
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
            <div className="new-courier-line__description">
              DOB (mm/dd/yyyy)
            </div>
            <div>
              <input
                {...register("DOB", {
                  required: "DOB is required",
                  // pattern:  /(\d{2}\/\d{2}\/\d{4})/
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.DOB && (
                <p>{errors?.DOB?.message || "Field is required"}</p>
              )}
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
              {errors?.cellPhone && (
                <p>{errors?.cellPhone?.message || "Error!"}</p>
              )}
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

        <div className="new-courier-2clm new-courier-clm">
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

        <div className="new-courier-3clm new-courier-clm">

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
                  required: false
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.usedBanks && <p>{errors?.usedBanks?.message || "Error!"}</p>}
            </div>
          </label>

          <label className="new-courier-line">
            <div className="new-courier-line__description">Started day</div>
            <div>
              <input
                {...register("startedDay", {
                  required: false
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.startedDay && <p>{errors?.startedDay?.message || "Error!"}</p>}
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
              {errors?.status && (
                <p>{errors?.status?.message || "Error!"}</p>
              )}
            </div>
          </label>

          <label className="new-courier-line">
            <div className="new-courier-line__description">Comment</div>
            <div>
              <input
                {...register("comment", {
                  required: false
                })}
              />
            </div>
            <div className="new-courier-line__error">
              {errors?.comment && <p>{errors?.comment?.message || "Error!"}</p>}
            </div>
          </label>
        </div>
        <div className="full-info-4clm full-info-clm">
          place for chat
          <input type="submit" disabled={!isValid} />
          {/* <input type="button" onClick={()=>{console.log('reset'); document.querySelector(".new-courier-form").reset()}} value="reset"/> */}
          {ifCreateSuccessful && <p className="success-msg">user creating done</p>}
        </div>
      </div>
    </form>
  );
};

export default NewCourierBody;
