import React, { Component } from 'react';
import Launch from './Launch';
import DocPublicProf from './DocPublicProf';
import DoctorSearch from './DoctorSearch';
import ConsultOptions from './ConsultOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

class DoctorScreen extends Component {

    render() {
        return (
          <NavigationContainer independent={true}>
               <Stack.Navigator
                  initialRouteName='Launch'
                  screenOptions={{
                      headerShown: false
                  }}>
                  <Stack.Screen name="Launch" component={Launch} />
                  <Stack.Screen name="DocPublicProf" component={DocPublicProf} />
                  <Stack.Screen name="DoctorSearch" component={DoctorSearch} />
                  <Stack.Screen name="ConsultOptions" component={ConsultOptions} />
              </Stack.Navigator>
          </NavigationContainer>
        );
    }
}

export default DoctorScreen;
