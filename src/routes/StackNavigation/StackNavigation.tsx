import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Home from '../../screens/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

const StackNavigation = () => {
    return (
        <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation;