import produce from 'immer'
import types from "./types"

const INITIAL_STATE = {
    user: {},
    userForm: {},
    form: {
        disabled: false,
        loading: false,
        saving: false
    }
}

function app(state = INITIAL_STATE, action) {

    switch (action.type) {
        case types.SET_REDUCER: {
            return produce(state, (draft) => {
                draft[action.key] = action.payload
            })
        }

        case types.SET_USER: {
            return produce(state, (draft) => {
                draft.userForm = { ...state.userForm, ...action.payload }
            })
        }

        case types.SET_REDUCER: {
            return produce(state, (draft) => {
                draft[action.key] = INITIAL_STATE[action.key]
            })
        }

        default:
            return state
    }
}

export default app