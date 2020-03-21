import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppointmentList from './AppointmentList';

const Stack = createStackNavigator();

class AppointmentScreen extends Component {

    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='AppointmentList'
                    screenOptions={{
                        headerShown: false
                    }}>
                    {/* <Stack.Screen name="Launch" component={Launch} /> */}
                    <Stack.Screen name="AppointmentList" component={AppointmentList} />
                    {/* <Stack.Screen name="DoctorSearch" component={DoctorSearch} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default AppointmentScreen;
