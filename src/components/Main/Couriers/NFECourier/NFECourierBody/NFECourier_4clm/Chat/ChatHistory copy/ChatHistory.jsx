import React from "react";
import { useEffect } from "react";

import "./ChatHistory.css";

import getCourierMessages from "../../../../../../../../../services/couriers/getCourierMessages";

//redux
import {useDispatch, useSelector } from "react-redux";

import { setCourierChatAction } from "../../../../../../../../../store/courierChatReducer";

const ChatHistory = () => {

  const dispatch = useDispatch()

  const courierId = useSelector(state=>state.courier._id)
  const chatArr = useSelector(state=>state.courierChat)

  useEffect(() => {
    console.log('use effect chat works')
    getCourierMessages(courierId).then(res=>{
      console.log(res)
      dispatch(setCourierChatAction(res));
    });
  // eslint-disable-next-line
  }, [courierId]);

    return (
      <div className="chat-history">
        { chatArr.map((el=>{
          return (
            <div>
              {el.user_name}
              {el.text}
            </div>
          )
          }))
        }
      </div>
    );
    
}

export default ChatHistory