import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, SearchScreen } from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown:false, cardStyle: {backgroundColor:'#fff'} }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}