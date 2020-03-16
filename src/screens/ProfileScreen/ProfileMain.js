import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileMenu from '../../components/ProfileMenu';
import NormalButton from '../../components/NormalButton';
import colors from '../../assets/colors';
import dimen from '../../assets/dimen';

class ProfileMain extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.dp}>
                    <Image source={require('../../assets/images/doc.jpg')}
                        style={styles.image} />
                    <View style={styles.btn}>
                        <NormalButton
                            radius={8} text='Edit Profile' textColor='white' backgroundColor={colors.greenblue}></NormalButton>
                    </View>
                </View>
                <Text style={{ ...fonts.large, alignSelf: 'flex-start', marginStart: wp('10%'), marginTop: hp('2%') }}>Dr. Andrew Fagelman</Text>
                <Text style={{ ...fonts.h3_thin, marginStart: dimen.ms, alignSelf: 'flex-start'}}>Surgeon</Text>
                <ScrollView style={styles.list}>
                    <ProfileMenu title='Account Details' icon='ios-person' onPress={() => this.props.navigation.navigate('AccountDetails')} />
                    <ProfileMenu title='Slot Details' icon='md-calendar' />
                    <ProfileMenu title='Settings' icon='ios-settings' onPress={() => this.props.navigation.navigate('SettingsScreen')} />
                    <ProfileMenu title='Log Out' icon='md-log-out' />
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    dp: {
        flexDirection: 'row'
    },
    btn: {
        marginTop: hp('20%'),
        marginStart: wp('4%')
    },
    image: {
        marginTop: hp('6%'),
        marginStart: wp('10%'),
        height: hp('24%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    list: {
        marginTop: hp('4%')
    }
});

export default ProfileMain;