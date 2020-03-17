import React, { Component } from 'react';
import {
    View,
    Text,
    StatusBar,
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

class Launch extends Component {

    consult(bool) {
        this.props.consultNowUpdate(bool)
        this.props.navigation.navigate('DoctorSearch')
    }

    render() {
        return (
            <View style={styles.master}>
                <StatusBar backgroundColor='white' barStyle="dark-content" />
                <Image source={require('../../assets/images/landing_icon.png')}
                    style={styles.image} />
                <Text style={styles.big}>Doctor On Demand</Text>
                <Text style={styles.small1}>Consult a doctor now !</Text>
                <Text style={styles.small}>Find a doctor nearby or connect online.</Text>
                <LongButton onPress={() => this.consult(true)}
                    text='VISIT NOW' backgroundColor={colors.greenblue} textColor='white' />
                <LongButton onPress={() => this.consult(false)}
                    text='CONSULT' backgroundColor='white' textColor='black' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        resizeMode: 'contain',
        height: hp('22%'),
        marginTop: hp('10%')
    },
    master: {
        flex: 1,
        backgroundColor: 'white'
    },
    big: {
        ...fonts.header,
        marginTop: hp('8%'),
        alignSelf: 'center'
    },
    small1: {
        ...fonts.para_thin,
        marginTop: hp('2%'),
        alignSelf: 'center',
        maxWidth: wp('60%')
    },
    small: {
        ...fonts.para_thin,
        alignSelf: 'center',
        marginBottom: hp('5%'),
        maxWidth: wp('60%'),
        textAlign: 'center'
    }
});

const mapDispatchToProps = dispatch => ({
    consultNowUpdate: val => dispatch({ type: 'TOGGLE_CONSULT_TIME', consultNow: val }),
});

export default connect(null, mapDispatchToProps)(Launch);
