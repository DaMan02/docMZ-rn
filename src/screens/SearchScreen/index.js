import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrugsSearch from './DrugsSearch';
import SearchResult from '../SearchResult';

const Stack = createStackNavigator();

class SearchScreen extends React.Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator
                    initialRouteName='DrugsSearch'
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="DrugsSearch" component={DrugsSearch} />
                    <Stack.Screen name="SearchResult" component={SearchResult} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default SearchScreen;