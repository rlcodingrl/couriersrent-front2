const defaultState = {}

const FULL_INFO_MODE = "FULL_INFO_MODE";
const EDIT_MODE = "EDIT_MODE";
const NEW_MODE = "NEW_MODE";
const CLOSE_NFE = "CLOSE_NFE";


export const nFEReducer = (state = defaultState, action) => {
    switch (action.type) {
      case FULL_INFO_MODE: 
        return {active: 'fullInfo', courierId: action.payload}
      case EDIT_MODE:
        return {active: 'edit', courierId: action.payload}
      case NEW_MODE:
        return {active: 'new', courierId: ''}  
      case CLOSE_NFE:
        return {}
      default: return state
    }
  }

export const setFullInfoModeAction = (courierId)=>({type: FULL_INFO_MODE, payload: courierId});
export const setEditModeAction = (courierId)=>({type: EDIT_MODE, payload: courierId});
export const setNewModeAction = ()=>({type: NEW_MODE});
export const setCloseNFEAction = ()=>({type: CLOSE_NFE});