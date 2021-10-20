import React, { useState, useEffect } from 'react';
import SignInModal, { modalRef as modalSignInRef } from '../../components/Modal/SignInModal';
import InviteModal, { modalRef as modalInviteRef } from '../../components/Modal/InviteModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from '../../assets/logo.png'
import { replace } from '../../services/navigation'
import { useDispatch } from 'react-redux'
import { setReducer } from '../../store/modules/app/actions'

import { Container, Cover, Spacer, Title, Text, Button, ActivityIndicator } from '../../styles/'


const SignIn = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const getLoggedState = async () => {
        //await AsyncStorage.clear()
        const user = await AsyncStorage.getItem('@user')
        const tour = await AsyncStorage.getItem('@tour')
        
        if (!tour) {
            replace('Tour')
            return
        } else if (!user) {
            setLoading(false)
        } else {
            dispatch(setReducer(JSON.parse(user), 'user'))
            replace('MainTab')
        }
    }

    useEffect(() => {
        getLoggedState()
    }, [])

    return (
        <>
            <SignInModal />
            <InviteModal />
            <Container background='dark' hasPadding align='center' justify='center'>
                <Cover source={logo} width='80%' height='280px' resizeMode='contain' />
                <Spacer size='100px' />

                {loading
                    ? <ActivityIndicator size='large' />
                    : <>

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
                    </>}
            </Container>
        </>
    );
}

export default SignIn