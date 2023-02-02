import React from "react";
import { useState } from "react";

import "./ChatNewMessage.css";

import {
  setSpinnerTrue,
  setSpinnerFalse,
} from "../../../../../../../../store/spinnerReducer";

import sendCourierMessage from "../../../../../../../../services/couriers/sendCourierMessage";
import getCourierMessages from "../../../../../../../../services/couriers/getCourierMessages";

//redux
import { useDispatch, useSelector } from "react-redux";

const ChatNewMessage = () => {
  const courierId = useSelector((state) => state.courier._id);
  const userId = useSelector((state) => state.user.id);

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  console.log(text);

  return (
    <div className="chat-new-message">
      <textarea
        name=""
        id=""
        rows="4"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      <br />
      <button
        onClick={() => {
          console.log('onclick works')
          dispatch(setSpinnerTrue());
          sendCourierMessage(courierId, userId, text).then((res) => {
            console.log(res);
            setText('')
            dispatch(setSpinnerFalse());
            getCourierMessages(courierId)
          });
        }}
      >
        submit
      </button>
    </div>
  );
};

export default ChatNewMessage;
