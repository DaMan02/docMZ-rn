import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Fontisto'
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppointmentsScreen from './screens/AppointmentsScreen';
import DoctorsScreen from './screens/DoctorsScreen';
import ProfileScreen from './screens/ProfileScreen';
// import SearchResult from './screens/SearchResult';
import colors from './assets/colors';

const Tab = createMaterialBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home';
              }else if (route.name === 'Settings') {
                iconName = 'player-settings';
              }else if (route.name === 'Search') {
                iconName = 'search';
              }else if (route.name === 'Appoint.') {
                iconName = 'clock';
              }else if (route.name === 'Doctors') {
                iconName = 'doctor';
              }else if (route.name === 'Profile') {
                iconName = 'person';
              }
              return <Icon name={iconName} size={24} color={focused ? colors.primary1 : colors.text3} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
          barStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen name="Search" component={SearchScreen} />           
          <Tab.Screen name="Appoint." component={AppointmentsScreen} /> 
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Doctors" component={DoctorsScreen} /> 
          <Tab.Screen name="Settings" component={SettingsScreen} />  
          <Tab.Screen name="Profile" component={ProfileScreen} />        
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App
