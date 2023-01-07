const defaultState = false

const SET_AUTH_TRUE = "SET_AUTH_TRUE";
const SET_AUTH_FALSE = "SET_AUTH_FALSE";

export const ifAuthReducer = (state = defaultState, action) => {
    // console.log('ifAuthReducer')
    switch (action.type) {
      case SET_AUTH_TRUE:
        return true 
      case SET_AUTH_FALSE: 
        return false
      default: return state
    }
  }

export const setAuthTrue = () => ({type: SET_AUTH_TRUE});
export const setAuthFalse = () => ({type: SET_AUTH_FALSE})