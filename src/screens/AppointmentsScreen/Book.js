import React from 'react';
import { View, Text, StyleSheet, ToastAndroid, StatusBar, BackHandler } from 'react-native';
import colors from '../../assets/colors';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import Titlebar from '../../components/Titlebar';
import CustomDatePicker from '../../components/CustomDatePicker';
import { format, compareAsc } from 'date-fns'
import ResizableButton from '../../components/ResizableButton';
import DoctorPreview from '../../components/DoctorPreview';
import TimeSlot from '../../components/TimeSlot';
import CustomAlert from '../../components/CustomAlert';

class Book extends React.Component {

    state = {
        name: '',
        contact: '',
        date: '',
        dateSelected: false,
        displayTime: '',
        reason: '',
        notes: '',
        showdialog: false
    }

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
        if (this.state.contact.length < 6 || this.state.contact.length > 12) {
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
        this.setState({ showdialog: true })
    }

    renderSlots = (slot) => {
        return (
            <TimeSlot time={slot.time} onPress={() => this.setState({ displayTime: slot.time })} />
        )
    }

    renderSlotView(slots) {
        if (this.state.dateSelected)
            return (
                <View style={styles.slots} horizontal showsHorizontalScrollIndicator={false}>
                    <FlatList
                        data={slots.timings}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderSlots(item)}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
    }

    render() {
        const { doctor } = this.props.route.params;
        let date = this.state.date
        let displayDate = 'Pick a date'
        if (this.state.dateSelected) {
            console.log(format(new Date(date.year, date.month - 1, date.day), 'MMM, dd'))
            displayDate = format(new Date(date.year, date.month - 1, date.day), 'MMM, dd yyyy')
        }
        const dialogMsg = 'Your appointment has been booked for ' + displayDate + ' at ' + this.state.displayTime + ' with Dr. ' + doctor.name;

        let tempSlots = {
            timings: [
                {
                    "id": 1,
                    "time": "10:30 AM"
                },
                {
                    "id": 2,
                    "time": "12:15 PM"
                },
                {
                    "id": 3,
                    "time": "3:30 PM"
                },
                {
                    "id": 4,
                    "time": "4:45 PM"
                },
                {
                    "id": 5,
                    "time": "7:00 PM"
                },
                {
                    "id": 6,
                    "time": "8:15 PM"
                },
            ]
        }

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={colors.primary1} barStyle="light-content" />
                <Titlebar title='Book an appointment' back onPress={() => this.backAction()} />
                <ScrollView>
                    <View style={styles.preview}>
                        <DoctorPreview
                            name={doctor.name} spec={doctor.speciality} loc={doctor.location.city + ', ' + doctor.location.country} hide />
                    </View>
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
                            {this.state.displayTime}</Text>
                        <CustomDatePicker callback={this.setDate.bind(this)} />
                    </View>
                    {this.renderSlotView(tempSlots)}
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
                    <CustomAlert
                        title='Appointment Booked !' titleColor={colors.greenblue}
                        msg={dialogMsg}
                        visible={this.state.showdialog}
                        callback={() => this.setState({ showdialog: false })} />
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
        backgroundColor: colors.bg
    },
    preview: {
        marginStart: wp('4%'),
        marginEnd: wp('4%'),
        marginTop: hp('5%'),
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: colors.primary2,
    },
    slots: {
        paddingStart: wp('6%'),
        marginTop: hp('3%')
    },
    date: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp('2%'),
        marginStart: wp('10%'),
        paddingStart: 10,
        paddingEnd: 10,
        marginEnd: wp('10%'),
        elevation: 0.4
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