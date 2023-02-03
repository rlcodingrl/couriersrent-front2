import React from "react";
import { useEffect } from "react";

import "./ChatHistory.css";

import getCourierMessages from "../../../../../../../../services/couriers/getCourierMessages";

//components
import ChatMessage from "./ChatMessage";

//redux
import {useDispatch, useSelector } from "react-redux";

import { setCourierChatAction } from "../../../../../../../../store/courierChatReducer";
import { useRef } from "react";

const ChatHistory = () => {

  const dispatch = useDispatch()

  const courierId = useSelector(state=>state.courier._id)
  const chatArr = useSelector(state=>state.courierChat)

  const spanRef = useRef(null)

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

  useEffect(()=>{
    spanRef.current.scrollIntoView({behavior: 'smooth'})
  },[chatArr])

    return (
      <div className="chat-history">
        { Array.isArray(chatArr)
          ?chatArr.map(el=><ChatMessage messageObj={el} key={el.date}/>)
          : <span>Loading ... </span>
        }
        <span id='end-of-msgs' ref={spanRef}></span>

      </div>
    )

    
}

export default ChatHistory