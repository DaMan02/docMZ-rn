import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Dp from '../../components/Dp';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import ProfileMenu from '../../components/ProfileMenu';

class ProfileMain extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.dp}>
                    <Image source={require('../../assets/images/doc.jpg')}
                        style={styles.image} />
                    <Text style={{ ...fonts.h3, alignSelf: 'center', marginTop: hp('3%') }}>Dr. Andrew Fagelman</Text>
                    <Text style={{ ...fonts.h3_thin, alignSelf: 'center' }}>Surgeon</Text>
                </View>
                <ScrollView style={styles.list}>
                    <ProfileMenu title='Account Details' icon='ios-person' onPress={() => this.props.navigation.navigate('AccountDetails')} />
                    <ProfileMenu title='Slot Details' icon='md-calendar' />
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
        marginTop: hp('4%')
    },
    list: {
        marginTop: hp('14%')
    }
});

export default ProfileMain;