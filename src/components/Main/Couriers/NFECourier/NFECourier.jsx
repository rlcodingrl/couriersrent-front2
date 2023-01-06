/* eslint-disable react/jsx-pascal-case */
import React, { useContext, useEffect, useState } from "react";
import {useForm} from 'react-hook-form'

import "./NFECourier.css";

//contexts
import { courierUpdateContext } from "../Couriers";
import { nFECourierContext } from "../Couriers";
import { UserContext } from "../../../app/app";

// functions
import createNewUser from "../../../../services/createNewUser";
import getCourier from "../../../../services/getCourier";
import editCourier from "../../../../services/editCourier";
// components
import NFECourierHeader from "./NFECourierHeader";
import NFECourierBody from "./NFECourierBody";
//redux
import { setSpinnerFalse, setSpinnerTrue } from "../../../store/spinnerReducer";
import {useDispatch} from "react-redux";

import NFECourier_1clm from "./NFECourierBody/NFECourier_1clm";
import NFECourier_2clm from "./NFECourierBody/NFECourier_2clm";
import NFECourier_3clm from "./NFECourierBody/NFECourier_3clm";
import NFECourier_4clm from "./NFECourierBody/NFECourier_4clm";

const NFECourier = () => {
  // contexts
  // eslint-disable-next-line
  const { nFECourier, setNFECourier } = useContext(nFECourierContext);
  const {setCourierCounter} = useContext(courierUpdateContext)

  const {user}=useContext(UserContext)
  // state
  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)
  const [courierFullInfo, setCourierFullInfo]=useState({})
  //redux
  const dispatch = useDispatch()

  useEffect(()=>{

    if (nFECourier.active==='fullInfo') {
      dispatch(setSpinnerTrue())
      getCourier(null, user, nFECourier.courierId).then(res => {
        dispatch(setSpinnerFalse())
        setCourierFullInfo(res)
      })
    }

    if (nFECourier.active==='edit') {
      dispatch(setSpinnerTrue())
      getCourier(null, user, nFECourier.courierId)
      .then(res => {
        dispatch(setSpinnerFalse())
        setCourierFullInfo(res)
        reset()
      })
      .then(()=>{
        reset()
      })
  
    }
  // eslint-disable-next-line
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

  const onSubmit = (data) => {
    dispatch(setSpinnerTrue())

    if ( nFECourier.active==='new' ) {
      createNewUser(data).then(res=>{
        if (res.status===true) { 
          console.log('user created successful')
          setIfCreateSuccessful(true);
          setCourierCounter(prev=>prev+1)
          reset()
          dispatch(setSpinnerFalse())
        }
      })
    }

    // onSubmit edit
    if ( nFECourier.active==='edit' ) {
      editCourier(data, nFECourier.courierId).then(res=>{
        setIfCreateSuccessful(true);
        dispatch(setSpinnerFalse());
        setCourierCounter(prev=>prev+1);
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