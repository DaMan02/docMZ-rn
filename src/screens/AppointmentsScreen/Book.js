import React from 'react';
import { View, Text, StyleSheet, ToastAndroid, StatusBar } from 'react-native';
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
import Titlebar from '../../components/Titlebar';
import CustomDialog from '../../components/CustomDatePicker';
import CustomDatePicker from '../../components/CustomDatePicker';

class Book extends React.Component {

    state = {
        name: '',
        email: '',
        date: 'Pick a date',
        dateSelected: false
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

    setDate(dateResult){
        this.setState({
            dateSelected: true,
            date: dateResult
        })
    }

    toast(msg) {
        ToastAndroid.show(msg, ToastAndroid.SHORT)
    }

    onBook() {

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
                <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
                <Titlebar title='Book an appointment' back />
                <ScrollView>
                    <TextInput
                        label='Full Name'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        style={{ ...styles.searchbar, marginTop: hp('4%') }}
                        onChangeText={text => this.onChangeName(text)}
                        value={this.state.name}
                    />
                    <TextInput
                        style={styles.searchbar}
                        label='Contact Number'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeEmail(text)}
                        value={this.state.email}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>Date and time</Text>
                    <View style={styles.date}>
                        <Text
                            style={{ ...styles.text2, color: this.state.dateSelected ? 'black' : colors.darkgray }}>
                            {this.state.date}</Text>
                        <CustomDatePicker callback={this.setDate.bind(this)}/>
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
    date: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: hp('4%'),
        marginStart: wp('6%')
    },
    searchbar: {
        marginStart: wp('6%'),
        marginEnd: wp('6%'),
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
    text: {
        ...fonts.h2,
        marginStart: wp('6%'),
        marginTop: hp('4%')
    },
    text2: {
        marginEnd: wp('6%'),
        fontSize: 16,
    }
});

export default Book;