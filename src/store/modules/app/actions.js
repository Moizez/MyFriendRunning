import types from "./types";

export function signinUser() {
    return { type: types.SIGNIN_USER }
}

export function setReducer(payload, key) {
    return { type: types.SET_REDUCER, payload, key }
}

export function setUser(payload) {
    return { type: types.SET_USER, payload };
}

export function reset(key) {
    return { type: types.RESET, key }
}