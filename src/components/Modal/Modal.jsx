import React from "react";

import "./Modal.css";

//icon
import CloseIcon from "../../assets/CloseIcon";
import YesIcon from "../../assets/YesIcon";
import NoIcon from "../../assets/NoIcon";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setModalFalse } from "../../store/modalReducer";

//customHook
import useWhatOnYesToDo from "../../custom-hooks/useWhatOnYesToDo";


const Modal = () => {
  const dispatch = useDispatch();
  const modalAction = useSelector(state=>state.modal.mode)
  const courierName = useSelector(state=>state.modal.courierName)

  const onClickYes = useWhatOnYesToDo()

  return (
    <div className="modal" onClick={()=>{dispatch(setModalFalse())}}>
      <div className="modal__content" onClick={(e)=>{e.stopPropagation()}}>
        <div className="modal__content__header">
          <div  onClick={()=>{dispatch(setModalFalse())}}>{CloseIcon()}</div> 
        </div>
        <div className="modal__content__content">
          <p>
            <span className="modal_actionText">
               {modalAction}{` `}
            </span>
            <span>
              {courierName}
            </span>
          </p>
          <p>Are you sure?</p>
          
        </div>
        <div className="modal__content__footer">
          <div className="yesNoBtn" onClick={onClickYes} >
            {YesIcon()}
          </div>
          <div className="yesNoBtn" onClick={onClickYes}>
            {NoIcon()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
