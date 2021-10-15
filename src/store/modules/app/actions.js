import types from "./types";

export function signinUser() {
    return { type: types.SIGNIN_USER }
}

export function setReducer(payload, key) {
    return {
        type: types.SET_REDUCER,
        payload: payload,
        key: key
    }
}