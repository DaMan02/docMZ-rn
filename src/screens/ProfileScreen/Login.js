import React from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import LoginHeader from '../../components/LoginHeader';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NormalButton from '../../components/NormalButton';
import { TextInput } from 'react-native-paper';
import ChipGroup from '../../components/ChipGroup';
import Icon from 'react-native-vector-icons/Feather';
import * as Util from '../../utils/Util'

class Login extends React.Component {

    state = {
        isDoctor: true,
        email: '',
        pass: '',
        hidePass: true,
    }

    onChangePass(text) {
        this.setState({ pass: text })
    }

    onChangeEmail(text) {
        this.setState({ email: text })
    }

    chipToggle() {
        this.setState({
            isDoctor: !this.state.isDoctor
        })
    }

    toast(msg) {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }

    onLogin() {
        if (!Util.validateEmail(this.state.email)) {
            this.toast('Please enter a valid email !')
            return
        }
        if (this.state.pass.length < 4) {
            this.toast('Password is invalid !')
            return
        }
        alert('Login successful !')
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader title='Login to your docMZ account' />
                <ChipGroup
                    onPress1={() => this.chipToggle()}
                    selected1={this.state.isDoctor}
                    onPress2={() => this.chipToggle()}
                    selected2={!this.state.isDoctor} />
                <TextInput
                    style={{ ...styles.searchbar, marginTop: hp('6%') }}
                    label='E-mail'
                    mode='flat'
                    dense={true}
                    selectionColor={colors.primary1}
                    underlineColor={colors.shadow}
                    onChangeText={text => this.onChangeEmail(text)}
                    value={this.state.email}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.searchbar}
                    label='Password'
                    secureTextEntry={this.state.hidePass}
                    mode='flat'
                    dense={true}
                    selectionColor={colors.primary1}
                    underlineColor={colors.shadow}
                    onChangeText={text => this.onChangePass(text)}
                    value={this.state.pass}
                    keyboardType='default'
                />
                <TouchableOpacity activeOpacity={0.4} style={styles.iconMain}
                    onPress={() => this.setState({ hidePass: !this.state.hidePass })}>
                    <Icon style={styles.icon} name={this.state.hidePass ? 'eye-off' : 'eye'} size={26} color='#3B3B3B' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.hint} activeOpacity={0.6}>
                    <Text style={styles.login}>Forgot password?</Text>
                </TouchableOpacity>
                <NormalButton
                    text='LOG IN'
                    buttonStyle={styles.btn}
                    border={colors.primary1}
                    backgroundColor={colors.primary1}
                    textColor='white'
                    onPress={() => this.onLogin()}
                    radius={40} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    searchbar: {
        marginStart: wp('6%'),
        marginEnd: wp('6%'),
        marginTop: hp('4%'),
        backgroundColor: 'white'
    },
    hint: {
        marginStart: wp('6%'),
        alignSelf: 'flex-start',
        marginEnd: wp('6%'),
        marginBottom: hp('6%')
    },
    btn: {
        padding: 16,
        marginTop: 10,
    },
    login: {
        ...fonts.para,
        color: colors.link,
        marginStart: 6
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    iconMain: {
        marginTop: hp('3%'),
        alignSelf: 'flex-end',
        marginEnd: wp('10%')
    }
});

export default Login;