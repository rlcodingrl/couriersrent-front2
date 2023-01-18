const defaultState = 0

const SET_COURIER_COUNTER = "SET_COURIER_COUNTER";
  
export const courierCounterReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_COURIER_COUNTER: 
        return state+1
      default: return state
    }
  }

export const setCourierCounterRedux = ()=>({type: SET_COURIER_COUNTER });
