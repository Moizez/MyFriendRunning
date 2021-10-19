import React, { createRef } from 'react';
import { Modalize } from 'react-native-modalize'
import { useSelector, useDispatch } from 'react-redux'
import { Alert } from 'react-native';
import signInScheme from '../../schemas/signInSchema';
import { setUser as setUserAction, signInUser as signInAction } from '../../store/modules/app/actions'

import { Container, Spacer, Title, Button, TextInput } from '../../styles/'

export const modalRef = createRef()

const SignInModal = () => {

    const dispatch = useDispatch()
    const { userForm, form } = useSelector(state => state.app)

    const setUser = (payload) => {
        dispatch(setUserAction(payload))
    }

    const sendSignIn = async () => {
        try {
            await signInScheme.validate(userForm)
            dispatch(signInAction)

        } catch ({ errors }) {
            Alert.alert(errors[0], 'Corrija o erro antes de continuar!')
        }
    }

    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Container hasPadding background='dark'>
                <Title color='light'>Entre com seus dados</Title>
                <Spacer />
                <TextInput
                    label='Seu e-mail'
                    placeholder='Digite seu e-mail'
                    onChangeText={email => setUser({ email })}
                    value={userForm?.email}
                    disabled={form?.loading}
                />
                <Spacer />
                <Spacer />
                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    secureTextEntry
                    onChangeText={password => setUser({ password })}
                    value={userForm?.password}
                    disabled={form?.loading}
                />
                <Spacer size='35px' />
                <Button
                    block background='success'
                    disabled={form?.loading}
                    loading={form?.loading}
                    onPress={sendSignIn}
                >
                    Fazer Login
                </Button>
            </Container>
        </Modalize>
    );
}

export default SignInModal