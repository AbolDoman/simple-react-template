import {BUY} from "./types";

const initialValue = {
    counterMob: 100
};
export const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case BUY:
            return {...state, counterMob: state.counterMob - 1 };

        default:
            return state;
    }
};