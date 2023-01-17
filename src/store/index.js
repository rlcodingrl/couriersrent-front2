import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { spinnerReducer } from "./spinnerReducer";
import { ifAuthReducer } from "./ifAuthReducer";
import { userReducer } from "./userReducer";
import { courierFullInfoReducer } from "./courierFullInfoReducer";
import { nFEReducer } from "./nFECourierReducer";
import { usersListReducer } from "./usersListReducer";
import { modalReducer } from "./modalReducer";

const rootReducer = combineReducers({
    ifAuth: ifAuthReducer,
    spinner : spinnerReducer,
    modal : modalReducer,
    user: userReducer,
    courier: courierFullInfoReducer,
    nFE: nFEReducer,
    usersList: usersListReducer
})



export const store = createStore(rootReducer, composeWithDevTools())

// console.log(store.getState())