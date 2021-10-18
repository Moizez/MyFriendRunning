import React, { createRef } from 'react';
import { Modalize } from 'react-native-modalize'
import { Container, Spacer, Title, Button, TextInput } from '../../styles/'
import TextInputMask from '../TextInputMask';

import { useSelector, useDispatch } from 'react-redux'
import { setUser as setUserAction } from '../../store/modules/app/actions'
import Uploader from '../Uploader';

export const modalRef = createRef()

const InviteModal = () => {

    const dispatch = useDispatch()
    const { userForm, form } = useSelector(state => state.app)

    const setUser = (payload) => {
        dispatch(setUserAction(payload))
    }


    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Container hasPadding background='dark'>
                <Title color='light'>Peça seu convite</Title>
                <Uploader
                    callback={photo => setUser({ photo: photo?.uri })}
                    image={userForm?.photo}
                />
                <Spacer />
                <TextInput
                    label='Nome'
                    placeholder='Digite seu nome'
                    onChangeText={name => setUser({ name })}
                    value={userForm?.name}
                    disabled={form?.saving}
                />
                <Spacer />

                <Spacer />
                <TextInput
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    onChangeText={email => setUser({ email })}
                    value={userForm?.email}
                    disabled={form?.saving}
                />
                <Spacer />

                <Spacer />
                <TextInputMask
                    label="CPF"
                    type={'cpf'}
                    placeholder='Digite seu CPF'
                    onChangeText={cpf => setUser({ cpf })}
                    value={userForm?.cpf}
                    disabled={form?.saving}
                />
                <Spacer />

                <Spacer />
                <TextInputMask
                    label='Nascimento'
                    placeholder='Digite sua data de nascimento'
                    type={'datetime'}
                    options={{
                        format: 'DD/MM/YYYY'
                    }}
                    onChangeText={birthday => setUser({ birthday })}
                    value={userForm?.birthday}
                    disabled={form?.saving}
                />
                <Spacer />

                <Spacer />
                <TextInputMask
                    label='Telefone'
                    placeholder='Digite seu telefone'
                    type={'cel-phone'}
                    options={{
                        maskType: 'BRL',
                        withDDD: true,
                        dddMask: '(99) '
                    }}
                    onChangeText={phone => setUser({ phone })}
                    value={userForm?.phone}
                    disabled={form?.saving}
                />
                <Spacer />

                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    secureTextEntry
                    onChangeText={password => setUser({ password })}
                    value={userForm?.password}
                    disabled={form?.saving}
                />
                <Spacer />

                <TextInput
                    label='Repita sua senha'
                    placeholder='Confirme sua senha'
                    secureTextEntry
                    onChangeText={passwordConfirm => setUser({ passwordConfirm })}
                    value={userForm?.passwordConfirm}
                    disabled={form?.saving}
                />

                <Spacer size='35px' />
                <Button block background='success'>Enviar Dados</Button>
            </Container>
        </Modalize>
    );
}

export default InviteModal