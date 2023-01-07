import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { spinnerReducer } from "./spinnerReducer";
import { ifAuthReducer } from "./ifAuthReducer";
import { userReducer } from "./userReducer";
import { courierFullInfoReducer } from "./courierFullInfoReducer";

const rootReducer = combineReducers({
    ifAuth: ifAuthReducer,
    spinner : spinnerReducer,
    user: userReducer,
    courier: courierFullInfoReducer
})



export const store = createStore(rootReducer, composeWithDevTools())

console.log(store.getState())