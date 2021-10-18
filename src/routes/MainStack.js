import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Tour from '../screens/Tour'
import SignIn from '../screens/SignIn'
import Payment from '../screens/Payment'
import Timer from '../screens/Timer'

import MainTab from './MainTab';

const Stack = createStackNavigator()

const MainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>
            <Stack.Screen name='MainTab' component={MainTab} />
            <Stack.Screen name='Tour' component={Tour} />
            <Stack.Screen name='SignIn' component={SignIn} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='Timer' component={Timer} />
        </Stack.Navigator>
    )
}

export default MainStack;