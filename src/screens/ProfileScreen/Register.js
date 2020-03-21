import React from 'react';
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';
import LoginHeader from '../../components/LoginHeader';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import NormalButton from '../../components/NormalButton';
import { TextInput } from 'react-native-paper';
import ChipGroup from '../../components/ChipGroup';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import * as Util from '../../utils/Util'

class Register extends React.Component {

    state = {
        name: '',
        email: '',
        pass: '',
        pass2: '',
        hidePass: true,
    }

    onChangeName(text) {
        this.setState({ name: text })
    }

    onChangePass(text) {
        this.setState({ pass: text })
    }

    onChangePass2(text) {
        this.setState({ pass2: text })
    }

    onChangeEmail(text) {
        this.setState({ email: text })
    }

    renderDoctorFields() {
        if (this.props.isDoctor)
            return (
                <View>
                    <TextInput
                        style={styles.searchbar}
                        label='NPI Number'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                        keyboardType='email-address'
                    />
                    <TextInput
                        style={styles.searchbar}
                        label='Speciality'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                    />
                </View>
            )
    }

    toast(msg) {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }

    onJoin() {
        if (typeof this.state.name !== 'string' || this.state.name.length === 0) {
            this.toast('Please enter a valid name !')
            return
        }
        if (!Util.validateEmail(this.state.email)) {
            this.toast('Please enter a valid email !')
            return
        }
        if (!Util.validatePass(this.state.pass)) {
            this.toast('Password must be atleast 4 characters long !')
            return
        }
        if (this.state.pass !== this.state.pass2) {
            this.toast('Passwords do not match !')
            return
        }
        alert('Registered Successfully !')
    }

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader title='Register with docMZ' />
                {/* <ChipGroup /> */}
                <ScrollView>
                    <TextInput
                        label='Name'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        style={{ ...styles.searchbar, marginTop: hp('6%') }}
                        onChangeText={text => this.onChangeName(text)}
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.searchbar}
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
                        mode='flat'
                        dense={true}
                        secureTextEntry={this.state.hidePass}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangePass(text)}
                        value={this.state.pass}
                        keyboardType='default'
                    />
                    <TextInput
                        style={styles.searchbar}
                        label='Confirm Password'
                        mode='flat'
                        dense={true}
                        secureTextEntry={this.state.hidePass}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangePass2(text)}
                        value={this.state.pass2}
                        keyboardType='default'
                    />
                    <TouchableOpacity activeOpacity={0.4} style={styles.iconMain}
                        onPress={() => this.setState({ hidePass: !this.state.hidePass })}>
                        <Icon style={styles.icon} name={this.state.hidePass ? 'eye-off' : 'eye'} size={26} color='#3B3B3B' />
                    </TouchableOpacity>
                    {/* {this.renderDoctorFields()}  */}
                    {/* <TextInput
                        style={styles.searchbar}
                        label='Phone number'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                        keyboardType='number-pad'
                    /> */}
                    {/* <TextInput
                        style={styles.searchbar}
                        label='Address'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                    /> */}
                    <NormalButton
                        text='JOIN NOW'
                        buttonStyle={styles.btn}
                        border={colors.primary1}
                        backgroundColor={colors.primary1}
                        textColor='white'
                        onPress={() => this.onJoin()}
                        radius={40} />
                    <View style={styles.hint}>
                        <Text style={fonts.para_thin}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                            activeOpacity={0.6}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
        marginStart: wp('10%'),
        marginEnd: wp('10%'),
        marginTop: hp('4%'),
        backgroundColor: 'white'

    },
    hint: {
        marginTop: 16,
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 16
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

const mapStateToProps = state => ({
    isDoctor: state.isDoctor,
});

export default connect(mapStateToProps, null)(Register);