import React from 'react';
import { Container, Text, Title, Button, Spacer, FlatList, Badge } from '../../styles';

const Balance = () => {
    return (
        <Container background='dark' hasPadding>
            <Spacer size='50px' />
            <Text color='light'>Seu saldo disponível</Text>
            <Spacer />
            <Title big color='light'>R$ 50,00</Title>
            <Spacer size='50px' />
            <Button block>Sacar Saldo</Button>
            <Spacer size='50px' />

            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                keyExtractor={(item) => item.toString() + new Date().getTime()}
                renderItem={({ item, index }) => (
                    <Container row height='50px' align='center' justify='space-between'>
                        <Container row align='center'>

                            <Container>
                                <Text bold color='light'>Saque Integral</Text>
                                <Spacer size='5px' />
                                <Text small>28/09/2021 às 22:00</Text>
                            </Container>
                        </Container>
                        <Badge color='success'>+ R$ 50,00</Badge>
                    </Container>
                )}
            />

        </Container>
    )
}

export default Balance;