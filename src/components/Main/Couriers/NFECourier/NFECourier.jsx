/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect, useState } from "react";
import {useForm} from 'react-hook-form'

import "./NFECourier.css";

//contexts
import { courierUpdateContext } from "../Couriers";
import { spinnerContext } from "../../../AuthOrApp/AuthOrApp";
import { nFECourierContext } from "../Couriers";
import { UserContext } from "../../../app/app";

// functions
import createNewUser from "../../../../services/createNewUser";
import getCourier from "../../../../services/getCourier";
import editCourier from "../../../../services/editCourier";
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
  const {user}=useContext(UserContext)
  // state
  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)
  const [courierFullInfo, setCourierFullInfo]=useState({})
  // const [someString] = useState('test554')


  useEffect(()=>{

    if (nFECourier.active==='fullInfo') {
      setSpinner(true);
      getCourier(null, user, nFECourier.courierId).then(res => {
        setSpinner(false);
        console.log(res)
        setCourierFullInfo(res)
      })
    }

    if (nFECourier.active==='edit') {
      setSpinner(true);
      getCourier(null, user, nFECourier.courierId)
      .then(res => {
        setSpinner(false);
        console.log(res)
        setCourierFullInfo(res)
        reset()
      })
  
    }
  },[])

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "all",
    // defaultValues: {
    //   firstName: courierFullInfo.name
    // }
  });  

  // console.log(courierFullInfo)

  const onSubmit = (data) => {
    console.log(data);
    setSpinner(true);

    if ( nFECourier.active==='new' ) {
      createNewUser(data).then(res=>{
        if (res.status===true) { 
          console.log('user created successful')
          setIfCreateSuccessful(true);
          setCourierCounter(prev=>prev+1)
          reset()   
        }
    })
    }
    // onSubmit edit
    if ( nFECourier.active==='edit' ) {
      // console.log(`we need edit ${data}`);
      // console.log(data)
      // console.log('this is state')
      editCourier(data, nFECourier.courierId).then(res=>{
        // console.log(res)
        setIfCreateSuccessful(true);
        setCourierCounter(prev=>prev+1);
        // reset();
      })
      
      
    }
    
  };

  return (
    <div className="nfe-courier" 
          onSubmit={handleSubmit(onSubmit)}
          onChange={()=>{setIfCreateSuccessful(false)}}>
      <form className="new-courier-form">

     
        <NFECourierHeader reset={reset}/>
        <NFECourierBody>
          <NFECourier_1clm form={{register, errors}} courierFullInfo={courierFullInfo}/>
          <NFECourier_2clm form={{register, errors}} courierFullInfo={courierFullInfo}/>
          <NFECourier_3clm form={{register, errors}} courierFullInfo={courierFullInfo}/>
          <NFECourier_4clm form={{isValid}} ifCreateSuccessful={ifCreateSuccessful}/>
        </NFECourierBody>
      </form>
    </div>
  );
};

export default NFECourier