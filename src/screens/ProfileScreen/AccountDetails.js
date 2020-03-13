import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dp from '../../components/Dp';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

class AccountDetails extends React.Component {
    render() {
        return (
            <View style={styles.main}>
               <Text>Hi</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    dp: {
        marginTop: hp('4%')
    },
    list: {
        marginTop: hp('14%')
    }
});

export default AccountDetails;