import React from "react";
import { useEffect } from "react";

import "./ChatHistory.css";

import getCourierMessages from "../../../../../../../../services/couriers/getCourierMessages";

//components
import ChatMessage from "./ChatMessage";

//redux
import {useDispatch, useSelector } from "react-redux";

import { setCourierChatAction } from "../../../../../../../../store/courierChatReducer";

const ChatHistory = () => {

  const dispatch = useDispatch()

  const courierId = useSelector(state=>state.courier._id)
  const chatArr = useSelector(state=>state.courierChat)

  useEffect(() => {
    // console.log('use effect chat works')
    if (courierId) {
      getCourierMessages(courierId).then(res=>{
        // console.log(res)
        dispatch(setCourierChatAction(res));
      })
    }


  // eslint-disable-next-line
  }, [courierId]);

    return (
      <div className="chat-history">
        { Array.isArray(chatArr)
          ?chatArr.map(el=><ChatMessage messageObj={el} key={el.date}/>)
          : <span>Loading ... </span>
        }
      </div>
    );
    
}

export default ChatHistory