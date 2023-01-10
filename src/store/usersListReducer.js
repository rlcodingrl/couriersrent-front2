const defaultState = null

const SET_USERS_LIST = "SET_USERS_LIST";
const CLEAR_USERS_LIST = 'CLEAR_USERS_LIST'
  
export const usersListReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_USERS_LIST: 
        return [...action.payload]
      case CLEAR_USERS_LIST:
        return null
      default: return state
    }
  }

export const setUsersListAction = (users)=>({type: SET_USERS_LIST, payload: users});
export const clearUsersListAction = ()=>({type: CLEAR_USERS_LIST});