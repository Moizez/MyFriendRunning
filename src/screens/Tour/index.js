import React, { useState } from 'react';
import { Container, Cover, Spacer, Title, Text, Button } from '../../styles/'
import AsyncStorage from '@react-native-async-storage/async-storage';

import illustrationOne from '../../assets/illustration-1.png'
import illustrationTwo from '../../assets/illustration-2.png'
import illustrationThree from '../../assets/illustration-3.png'

import { replace } from '../../services/navigation'

const Tour = () => {

    const [currentTour, setCurrentTour] = useState(0)

    const tourData = [
        {
            bg: 'dark',
            button: 'primary',
            title: 'Chega de rotina sem motivação.',
            desc: 'Pensamos em um serviço perfeito pra você não perder mais aquele compromisso inadiável.',
            descColor: 'muted',
            pic: illustrationOne,
        },
        {
            bg: 'primary',
            button: 'dark',
            title: 'Construa hábitos por bem (ou mal).',
            desc: 'Pensamos em um serviço perfeito pra você não perder mais aquele compromisso inadiável.',
            descColor: 'light',
            pic: illustrationTwo,
        },
        {
            bg: 'dark',
            button: 'primary',
            title: 'Ganhe dinheiro com os amigos.',
            desc: 'Pensamos em um serviço perfeito pra você não perder mais aquele compromisso inadiável.',
            descColor: 'muted',
            pic: illustrationThree,
        },
    ];

    const goToSignIn = async () => {
        await AsyncStorage.setItem('@tour', 'Y')
        replace('SignIn')
    }

    return (
        <Container background={tourData[currentTour]?.bg} hasPadding justify='center'>
            <Spacer size='40px' />
            <Title big color='light'>{tourData[currentTour]?.title}</Title>
            <Spacer size='50px' />
            <Cover resizeMode='contain' width='100%' height='300px' source={tourData[currentTour]?.pic} />
            <Spacer size='50px' />
            <Text color={tourData[currentTour]?.descColor} align='center'>{tourData[currentTour]?.desc}</Text>
            <Spacer size='50px' />
            <Button
                onPress={() => {
                    if (currentTour === 2) {
                        goToSignIn()
                    } else {
                        setCurrentTour(currentTour + 1)
                    }
                }}
                background={tourData[currentTour]?.button}
                block
            >
                {currentTour === 2 ? 'Explorar' : 'Próximo'}
            </Button>
        </Container>
    );
}

export default Tour