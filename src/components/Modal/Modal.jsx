import React from "react";

import "./Modal.css";

//redux

import { useDispatch, useSelector } from "react-redux";
import { setModalFalse } from "../../store/modalReducer";
import { setSpinnerTrue } from "../../store/spinnerReducer";

//services

// onClickHandlers
import onClickReserveHandler from "../../services/onClickHandlers/onClickReserveHandler";
import onClickUnreserveHandler from "../../services/onClickHandlers/onClickUnreserveHandler";

const Modal = () => {
  const dispatch = useDispatch();
  const modalAction = useSelector(state=>state.modal.mode)
  const courierId = useSelector(state=>state.modal.courierId)
  const user = useSelector(state=>state.user)

  let onClickYes;
  if (modalAction==='reserve') { onClickYes = ()=>{onClickReserveHandler(dispatch,courierId,user) } }
  if (modalAction==='unreserve') { onClickYes = ()=>{onClickUnreserveHandler(dispatch,courierId) } }

  return (
    <div className="modal" onClick={()=>{dispatch(setModalFalse())}}>
      <div className="modal__content" onClick={(e)=>{e.stopPropagation()}}>
        <div className="modal__content__header">
          {modalAction} {courierId}
        </div>
        <div className="modal__content__content">
          Are you sure?
        </div>
        <div className="modal__content__footer">
          <button onClick={()=>{onClickYes()}}>Yes</button>
          <button onClick={()=>{dispatch(setModalFalse())}}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
