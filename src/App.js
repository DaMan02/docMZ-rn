import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import DoctorSearch from './screens/DoctorSearch';
import DocPublicProf from './screens/DocPublicProf';
import ConsultOptions from './screens/ConsultOptions';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator
          initialRouteName='ProfileMain'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="DoctorSearch" component={DoctorSearch} />
          <Stack.Screen name="DocPublicProf" component={DocPublicProf} />
          <Stack.Screen name="ConsultOptions" component={ConsultOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default App
