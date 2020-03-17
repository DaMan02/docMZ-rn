import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
    ScrollView,
    ActivityIndicator,
    Image,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LongButton from '../../components/LongButton';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';

class Visit extends Component {

    render() {
        return (
            <View style={styles.master}>
               <Text>In person appointment screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    master: {
        flex: 1,
        backgroundColor: 'white'
    },
});

export default Visit;
