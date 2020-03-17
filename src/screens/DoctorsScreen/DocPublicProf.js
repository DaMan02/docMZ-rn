import React from 'react';
import { View, Text, StyleSheet, Image, BackHandler } from 'react-native';
import fonts from '../../assets/fonts';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import colors from '../../assets/colors';
import NormalButton from '../../components/NormalButton';
import dimen from '../../assets/dimen';

class DocPublicProf extends React.Component {

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

    nextScreen(navigation, now){
       now ? navigation.navigate('Visit') : navigation.navigate('ConsultOptions')
    }

    render() {

        const { navigation } = this.props;
        const { docName } = this.props.route.params;
        const  now  = this.props.consultNow;
        console.log(now)
        const { screen } = now ? 'Visit' : 'ConsultOptions';

        let btnText = now ? 'VISIT NOW' : 'CONSULT';
        return (
            <View style={styles.main}>
                <View style={styles.dp}>
                    <Image source={require('../../assets/images/doc.jpg')}
                        style={styles.image} />
                    <View style={styles.btn}>
                        <NormalButton onPress={() => this.nextScreen(navigation, now)}
                            radius={8} text={btnText} backgroundColor={colors.greenblue} textColor='white'></NormalButton>
                    </View>
                </View>
                <ScrollView>
                    <Text style={{ ...fonts.large, alignSelf: 'flex-start', marginStart: wp('10%'), marginTop: hp('2%') }}>Dr. {docName}</Text>
                    <Text style={{ ...fonts.h3_thin, marginStart: dimen.ms, alignSelf: 'flex-start', marginBottom: hp('2%') }}>Surgeon</Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Status:   </Text>
                        <Text style={{ color: colors.darkgreen }}>Available</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Gender:   </Text>
                        <Text>Male</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Country:   </Text>
                        <Text>United States</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Address:   </Text>
                        <Text>21 S END AVE, New York - 110023</Text>
                    </Text>
                    <Text style={styles.txt}>
                        <Text style={{ color: colors.darkgray }}>Country:   </Text>
                        <Text>United States</Text>
                    </Text>
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
        marginTop: hp('1%'),
        flexDirection: 'row'
    },
    btn: {
        marginTop: hp('24%'),
        marginStart: wp('4%')
    },
    image: {
        marginTop: hp('10%'),
        marginStart: wp('10%'),
        height: hp('24%'),
        alignSelf: 'flex-start',
        width: 100,
        borderRadius: 10,
    },
    txt: {
        ...fonts.h3_thin,
        marginStart: dimen.ms,
        marginTop: 10
    }
});

const mapStateToProps = state => ({
    consultNow: state.consultNow,
});


export default connect(mapStateToProps, null)(DocPublicProf);