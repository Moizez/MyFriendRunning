import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { colors } from '../styles/theme.json'

import MainStack from './MainStack';

const Routes = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.dark} />
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        </>
    )
}

export default Routes;