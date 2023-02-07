// eslint-disable-next-line
import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { spinnerReducer } from "./spinnerReducer";
import { ifAuthReducer } from "./ifAuthReducer";
import { userReducer } from "./userReducer";
import { courierFullInfoReducer } from "./courierFullInfoReducer";
import { nFEReducer } from "./nFECourierReducer";
import { usersListReducer } from "./usersListReducer";
import { modalReducer } from "./modalReducer";
import { courierCounterReducer } from "./courierCounterReducer";
import { courierChatReducer } from "./courierChatReducer";

const rootReducer = combineReducers({
    ifAuth: ifAuthReducer,
    spinner : spinnerReducer,
    modal : modalReducer,
    user: userReducer,
    courierCounterReducer: courierCounterReducer,
    nFE: nFEReducer,
    courier: courierFullInfoReducer,
    courierChat: courierChatReducer,
    usersList: usersListReducer
})

export const store = createStore(rootReducer, composeWithDevTools())

// console.log(store.getState())