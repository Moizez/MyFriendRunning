import React from 'react';
import { Container, ScrollView, GradientView, Cover, Text, Title, Spacer, ProgressCircle } from '../../styles';

import { colors } from '../../styles/theme.json'

const Home = () => {
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
                            rounded='100px'
                            source={{ uri: 'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg' }}
                        />
                    </Container>
                    <Spacer size='30px' />
                    <Title color='light'>Moisés Henrique</Title>
                    <Spacer />
                    <Text>moizez@gmail.com</Text>
                </Container>
            </GradientView>
        </ScrollView>
    )
}

export default Home;