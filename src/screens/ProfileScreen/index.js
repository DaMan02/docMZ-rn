import React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing'
import Register from './Register'
import Login from './Login';

const Stack = createStackNavigator();

class ProfileScreen extends React.Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator
                initialRouteName='Landing'
                screenOptions={{
                    headerShown: false
                  }}>
                    <Stack.Screen name="Landing" component={Landing} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default ProfileScreen;