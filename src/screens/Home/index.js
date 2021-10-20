import React, { useEffect } from 'react';
import YoutubePlayer from "react-native-youtube-iframe";
import { colors } from '../../styles/theme.json'
import { useSelector, useDispatch } from 'react-redux'
import { getHome } from '../../store/modules/app/actions'

import {
    Container, ScrollView, GradientView, Cover, Text, Title, Spacer, ProgressCircle,
    Touchable, ActivityIndicator, Button, FlatList, Badge
} from '../../styles';

const Home = () => {

    const dispatch = useDispatch()
    const {
        user,
        isParticipant,
        challenge,
        balance,
        form,
        tracking,
        dailyAmount,
        challengePeriod,
        participatedTimes,
        discipline,
        dailyResults
    } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(getHome())
    }, [])

    return (
        <ScrollView background='dark' hasPadding>
            <GradientView
                colors={[colors.primary, colors.secondary]}
                end={{ x: 0, y: 1 }}
                locations={[-0.5, 1]}
                hasPadding
                justify='center'
                align='center'
            >
                <Container justify='center' align='center' spacing='20px 0 0'>
                    <Container justify='center' align='center' spacing='20px 0 0'>
                        <ProgressCircle background='primary' progress={0.5} />
                        <Cover
                            mode='cover'
                            radius='100px'
                            source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}
                        />
                    </Container>
                    <Spacer size='30px' />
                    <Title color='light'>Moisés Henrique</Title>
                    <Spacer />
                    <Text>moizez@gmail.com</Text>

                    <Touchable radius='3px' spacing='20px 0 0' hasPadding background='success' radius='3px'>
                        <Text color='dark'>Saldo conquistado</Text>
                        <Spacer />
                        <Title color='light'>R$ 29,00</Title>
                    </Touchable>
                </Container>
                <Spacer size='25px' />
            </GradientView>

            {/* <Container hasPadding spacing='-50px 0 0'>
               
            </Container> */}


            <Container hasPadding spacing='-50px 0 0'>
                {/* CARREGANDO INFORMAÇÕES */}
                {form?.loading &&
                    <Container background='dark50' hasPadding radius='3px' align='center'>
                        <Spacer />
                        <ActivityIndicator />
                        <Spacer size='20px' />
                        <Title color='light' small>Buscando Informações.</Title>
                        <Spacer />
                        <Text color='light'>Aguarde alguns instantes...</Text>
                    </Container>
                }

                <Spacer size='20px' />

                {/* CASO NÃO TENHA DESAFIOS */}
                {!form?.loading && !challenge &&
                    <Container background='dark50' hasPadding radius='3px' align='center'>
                        <Title color='light' small>Nenhum desafio encontrado.</Title>
                        <Spacer />
                        <Text color='light'>No momento, não há desafios para fazer.</Text>
                        <Spacer size='20px' />
                        <Button
                            block
                            background='success'
                            onPress={() => dispatch(getHome())}
                        >
                            Recarregar
                        </Button>
                    </Container>
                }

                <Spacer size='20px' />

                {/* CASO TENHA DESAFIO E NÃO PARTICIPE */}
                {!form?.loading &&
                    <Container background='dark50' hasPadding radius='3px'>
                        <Title color='light' small>Correr 2 km todos os dias às 5 am durante 15 dias.</Title>
                        <Spacer />
                        <Text color='light'>Mantenha a consistencia todos os dias para criar um hábito. O desafio termina em 30/07/2021.</Text>
                        <Spacer size='20px' />
                        <Button block background='success'>Participar Agora</Button>
                    </Container>
                }

                <Spacer size='20px' />

                {!form?.loading &&
                    <Container background='dark50' hasPadding radius='3px'>
                        <Title color='light' small>E aí? Vai encarar o desafio?</Title>
                        <Spacer />
                        <YoutubePlayer
                            height={180}
                            width='100%'
                            videoId='PJXvT4vpQwU'
                        />
                    </Container>
                }

                <Spacer size='20px' />

                {/* RESULTADOS DE HOJE */}
                {!form?.loading &&
                    <Container background='dark50' hasPadding radius='3px'>
                        <Text color='light'>Quarta-feira, 15/10/2021.</Text>
                        <Spacer />
                        <Title color='light' small>Resultados de hoje.</Title>
                        <Spacer size='20px' />
                        <FlatList
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                            renderItem={({ item }) => (
                                <Container row width='100%' height='50px' justify='space-between'>
                                    <Container row align='center'>
                                        <Cover
                                            source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}
                                            width='35px'
                                            height='35px'
                                            radius='35px'
                                            mode='cover'
                                            spacing='0 5px 0 0'
                                        />
                                        <Text bold color='light'>Moisés Henrique</Text>
                                    </Container>
                                    <Badge color="success">+ R$ 50</Badge>
                                </Container>
                            )}
                            ListEmptyComponent={() => (
                                <Container align='center' spacing='20px 0 0'>
                                    <Title color='light' small>Nenhum resultado...</Title>
                                    <Spacer />
                                    <Text color='light' align='center'>O seu desafio começa em{' '}<Text color='danger'>algumas horas</Text></Text>
                                    <Spacer size='20px' />
                                    <Button block background='success'>Recarregar</Button>
                                </Container>
                            )}
                        />
                    </Container>
                }

                <Spacer size='20px' />

                {/* SE ESTÁ NA HORA DO DESAFIO */}
                {!form?.loading &&
                    <Container background='dark50' align='center' hasPadding radius='3px'>
                        <Badge align='center' color="success">+ R$ 50</Badge>
                        <Spacer size='20px' />
                        <Text color='light'>Quarta-feira, 15/10/2021.</Text>
                        <Spacer />
                        <Title color='light' small>Inicie seu compromisso.</Title>
                        <Spacer size='30px' />
                        <Title big color='danger' scale={1.5}>30:00</Title>
                        <Spacer size='35px' />
                        <Button block background='primary'>iniciar Agora</Button>
                    </Container>
                }

            </Container>

        </ScrollView>
    )
}

export default Home;