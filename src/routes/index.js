import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { colors } from '../styles/theme.json'
import { navigationRef } from '../services/navigation'
import MainStack from './MainStack';

const Routes = () => {
    return (
        <>
            <StatusBar backgroundColor={colors.dark} />
            <NavigationContainer ref={navigationRef}>
                <MainStack />
            </NavigationContainer>
        </>
    )
}

export default Routes;