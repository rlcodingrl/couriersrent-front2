/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useState } from "react";
import {useForm} from 'react-hook-form'

import "./NFECourier.css";

//contexts
import { courierUpdateContext } from "../Couriers";
import { spinnerContext } from "../../../AuthOrApp/AuthOrApp";
import { nFECourierContext } from "../Couriers";

// functions
import createNewUser from "../../../../services/createNewUser";

// components
import NFECourierHeader from "./NFECourierHeader";
import NFECourierBody from "./NFECourierBody";

import NFECourier_1clm from "./NFECourierBody/NFECourier_1clm";
import NFECourier_2clm from "./NFECourierBody/NFECourier_2clm";
import NFECourier_3clm from "./NFECourierBody/NFECourier_3clm";
import NFECourier_4clm from "./NFECourierBody/NFECourier_4clm";

const NFECourier = () => {
  // contexts
  const { nFECourier, setNFECourier } = useContext(nFECourierContext);
  const {setCourierCounter} = useContext(courierUpdateContext)
  const setSpinner = useContext(spinnerContext);
  // state
  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    console.log(data);
    setSpinner(true);
    createNewUser(data).then(res=>{
        if (res.status===true) { 
          console.log('user created successful')
          setIfCreateSuccessful(true);
          setCourierCounter(prev=>prev+1)
          reset()   
        }
    })
  };

  return (
    <div className="nfe-courier" onSubmit={handleSubmit(onSubmit)}>
      <form className="new-courier-form">
        <NFECourierHeader reset={reset}/>
        <NFECourierBody>
          <NFECourier_1clm form={{register, errors}}/>
          <NFECourier_2clm form={{register, errors}}/>
          <NFECourier_3clm form={{register, errors}}/>
          <NFECourier_4clm form={{isValid}} ifCreateSuccessful={ifCreateSuccessful}/>
        </NFECourierBody>
      </form>
    </div>
  );
};

export default NFECourier