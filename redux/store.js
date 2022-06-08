import {createStore} from "redux";
import {reducer} from "./mob/reducer";
export const store = createStore(reducer);