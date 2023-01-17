import React from "react";

import "./Modal.css";

import { useDispatch } from "react-redux";
import { setModalTrue, setModalFalse } from "../../store/modalReducer";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal" onClick={()=>{dispatch(setModalFalse())}}>
      <div className="modal__content" onClick={(e)=>{e.stopPropagation()}}>
        <div className="modal__content__content">
          Are you sure?
        </div>
        <div className="modal__content__footer">
          <button>Yes</button>
          <button onClick={()=>{dispatch(setModalFalse())}}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
