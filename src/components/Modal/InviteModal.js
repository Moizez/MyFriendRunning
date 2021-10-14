import React, { createRef } from 'react';
import { Modalize } from 'react-native-modalize'
import { Container, Spacer, Title, Button, TextInput } from '../../styles/'
import TextInputMask from '../TextInputMask';

export const modalRef = createRef()

const InviteModal = () => {
    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Container hasPadding background='dark'>
                <Title color='light'>Peça seu convite</Title>
                <Spacer />
                <TextInput label='Nome' placeholder='Digite seu nome' />
                <Spacer />

                <Spacer />
                <TextInput label='E-mail' placeholder='Digite seu e-mail' />
                <Spacer />

                <Spacer />
                <TextInputMask
                    label="CPF"
                    type={'cpf'}
                    placeholder='Digite seu CPF'
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
                />
                <Spacer />

                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    secureTextEntry
                />
                <Spacer />

                <TextInput
                    label='Repita sua senha'
                    placeholder='Confirme sua senha'
                    secureTextEntry
                />

                <Spacer size='35px' />
                <Button block background='success'>Enviar Dados</Button>
            </Container>
        </Modalize>
    );
}

export default InviteModal