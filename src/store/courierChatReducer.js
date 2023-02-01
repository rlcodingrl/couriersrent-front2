const defaultState = [{text:'chat loading'}]

const SET_CHAT = "SET_COURIER_COUNTER";
  
export const courierChatReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_CHAT: 
        return action.payload
      default: return state
    }
  }

export const setCourierChatRedux = (messagesArr)=>({type: SET_CHAT, payload: messagesArr });
