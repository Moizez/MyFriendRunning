import React, { useState } from 'react';
import { Container, Cover, Spacer, Title, Text, Button } from '../../styles/'
import SignInModal, { modalRef as modalSignInRef } from '../../components/Modal/SignInModal';
import InviteModal, { modalRef as modalInviteRef } from '../../components/Modal/InviteModal';
import logo from '../../assets/logo.png'

const SignIn = () => {

    const [currentTour, setCurrentTour] = useState(0)

    return (
        <>
            <SignInModal />
            <InviteModal />
            <Container background='dark' hasPadding align='center' justify='center'>
                <Cover source={logo} width='80%' height='280px' resizeMode='contain' />
                <Spacer size='100px' />

                <Button block onPress={() => modalSignInRef.current.open()}>Entra na minha conta</Button>
                <Spacer />
                <Button block mode='text' onPress={() => modalInviteRef.current.open()}>Pedir convite</Button>
                <Spacer size='30px' />
                <Text color="light" align="center" small>
                    Ao fazer login, você concorda com nossos{''}
                    <Text color="primary" decoration='underline' small>
                        Termos e condições
                    </Text>{' '}
                    e{' '}
                    <Text color="primary" decoration='underline' small>
                        Política de privacidade
                    </Text>
                    .
                </Text>
            </Container>
        </>
    );
}

export default SignIn