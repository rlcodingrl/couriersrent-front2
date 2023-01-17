const defaultState = false

const SET_MODAL_TRUE = "SET_MODAL_TRUE";
const SET_MODAL_FALSE = "SET_MODAL_FALSE";

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_MODAL_TRUE:
        return true 
      case SET_MODAL_FALSE: 
        return false
      default: return state
    }
  }

export const setModalTrue = () => ({type: SET_MODAL_TRUE});
export const setModalFalse = () => ({type: SET_MODAL_FALSE})
