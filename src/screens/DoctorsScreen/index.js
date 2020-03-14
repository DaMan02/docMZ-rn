import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Launch from './Launch';
import DocProfile from './DocProfile'

const Stack = createStackNavigator();

class DoctorsScreen extends Component {

  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName='ProfileMain'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="ProfileMain" component={Launch} />
          <Stack.Screen name="DocProfile" component={DocProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default DoctorsScreen;
