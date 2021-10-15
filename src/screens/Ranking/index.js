import React from 'react';
import { Container, Text, Title, Spacer, FlatList, ProgressBar, Cover } from '../../styles';

const Ranking = () => {
    return (
        <Container background='dark' hasPadding>
            <Spacer size='50px' />
            <Title color='light' big>Ranking</Title>

            <Container row height='140px'  align='center'>
                <Container hasPadding width='140px' background='success' radius>
                    <Text color='dark'>Saldo Extra</Text>
                    <Spacer />
                    <Title small color='light'>R$ 10,00</Title>
                </Container>

                <Container hasPadding>
                    <Text color='light'>Desafio (30 dias)</Text>
                    <Spacer />
                    <ProgressBar
                        progress={0.5}
                        width='100%'
                    />
                    <Spacer />
                    <Text small color='light'>50% (15 dias). Termina em 30/10/2021.</Text>
                </Container>
            </Container>

            <Container>
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                    keyExtractor={(item) => item.toString() + new Date().getTime()}
                    renderItem={({ item, index }) => (
                        <Container row height='50px' align='center' justify='space-between'>
                            <Container row align='center'>
                                <Text color='light'>{index + 1}º</Text>
                                <Cover
                                    source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}
                                    width='35px'
                                    height='35px'
                                    radius='35px'
                                    mode='cover'
                                    spacing='0 7px'
                                />

                                <Container>
                                    <Text color='light'>Moisés Henrique</Text>
                                    <Spacer size='5px' />
                                    <Text small>50% (15 dias)</Text>
                                </Container>
                            </Container>

                            <Container width='40%'>
                                <ProgressBar
                                    progress={0.5}
                                    width='100%'
                                />

                            </Container>


                        </Container>
                    )}
                />
            </Container>


        </Container>
    )
}

export default Ranking;