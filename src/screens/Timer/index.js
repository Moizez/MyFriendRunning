import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input'
import { colors } from '../../styles/theme.json'
import { Container, Text, Title, Button, Spacer, ProgressCircle, Badge } from '../../styles';

const Timer = () => {
    return (
        <Container background='dark' hasPadding>
            <Container justify='center' align='center'>
                <Text>Tempo Restante</Text>
                <Spacer />
                <Title big color='danger'>25:00</Title>
                <Spacer size='50px' />

                <Title small color='muted'>Moisés, faltam</Title>
                <Container spacing='25px' height='250px' justify='center' align='center'>
                    <ProgressCircle
                        progress={0.5}
                        background='dark'
                        size='250px'
                        color='danger'
                    />
                    <Title color='light' big bold scale={1.7}>3.15</Title>
                </Container>
                <Title small color='muted'>Km para bater a meta</Title>

            </Container>
            <Badge big align='center'>R$ -10,00</Badge>
            <Spacer size='20px' />
            <Button block background='danger'>Desistir</Button>
        </Container>
    )
}

export default Timer;