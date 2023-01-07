import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { spinnerReducer } from "./spinnerReducer";
import { ifAuthReducer } from "./ifAuthReducer";

const rootReducer = combineReducers({
    ifAuth: ifAuthReducer,
    spinner : spinnerReducer,
})



export const store = createStore(rootReducer, composeWithDevTools())
