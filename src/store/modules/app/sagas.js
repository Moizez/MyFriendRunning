import { takeLatest, all } from 'redux-saga/effects'
import { signinUser } from './actions'
import types from './types'

export function* signInUser() {
    //logica do login

    // * é quase como o async
    // yield é como o await 

}

export default all([
    takeLatest(types.SIGNIN_USER, signinUser)
])