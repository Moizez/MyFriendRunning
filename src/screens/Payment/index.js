import React from 'react';
import { CreditCardInput } from 'react-native-credit-card-input'
import { colors } from '../../styles/theme.json'
import { Container, Text, Title, Button, Spacer } from '../../styles';

const Payment = () => {
    return (
        <Container background='dark' hasPadding>
            <Container spacing='50px 0 0'>
                <Title color='light'>Correr 2 km todos os dias às 5 am durante 15 dias.</Title>
                <Spacer />
                <Text>Mantenha a consistencia todos os dias para criar um hábito. O desafio termina em 30/07/2021</Text>
                <Spacer size='50px' />
                <CreditCardInput
                    allowScroll
                    requiresName
                    placeholders={{
                        number: '**** **** **** ****',
                        expiry: 'MM/AA',
                        cvc: 'CVC',
                        name: 'NOME COMPLETO'
                    }}
                    labels={{
                        number: 'NÚMERO DO CARTÃO',
                        expiry: 'DATA',
                        cvc: 'CVC/CCV',
                        name: 'NOME NO CARTÃO'
                    }}
                    inputStyle={{
                        color: colors.light
                    }}
                />
            </Container>


            <Button background='success' block>Pagar R$ 30,00</Button>
        </Container>
    )
}

export default Payment;