const defaultState = {
    jwt: localStorage.getItem("jwt")
  }

const ADD_USER_DATA = "ADD_USER_DATA";
const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
  
export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_USER_DATA: 
        return {...state, ...action.payload}
      case CLEAR_USER_DATA:
        return {} 
      default: return state
    }
  }

export const setUserDataAction = (data)=>({type: ADD_USER_DATA, payload: data});
export const clearUserDataAction = ()=>({type: CLEAR_USER_DATA});