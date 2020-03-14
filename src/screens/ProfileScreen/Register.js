import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
import {connect} from 'react-redux';

class Register extends React.Component {

    state = {
        search: ''
    }

    onChangeText(text) {

    }

    renderDoctorFields() {
        if(this.props.isDoctor)
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

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader title='Register with docMZ' />
                <ChipGroup/>
                <ScrollView>
                    <TextInput
                        label='Name'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        style={{ ...styles.searchbar, marginTop: hp('2%') }}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                    />
                    <TextInput
                        style={styles.searchbar}
                        label='E-mail'
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
                        label='Password'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                        keyboardType='visible-password'
                    />
                      {this.renderDoctorFields()} 
                    <TextInput
                        style={styles.searchbar}
                        label='Phone number'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        style={styles.searchbar}
                        label='Address'
                        mode='flat'
                        dense={true}
                        selectionColor={colors.primary1}
                        underlineColor={colors.shadow}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.search}
                    />
                    <NormalButton
                        text='JOIN NOW'
                        buttonStyle={styles.btn}
                        border={colors.primary1}
                        backgroundColor={colors.primary1}
                        textColor='white'
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
    }

});

const mapStateToProps = state => ({
    isDoctor: state.isDoctor,
  });

export default connect(mapStateToProps, null)(Register);