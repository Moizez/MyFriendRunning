import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Tour from '../screens/Tour'
import Signin from '../screens/SignIn'
import Payment from '../screens/Payment'
import Timer from '../screens/Timer'

import MainTab from './MainTab';

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MainTab' component={MainTab} />
            <Stack.Screen name='Tour' component={Tour} />
            <Stack.Screen name='Signin' component={Signin} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='Timer' component={Timer} />
        </Stack.Navigator>
    )
}

export default MainStack;