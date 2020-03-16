import React from 'react';
// import { View, Text } from 'react-native';
import SignedOut from './SignedOut';
import ProfileMain from './ProfileMain';
import AccountDetails from './AccountDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../SettingsScreen';

const Stack = createStackNavigator();

class ProfileScreen extends React.Component {
    render() {
        return (
            //    <SignedOut/>
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='ProfileMain'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="ProfileMain" component={ProfileMain} />
                    <Stack.Screen name="AccountDetails" component={AccountDetails} />
                    <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default ProfileScreen;