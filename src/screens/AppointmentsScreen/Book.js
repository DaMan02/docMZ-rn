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
import { format, compareAsc } from 'date-fns'
import ResizableButton from '../../components/ResizableButton';

class Book extends React.Component {

    state = {
        name: '',
        contact: '',
        date: '',
        dateSelected: false,
        reason: '',
        notes: ''
    }

    onChangeName(text) {
        this.setState({ name: text })
    }

    onChangeContact(text) {
        this.setState({ contact: text })
    }

    onChangeReason(text) {
        this.setState({ reason: text })
    }

    onChangeNotes(text) {
        this.setState({ notes: text })
    }

    setDate(dateResult) {
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
        if (typeof this.state.contact !== 'string' || this.state.name.length < 6) {
            this.toast('Please enter a valid number !')
            return
        }
        if (this.state.reason.length === 0) {
            this.toast('Please enter a reason !')
            return
        }
        if (!this.state.dateSelected) {
            this.toast('Please pick a date !')
            return
        }
        alert('Booked Successfully !')
    }

    render() {
        let date = this.state.date
        let displayDate = 'Pick a date'
        if (this.state.dateSelected) {
            console.log(format(new Date(date.year, date.month - 1, date.day), 'MMM, dd'))
            displayDate = format(new Date(date.year, date.month - 1, date.day), 'MMM, dd yyyy')
        }

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='white' barStyle="dark-content" />
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
                        onChangeText={text => this.onChangeContact(text)}
                        value={this.state.contact}
                        keyboardType='number-pad'
                    />
                    <Text style={styles.text}>Date and time</Text>
                    <View style={styles.date}>
                        <Text
                            style={{ ...styles.text2, color: this.state.dateSelected ? 'black' : colors.darkgray }}>
                            {displayDate}</Text>
                        <Text
                            style={{ ...styles.text2, color: this.state.dateSelected ? 'black' : colors.darkgray }}>
                            12:40 PM</Text>
                        <CustomDatePicker callback={this.setDate.bind(this)} />
                    </View>
                    <TextInput
                        label='Visit Reason'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        style={{ ...styles.searchbar, marginTop: hp('4%') }}
                        onChangeText={text => this.onChangeReason(text)}
                        value={this.state.reason}
                    />
                    <TextInput
                        label='Notes (optional)'
                        mode='outlined'
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        style={{ ...styles.searchbar, marginTop: hp('4%') }}
                        onChangeText={text => this.onChangeNotes(text)}
                        value={this.state.notes}
                    />
                    <View style={styles.btn}>
                        <ResizableButton
                            text='BOOK APPOINTMENT' onPress={() => this.onBook()} width={'80%'} height={46} />
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
        justifyContent: 'space-between',
        marginTop: hp('2%'),
        marginStart: wp('10%'),
        marginEnd: wp('10%'),
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
        marginTop: hp('4%'),
        marginBottom: hp('2%')
    },
    text: {
        ...fonts.h2,
        marginStart: wp('10%'),
        marginTop: hp('4%')
    },
    text2: {
        marginEnd: wp('6%'),
        fontSize: 16,
    }
});

export default Book;