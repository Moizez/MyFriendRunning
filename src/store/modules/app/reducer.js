import produce from 'immer'
import types from "./types"

const INITIAL_STATE = {
    user: {},
}

function app(state = INITIAL_STATE, action) {

    return produce(state, draft => {
        switch (action.type) {
            case types.SET_REDUCER: {
                draft[action.key] = action.payload
            }

            default:
                return state
        }
    })
}

export default app