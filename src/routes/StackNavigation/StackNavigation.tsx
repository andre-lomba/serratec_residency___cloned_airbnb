import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Home from '../../screens/Home';
import { ClickableProvider } from '../../context/ClickableContext';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
};

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <StatusBar hidden={false} translucent={true} style="dark" />
            <ClickableProvider>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                </Stack.Navigator>
            </ClickableProvider>
        </NavigationContainer>
    )
}

export default StackNavigation;