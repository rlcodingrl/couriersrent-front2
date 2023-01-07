const defaultState = false

const SET_SPINNER_TRUE = "SET_SPINNER_TRUE";
const SET_SPINNER_FALSE = "SET_SPINNER_FALSE";

export const spinnerReducer = (state = defaultState, action) => {
    console.log('spinnerReducer')
    console.log(action);
    switch (action.type) {
      case SET_SPINNER_TRUE:
        return true 
      case SET_SPINNER_FALSE: 
        return false
      default: return state
    }
  }

export const setSpinnerTrue = () => ({type: SET_SPINNER_TRUE});
export const setSpinnerFalse = () => ({type: SET_SPINNER_FALSE})
