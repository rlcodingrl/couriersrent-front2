import {createStore, combineReducers, applyMiddleware} from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { spinnerReducer } from "./spinnerReducer";

const rootReducer = combineReducers({
    spinner: spinnerReducer
})

export const store = createStore(rootReducer, composeWithDevTools())