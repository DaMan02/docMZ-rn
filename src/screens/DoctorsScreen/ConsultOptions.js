import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import fonts from '../../assets/fonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import dimen from '../../assets/dimen';
import ConsultFormat from '../../components/ConsultFormat';

const ms = wp('10%');

class ConsultOptions extends React.Component {

    render() {
        const { navigation } = this.props;
        // const { docName } = this.props.route.params;
        return (
            <ScrollView style={styles.main}>
                <Text style={{ ...styles.title, marginTop: hp('6%') }}>Choose</Text>
                <Text style={styles.title}>Consultation</Text>
                <Text style={styles.title}>Format</Text>
                <View style={styles.scroll}>
                    <ConsultFormat title='Chat' sub='When you are just busy to talk' bg='#54E5DF' icon='chat' />
                    <ConsultFormat title='Video' sub='Face to face online video call' bg='#F09E62' icon='video'/>
                    <ConsultFormat title='Appointment' sub='Book an appointment to visit personally' bg='#C17BE8' icon='calendar'/>
                 </View>
                </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        ...fonts.extraLarge,
        marginStart: dimen.ms
    },
    scroll: {
        marginTop: hp('2%'),
    }
});

export default ConsultOptions;