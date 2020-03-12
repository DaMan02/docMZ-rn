import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

class Login extends React.Component {

    state = {
        isDoctor: true,
    }

    onChangeText(text) {

    }

    chipToggle() {
        this.setState({
            isDoctor: !this.state.isDoctor
        })
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
                    onChangeText={text => this.onChangeText(text)}
                    value={this.props.search}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.searchbar}
                    label='Password'
                    mode='flat'
                    dense={true}
                    selectionColor={colors.primary1}
                    underlineColor={colors.shadow}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.props.search}
                    keyboardType='visible-password'
                />
                <TouchableOpacity style={styles.hint} activeOpacity={0.6}>
                    <Text style={styles.login}>Forgot password?</Text>
                </TouchableOpacity>
                <NormalButton
                    text='LOG IN'
                    buttonStyle={styles.btn}
                    border={colors.primary1}
                    backgroundColor={colors.primary1}
                    textColor='white'
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
        marginTop:  hp('6%'),
        alignSelf: 'flex-end',
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
    }

});

export default Login;