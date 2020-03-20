import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Landing'
import Register from './Register'
import Login from './Login';
import { BackHandler } from 'react-native'

const Stack = createStackNavigator();

class SignedOut extends React.Component {
    // backAction = () => {
    //     this.props.navigation.goBack()
    //     return true;
    // };
    
    // componentWillUnmount() {
    //     BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    // }
    
    // componentDidMount() {
    //     BackHandler.addEventListener("hardwareBackPress", this.backAction);
    // }

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

export default SignedOut;