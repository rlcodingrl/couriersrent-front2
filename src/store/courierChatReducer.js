const defaultState = 'no courier selected'

const SET_CHAT = "SET_COURIER_COUNTER";
const SET_CHAT_EMPTY = "SET_CHAT_EMPTY"
  
export const courierChatReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_CHAT: 
        return action.payload
      case SET_CHAT_EMPTY:
        return 'no courier selected'
      default: return state
    }
  }

export const setCourierChatAction = (messagesArr)=>({type: SET_CHAT, payload: messagesArr });
export const clearCourierChatAction = ()=>({type: SET_CHAT_EMPTY});
