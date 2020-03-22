import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    BackHandler,
    StatusBar,
} from 'react-native';


class AddCards extends React.Component {

    backAction = () => {
        this.props.navigation.goBack()
        return true;
    };

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.backAction);
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.backAction);
    }

    render() {
        return (
           <View>
               <Text>Cards</Text>
           </View>
        )
    }
}

export default AddCards;