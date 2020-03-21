import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto'
import HomeScreen from './HomeScreen';
import AppointmentsScreen from './AppointmentsScreen';
import DoctorsScreen from './DoctorsScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import colors from '../assets/colors';
import { StatusBar } from 'react-native'

const Tab = createMaterialBottomTabNavigator();

class TabsHome extends React.Component {
  render() {
    return (
      <NavigationContainer independent={true}>
        <StatusBar backgroundColor={colors.primary1} barStyle="dark-content" />
        <Tab.Navigator
          initialRouteName="Doctors"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              // if (route.name === 'Home') {
              //   iconName = 'home';
              // }else
              if (route.name === 'Search') {
                iconName = 'search';
              } else if (route.name === 'Appointment') {
                iconName = 'clock';
              }
              else if (route.name === 'Doctors') {
                iconName = 'doctor';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              }
              return <Icon name={iconName} size={20} color={focused ? colors.primary1 : colors.shadow} />;
            },
          })}
          // tabBarOptions={{
          //   activeTintColor: 'colors.primary1',
          //   inactiveTintColor: colors.darkgray,
          // }}
          barStyle={{ backgroundColor: 'white' }}
        >
          <Tab.Screen name="Search" component={SearchScreen} />
          {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
          <Tab.Screen name="Doctors" component={DoctorsScreen} />
          <Tab.Screen name="Appointment" component={AppointmentsScreen} /> 
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default TabsHome;
