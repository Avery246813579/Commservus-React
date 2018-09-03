import {
    UPDATE
} from "../actions/index";

let cloneObject = function (obj) {
    return JSON.parse(JSON.stringify(obj))
};

const defaultState = {
    account: {}
};

let newState = cloneObject(defaultState);

export default function (state = newState, action) {
    switch (action.type) {
        case UPDATE:
            return {...state, newThing: action.payload};
        default:
            return state
    }
}