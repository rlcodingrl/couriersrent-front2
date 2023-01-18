const defaultState = false

const SET_MODAL_RESERVE = "SET_MODAL_RESERVE";
const SET_MODAL_UNRESERVE = "SET_MODAL_UNRESERVE";
const SET_MODAL_DELETE = "SET_MODAL_DELETE";
const SET_MODAL_FALSE = "SET_MODAL_FALSE";

export const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_MODAL_RESERVE:
        return {
          modal: true,
          mode: 'reserve',
          courierId: action.payload.courierId,
          courierName: action.payload.courierName
        }
      case SET_MODAL_UNRESERVE:
        return {
          modal: true,
          mode: 'unreserve',
          courierId: action.payload.courierId,
          courierName: action.payload.courierName
        }
      case SET_MODAL_DELETE:
        return {
          modal: true,
          mode: 'delete',
          courierId: action.payload.courierId,
          courierName: action.payload.courierName
        }
      case SET_MODAL_FALSE: 
        return false
      default: return state
    }
  }

export const setModalReserve = (courierId, courierName) => ({type: SET_MODAL_RESERVE, payload: {courierId, courierName}});
export const setModalUnreserve = (courierId, courierName) => ({type: SET_MODAL_UNRESERVE, payload: {courierId, courierName}});
export const setModalDelete = (courierId, courierName) => ({type: SET_MODAL_DELETE, payload: {courierId, courierName}});
export const setModalFalse = () => ({type: SET_MODAL_FALSE})
