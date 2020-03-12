import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import LoginHeader from '../../components/LoginHeader';
import colors from '../../assets/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import NormalButton from '../../components/NormalButton';
class Register extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <LoginHeader title='Register with docMz' />
                <ScrollView>
                    <TextInput
                        style={{ ...styles.searchbar, marginTop: hp('6%') }}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='Name'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='E-mail'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='Password'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='NPI number'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='Speciality'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='Phone number'
                    />
                    <TextInput
                        style={styles.searchbar}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.props.search}
                        placeholder='Address'
                    />
                    <NormalButton
                        text='JOIN NOW'
                        buttonStyle={styles.btn}
                        border={colors.primary1}
                        backgroundColor={colors.primary1}
                        textColor='white'
                        radius={40} />
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
        borderBottomWidth: 1,
        borderBottomColor: colors.shadow,
        marginStart: wp('5%'),
        marginEnd: wp('5%'),
        marginTop: hp('4%')
    },
    btn: {
        padding: 16,
        marginTop: 10,
    }

});

export default Register;