/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import {useForm} from 'react-hook-form'

import "./NFECourier.css";

// functions
import createNewUser from "../../../../services/createNewUser";
import getCourier from "../../../../services/getCourier";
import editCourier from "../../../../services/editCourier";
//redux
import {useDispatch, useSelector} from "react-redux";
import { setSpinnerFalse,setSpinnerTrue } from "../../../../store/spinnerReducer";
import { setCourierFullInfoAction } from "../../../../store/courierFullInfoReducer";
import { setCourierCounterRedux } from "../../../../store/courierCounterReducer";

// components
import NFECourierHeader from "./NFECourierHeader";
import NFECourierBody from "./NFECourierBody";
import NFECourierFooter from "./NFECourierFooter";

import NFECourier_1clm from "./NFECourierBody/NFECourier_1clm";
import NFECourier_2clm from "./NFECourierBody/NFECourier_2clm";
import NFECourier_3clm from "./NFECourierBody/NFECourier_3clm";
import NFECourier_4clm from "./NFECourierBody/NFECourier_4clm";

const NFECourier = () => {
  // contexts
  // eslint-disable-next-line


  // state
  const [ifCreateSuccessful, setIfCreateSuccessful] = useState(false)

  //redux
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  const courierFullInfo = useSelector(state=>state.courier)
  const nFECourier = useSelector(state=>state.nFE)


  useEffect(()=>{

    if (nFECourier.active==='fullInfo') {
      dispatch(setSpinnerTrue())
      getCourier(null, user, nFECourier.courierId).then(res => {
        dispatch(setSpinnerFalse())
        dispatch(setCourierFullInfoAction(res))
      })
    }

    if (nFECourier.active==='edit') {
      dispatch(setSpinnerTrue())
      getCourier(null, user, nFECourier.courierId)
      .then(res => {
        dispatch(setSpinnerFalse())
        dispatch(setCourierFullInfoAction(res))

        reset()
      })
      .then(()=>{
        reset()
      })
  
    }
    // console.log(nFECourier)
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
          dispatch(setCourierCounterRedux())
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
        dispatch(setCourierCounterRedux())
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
          <NFECourier_4clm />
        </NFECourierBody>
        <NFECourierFooter form={{isValid}} ifCreateSuccessful={ifCreateSuccessful}/>

      </form>
    </div>
  );
};

export default NFECourier