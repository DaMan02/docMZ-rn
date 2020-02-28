import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
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
                iconName = 'md-home';
              } else if (route.name === 'Settings') {
                iconName = 'ios-settings';
              }else if (route.name === 'Search') {
                iconName = 'ios-search';
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
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App
