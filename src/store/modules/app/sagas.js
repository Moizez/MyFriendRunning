import { takeLatest, all, select, put, call } from 'redux-saga/effects'
import moment from 'moment'
import { Alert } from 'react-native'
import util from '../../../util/util'
import types from './types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../../services/api'

import { modalRef as modalInviteRef } from '../../../components/Modal/InviteModal'
import { modalRef as modalSignInRef } from '../../../components/Modal/SignInModal'

import { replace } from '../../../services/navigation'
import { setReducer, setForm, reset } from './actions'


export function* signInUser() {
    const { userForm: { email, password } } = yield select(state => state.app)
    yield put(setForm({ loading: true }))

    try {

        const { data: response } = yield call(api.post, '/user/login', { email, password })

        if (response.error) {
            throw new Error(response.message)
        }

        yield call(AsyncStorage.setItem('@user', JSON.stringify(response.user)))
        yield put(setReducer(response.user, 'user'))
        yield put(reset('userForm'))
        //modalInviteRef.current.close()
        yield call(modalSignInRef?.current?.close)
        yield call(replace, 'Home')

    } catch (error) {
        yield call(Alert.alert, 'Erro interno!', error.message)
    } finally {
        yield put(setForm({ loading: false }))
    }

}

export function* saveUser() {

    const { userForm } = yield select(state => state.app)
    yield put(setForm({ saving: true }))

    try {

        const form = new FormData()
        form.append('name', userForm?.name)
        form.append('email', userForm?.email)
        form.append('cpf', userForm?.cpf.match(/\d+/g).join('')) // Pega todos os digitos e transforma em string sem formatação
        form.append('birthday', moment(userForm?.birthday, 'DD/MM/YYYY').format('YYYY-MM-DD'))
        form.append('phone', userForm?.phonematch(/\d+/g).join(''))
        form.append('password', userForm?.password)

        form.append('photo', {
            name: new Date().getTime() + '.' + util.getMimeType(userForm?.photo?.uri),
            type: `image/${util.getMimeType(userForm?.photo?.uri)}`,
            uri: userForm?.photo?.uri,
        });

        const { data: response } = yield call(api.post, '/user', form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        if (response.error) {
            throw new Error(response.message)
        }

        yield put(reset('userForm'))
        //modalInviteRef.current.close()
        yield call(modalInviteRef?.current?.close)

        yield call(Alert.alert, 'Solicitação enviada!', 'Seu convite foi recebido com sucesso! Fique atento ao seu e-mail.')


    } catch (error) {
        yield call(Alert.alert, 'Erro interno!', error.message)
    } finally {
        yield put(setForm({ saving: false }))
    }

}

export default all([
    takeLatest(types.SIGNIN_USER, signInUser),
    takeLatest(types.SAVE_USER, saveUser),
])