import types from "./types";

export function signInUser() {
    return { type: types.SIGNIN_USER }
}

export function setReducer(payload, key) {
    return { type: types.SET_REDUCER, payload, key }
}

export function setUser(payload) {
    return { type: types.SET_USER, payload };
}

export function saveUser() {
    return { type: types.SAVE_USER }
}

export function setForm(payload) {
    return { type: types.SET_FORM, payload };
}

export function getHome() {
    return { type: types.GET_HOME}
}

export function reset(key) {
    return { type: types.RESET, key }
}