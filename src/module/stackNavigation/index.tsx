import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { RootStackParamList } from './type';
import Home from '../home';
import Login from '../auth';


const StackNavigation = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                options={{ headerShown: false }}
                name="LoginScreen"
                component={Login}
            />
            <Stack.Screen
                options={{ headerShown: false }}
                name="HomeScreen"
                component={Home}
            />
        </Stack.Navigator>
    )
}

export default StackNavigation
