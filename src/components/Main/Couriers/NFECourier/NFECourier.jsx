import React from "react";
import {useForm} from 'react-hook-form'

import "./NFECourier.css";

import NFECourierHeader from "./NFECourierHeader";
import NFECourierBody from "./NFECourierBody";

const NFECourier = () => {

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

    return (
        <div className="nfe-courier">
            <NFECourierHeader />
            <NFECourierBody />

        </div>
        
    )
    
}

export default NFECourier