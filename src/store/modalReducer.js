const defaultState = false

const SET_MODAL_RESERVE = "SET_MODAL_RESERVE";
const SET_MODAL_UNRESERVE = "SET_MODAL_UNRESERVE";
const SET_MODAL_FALSE = "SET_MODAL_FALSE";

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_MODAL_RESERVE:
        return {
          modal: true,
          mode: 'reserve',
          courierId: action.payload
        }
      case SET_MODAL_UNRESERVE:
        return {
          modal: true,
          mode: 'unreserve',
          courierId: action.payload
        }  
      case SET_MODAL_FALSE: 
        return false
      default: return state
    }
  }

export const setModalReserve = (courierId) => ({type: SET_MODAL_RESERVE, payload: courierId});
export const setModalUnreserve = (courierId) => ({type: SET_MODAL_UNRESERVE, payload: courierId});
export const setModalFalse = () => ({type: SET_MODAL_FALSE})
