import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { colors } from '../styles/theme.json'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import Home from '../screens/Home'
import Ranking from '../screens/Ranking'
import Balance from '../screens/Balance'

const Tab = createBottomTabNavigator()

const MainTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.light,
                tabBarStyle: {
                    backgroundColor: colors.dark,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarLabel: 'Desafio',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='calendar-check' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Ranking'
                component={Ranking}
                options={{
                    tabBarLabel: 'Ranking',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='account-group' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Balance'
                component={Balance}
                options={{
                    tabBarLabel: 'Saldo',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='cash' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default MainTab;