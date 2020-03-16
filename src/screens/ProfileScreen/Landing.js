import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import NormalButton from '../../components/NormalButton';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class Landing extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <View style={styles.underline}></View>
                <View style={styles.buttons}>
                    <Text style={styles.login}>Log In or Register to get started !</Text>
                    <NormalButton
                        text='Log In'
                        backgroundColor={colors.primary1}
                        border={colors.primary1}
                        textColor='white'
                        radius={40}
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                    <Text style={styles.or}>OR</Text>
                    <NormalButton
                        text='Join'
                        backgroundColor='white'
                        textColor='black'
                        border={colors.primary1}
                        radius={40}
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title: {
        ...fonts.large,
        paddingStart: 18,
        paddingTop: 18,
        paddingBottom: 8
    },
    underline: {
        height: 2,
        backgroundColor: 'black',
        width: 100,
        marginStart: 18,
    },
    buttons: {
        padding: 10,
        alignSelf: 'center',
        marginTop: hp('16%')
    },
    or: {
        alignSelf: 'center',
        padding: 10
    },
    login: {
        ...fonts.h3,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 20
    }
});

export default Landing;