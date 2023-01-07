const defaultState = 'no courier selected'

const ADD_COURIER_DATA = "ADD_COURIER_DATA";
const CLEAR_COURIER_DATA = 'CLEAR_COURIER_DATA'
  
export const courierFullInfoReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_COURIER_DATA: 
        return {...action.payload}
      case CLEAR_COURIER_DATA:
        return 'no courier selected'
      default: return state
    }
  }

export const setCourierFullInfoAction = (data)=>({type: ADD_COURIER_DATA, payload: data});
export const clearCourierFullInfoAction = ()=>({type: CLEAR_COURIER_DATA});