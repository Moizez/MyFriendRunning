import React, { useRef, createRef } from 'react';
import { Modalize } from 'react-native-modalize'
import { Container, Cover, Spacer, Title, Text, Button, TextInput } from '../../styles/'

export const modalRef = createRef()

const SignInModal = () => {
    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Container hasPadding background='dark'>
                <Title color='light'>Entre com seus dados</Title>
                <Spacer />
                <TextInput label='Seu e-mail' placeholder='Digite seu e-mail' />
                <Spacer />
                <Spacer />
                <TextInput
                    label='Sua senha'
                    placeholder='Digite sua senha'
                    secureTextEntry
                />
                <Spacer size='35px' />
                <Button block background='success'>Fazer Login</Button>
            </Container>
        </Modalize>
    );
}

export default SignInModal